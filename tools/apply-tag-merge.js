import { parseMapping, flattenRows, isSingleHop, renderMapping } from "../lib/mapping.js";
import { patchTagLib } from "../lib/taglib.js";
import { ref, STRUCT_ROOT } from "../lib/paths.js";

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

    // 标签库：被并标签状态改写 + 复核队列裁决回填（疑似对含被并标签者）
    const tagMd = await readMd(ctx, TAG_LIB);
    const parsedQueue = [];
    let sec = null;
    for (const line of tagMd.split(/\r?\n/)) {
      if (line.startsWith("## ")) { sec = line.includes("复核队列") ? "q" : null; continue; }
      if (sec === "q" && line.startsWith("|")) {
        const c = line.split("|").slice(1, -1).map((s) => s.trim());
        if (c[0] && c[0] !== "疑似对" && (c[0].includes(mergedLabel) || c[0].includes(target))) parsedQueue.push(c[0]);
      }
    }
    const decision = new Map(parsedQueue.map((k) => [k, `${mergedLabel} 并入 ${target}（${input.date}）`]));
    const patched = patchTagLib(tagMd, { status: new Map([[mergedLabel, `并入→${target}`]]), decision });
    if (!patched.changed.status.length) {
      return json({
        ok: false, stage: "taglib",
        message: `映射表已更新，但标签库中未找到「${mergedLabel}」行（标签库未动）。请核对标签名后手动补齐状态。`,
        mappingWritten: true,
      });
    }
    await ctx.resources.write(ref(TAG_LIB), patched.md);

    return json({
      ok: true,
      merged: mergedLabel,
      now: target,
      rowUpserted: !!existing ? "updated" : "inserted",
      tagStatusChanged: patched.changed.status,
      queueDecisionsBackfilled: patched.changed.decision,
      round,
    });
  },
};

export const { name, description, parameters, execute } = tool;
