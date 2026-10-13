import { parseMapping, flattenRows, isSingleHop, renderMapping } from "../lib/mapping.js";
import { parseTagLib, parseEntryTags, patchTagLib, appendTagRow } from "../lib/taglib.js";
import { ref, STRUCT_ROOT, META_DIR } from "../lib/paths.js";

const MAPPING = `${STRUCT_ROOT}/闭包映射表.md`;
const TAG_LIB = `${STRUCT_ROOT}/标签库.md`;
const decoder = new TextDecoder();
const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });
const readMd = async (ctx, path) => decoder.decode((await ctx.resources.read(ref(path))).content ?? new Uint8Array());

function hopResolve(rows, start) {
  const map = new Map(rows.map((r) => [r.from, r.to]));
  const seen = new Set();
  let cur = start;
  while (map.has(cur) && !seen.has(cur)) { seen.add(cur); cur = map.get(cur); }
  return cur;
}

const tool = {
  name: "apply_tag_merge",
  description:
    "Execute the user's merge adjudication on a label: normalize target to its current endpoint, upsert the mapping row, flatten the closure (single-hop invariant), append the evolution log, then patch 标签库 (merged label status → 并入→X, review-queue decision backfilled). " +
    "Record-only writes: the original label stays in 标签库 as history; only its status and the mapping's right value change. Run this AFTER the user decides a 复核队列 pair — the model proposes, the user decides.",
  parameters: {
    type: "object",
    properties: {
      mergedLabel: { type: "string", description: "The label being merged away (left column, 原始)." },
      target: { type: "string", description: "The surviving label (will be resolved to its current endpoint)." },
      date: { type: "string", description: "YYYY-MM-DD adjudication date." },
      decidedBy: { type: "string", description: "Who decided, default the user." },
      evidence: { type: "string", description: "Basis for the decision (copied into the evolution log)." },
      round: { type: "string", description: "Evolution round label, optional; defaults to next number." },
    },
    required: ["mergedLabel", "target", "date"],
  },
  sessionPermission: {
    kind: "workspace_write",
    describeSideEffect: (input) => ({
      kind: "file_write",
      summary: `Rewrite 结构库/闭包映射表.md and patch 结构库/标签库.md for merge ${input?.mergedLabel || "?"} → ${input?.target || "?"}`,
      ruleId: "paper-structure-modeling-apply-tag-merge",
    }),
  },
  async execute(input = {}, ctx) {
    const mergedLabel = String(input.mergedLabel || "").trim();
    const targetRaw = String(input.target || "").trim();
    if (!mergedLabel || !targetRaw) return json({ ok: false, message: "mergedLabel 与 target 必填" });
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(input.date || ""))) return json({ ok: false, message: "date 须为 YYYY-MM-DD" });

    const state = parseMapping(await readMd(ctx, MAPPING));
    const target = hopResolve(state.rows, targetRaw);
    if (target === mergedLabel) {
      return json({ ok: false, message: `成环拒绝：${mergedLabel} 已是 ${targetRaw} 的当前归属，合并会形成回环。进唯一归属复核队列由库主钉死。` });
    }
    // 第 110/111 轮：写前验证 + 缺行自愈——标签在待裁对里出现必有实证；
    // 标签库缺行属库内不一致，补一行（首次出现取篇目实证、处置动作标待补、状态随本次合并）单次写回；
    // 篇目里也不存在的标签（模型笔误/幻觉）硬拒，不发明数据。
    const baseTagMd = await readMd(ctx, TAG_LIB);
    let tagMd = baseTagMd;
    let repairedTagRow = false;
    if (!parseTagLib(baseTagMd).tags.some((t) => t.tag === mergedLabel)) {
      const listing = await ctx.resources.list(ref(META_DIR));
      const fileNames = (listing.items || []).map((x) => x.name).filter((n) => n.endsWith(".md") && !n.startsWith("_"));
      let firstPaper = "";
      for (const n of fileNames) {
        const md = await readMd(ctx, `${META_DIR}/${n}`);
        if (parseEntryTags(md).includes(mergedLabel)) { firstPaper = n.replace(/\.md$/, ""); break; }
      }
      if (!firstPaper) {
        return json({ ok: false, stage: "taglib", message: `「${mergedLabel}」既无标签库行、也不在任何篇目的标签中——无效标签（可能是提议笔误），未做任何写入。` });
      }
      const rep = appendTagRow(baseTagMd, `| ${mergedLabel} | ${firstPaper} | （待补） | 并入→${target} |  |`);
      if (!rep.appended) return json({ ok: false, stage: "taglib", message: "标签库无表格可写，未做任何写入。" });
      tagMd = rep.md;
      repairedTagRow = true;
    }

    const existing = state.rows.find((r) => r.from === mergedLabel);
    const pinned = `库主 ${input.date}`;
    if (existing) { existing.to = target; existing.pinned = pinned; }
    else state.rows.push({ from: mergedLabel, to: target, pinned });

    state.rows = flattenRows(state.rows);
    if (!isSingleHop(state.rows)) return json({ ok: false, message: "压平后仍非单跳（环），未写入；进复核队列人工处理。" });

    const round = String(input.round || "").trim() || `第${state.log.length + 1}轮`;
    state.log.push({
      round,
      date: input.date,
      action: `${mergedLabel} → ${target}`,
      basis: `${input.decidedBy || "库主"}裁决${input.evidence ? `：${input.evidence}` : ""}`,
    });
    await ctx.resources.write(ref(MAPPING), renderMapping(state));

    // 标签库：被并标签状态改写 + 复核队列裁决回填（只关含被并标签的对；
    // 只含 target 的对是另一对活问题（如「target vs 第三标签」），不得被连带关闭——第 100 轮回填收窄）
    const parsedQueue = [];
    let sec = null;
    for (const line of tagMd.split(/\r?\n/)) {
      if (line.startsWith("## ")) { sec = line.includes("复核队列") ? "q" : null; continue; }
      if (sec === "q" && line.startsWith("|")) {
        const c = line.split("|").slice(1, -1).map((s) => s.trim());
        if (c[0] && c[0] !== "疑似对" && c[0].includes(mergedLabel)) parsedQueue.push(c[0]);
      }
    }
    const decision = new Map(parsedQueue.map((k) => [k, `${mergedLabel} 并入 ${target}（${input.date}）`]));
    const patched = patchTagLib(tagMd, { status: new Map([[mergedLabel, `并入→${target}`]]), decision });
    // 幂等（第 109/110 轮）：标签行存在即写回——状态无变化但队列回填有变化照常落盘，
    // 重试不重复执行也不误报（行存在性已在写映射前验证）。
    await ctx.resources.write(ref(TAG_LIB), patched.md);

    return json({
      ok: true,
      merged: mergedLabel,
      now: target,
      rowUpserted: !!existing ? "updated" : "inserted",
      repairedTagRow,
      tagStatusChanged: patched.changed.status,
      queueDecisionsBackfilled: patched.changed.decision,
      idempotent: !patched.changed.status.length && !patched.changed.decision.length,
      round,
    });
  },
};

export const { name, description, parameters, execute } = tool;
