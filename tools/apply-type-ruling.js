import { parseTypeCandidate, upsertTypeRow, patchTypeRowStatus, patchDeclaringStatus } from "../lib/typelib.js";
import { parseMapping, flattenRows, isSingleHop, renderMapping } from "../lib/mapping.js";
import { ref, STRUCT_ROOT, META_DIR } from "../lib/paths.js";

const TYPE_LIB = `${STRUCT_ROOT}/类型库.md`;
const MAPPING = `${STRUCT_ROOT}/闭包映射表.md`;
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

// 类型裁决（§5.9 设计 D，第 103 轮）：库主对拆解宣告的候选类型批量裁决的写闸。
// create = 登记进类型库；merge = 闭包映射表钉行（目标须在类型库）；reject = 只留痕不入表。
// 改名 = 面板串行 create(新名) + merge(旧→新)。每次成功裁决同步盖章宣告篇目 2.5 状态行。
const tool = {
  name: "apply_type_ruling",
  description:
    "Execute the user's adjudication (§5.9 design D) on a DECLARED TYPE CANDIDATE from 篇目 2.5 新类型宣告. " +
    "action=create registers the candidate into 类型库 (status 在用; mergedFrom defaults to the candidate name; 出现篇数 = declaring papers). " +
    "action=merge upserts 原始→target in 闭包映射表 (flattened single-hop, evolution log appended). Since round 116 merge is BIDIRECTIONAL and supports RECLASSIFICATION: from/to may each be a registered type or a declared candidate; merging INTO an unregistered candidate name auto-registers it first (立新名 + 归旧类一步完成); an already-ruled candidate or an already-registered type may be merged again (改判/再归类). " +
    "action=reject stamps declaring papers only, nothing enters the libraries. " +
    "Every successful ruling also stamps the declaring papers' 2.5 状态 line (新立/并入/驳回 + 库主 + date); stamping is idempotent (same text skipped). " +
    "Renaming = panel runs create(newName) then merge(old→new).",
  parameters: {
    type: "object",
    properties: {
      action: { type: "string", description: "create | merge | reject" },
      name: { type: "string", description: "Ruling subject: candidate name (verbatim from 候选名 / 定义) or an existing 类型库 type (for reclassification)." },
      target: { type: "string", description: "action=merge: the surviving name — an existing 类型库 type OR another declared candidate (auto-registered)." },
      targetFresh: { type: "boolean", description: "action=merge: true when the user typed a brand-new name — auto-registers it as a 类型库 row with 定义待补 (round 119)." },
      definition: { type: "string", description: "action=create: optional override; defaults to the declaring paper's definition." },
      mergedFrom: { type: "string", description: "action=create: optional 归并自 override; defaults to the candidate name." },
      date: { type: "string", description: "YYYY-MM-DD." },
      reason: { type: "string", description: "Optional; recorded on reject." },
    },
    required: ["action", "name", "date"],
  },
  sessionPermission: {
    kind: "workspace_write",
    describeSideEffect: (input) => ({
      kind: "file_write",
      summary: `Type ruling (${input?.action || "?"}) on「${input?.name || "?"}」→ 类型库.md / 闭包映射表.md / 篇目 2.5 状态`,
      ruleId: "paper-structure-modeling-apply-type-ruling",
    }),
  },
  async execute(input = {}, ctx) {
    const action = String(input.action || "").trim();
    const name = String(input.name || "").trim();
    const date = String(input.date || "").trim();
    if (!["create", "merge", "reject"].includes(action)) return json({ ok: false, message: "action 须为 create / merge / reject" });
    if (!name) return json({ ok: false, message: "name 必填" });
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return json({ ok: false, message: "date 须为 YYYY-MM-DD" });

    // 类型库现状（第 116 轮双向：merge 的 from/to 均可为已登记类型，先读供各分支校验）
    const typeMd = await readMd(ctx, TYPE_LIB);
    const typeNames = [];
    for (const l of typeMd.split(/\r?\n/)) {
      if (!l.startsWith("|") || /^\|\s*-+/.test(l)) continue;
      const c = l.split("|").slice(1, -1).map((s) => s.trim());
      if (c[0] && c[0] !== "类型" && !c[0].includes("暂无")) typeNames.push(c[0]);
    }
    const isRegistered = typeNames.includes(name);
    // 类型库当前文本：每一次写库后同步，避免后续补丁用写前的旧快照把刚写入的行覆盖掉
    // （targetFresh 登记新行后，末尾的并入状态补丁管的就是这里）。
    let typeCur = typeMd;

    // 找宣告篇（第 116 轮放宽：允许已裁决者再裁/改判，不再提前拦截）
    const listing = await ctx.resources.list(ref(META_DIR));
    const fileNames = (listing.items || []).map((x) => x.name).filter((n) => n.endsWith(".md") && !n.startsWith("_"));
    const declaring = [];
    for (const n of fileNames) {
      const md = await readMd(ctx, `${META_DIR}/${n}`);
      const c = parseTypeCandidate(md);
      if (c && c.name === name) declaring.push({ file: n, md, cand: c });
    }
    const pending = declaring.filter((d) => d.cand.status.includes("候选"));

    const stamp = `（库主 ${date}）`;
    let stamped = 0;

    if (action === "create") {
      if (isRegistered) return json({ ok: false, message: `「${name}」已在类型库，无需新立；要换名用改名，要再归类用并入` });
      if (!pending.length) return json({ ok: false, message: `「${name}」无待裁宣告（${declaring.length ? declaring[0].cand.status : "无宣告"}），无法新立` });
      const definition = String(input.definition || "").trim() || pending[0].cand.definition || "（定义待补）";
      const mergedFrom = String(input.mergedFrom || "").trim() || name;
      const up = upsertTypeRow(typeMd, { type: name, definition, mergedFrom, status: "在用", count: declaring.length });
      if (up.action === "notable") return json({ ok: false, message: "类型库无表格可写，请检查库文件" });
      await ctx.resources.write(ref(TYPE_LIB), up.md);
      typeCur = up.md;
      for (const d of pending) {
        const p = patchDeclaringStatus(d.md, name, `新立为类型库「${name}」${stamp}`);
        if (p.changed) { await ctx.resources.write(ref(`${META_DIR}/${d.file}`), p.md); stamped++; }
      }
      return json({ ok: true, action, name, row: up.action, stamped });
    }

    if (action === "reject") {
      if (!pending.length) return json({ ok: false, message: `「${name}」无待裁宣告（${declaring.length ? declaring[0].cand.status : "无宣告"}），无法驳回` });
      const reason = String(input.reason || "").trim();
      for (const d of pending) {
        const p = patchDeclaringStatus(d.md, name, `驳回${stamp}${reason ? `：${reason}` : ""}`);
        if (p.changed) { await ctx.resources.write(ref(`${META_DIR}/${d.file}`), p.md); stamped++; }
      }
      return json({ ok: true, action, name, stamped });
    }

    // merge（第 116 轮双向 + 再归类）：from/to 各自可为已登记类型或候选；
    // target 为未登记候选时顺带新立（并入候选名 = 立新名 + 归旧类一步完成）；
    // from 为已登记类型时改其状态为并入→target（对已登记类型的再归类由此放行）。
    const targetRaw = String(input.target || "").trim();
    if (!targetRaw) return json({ ok: false, message: "action=merge 须提供 target（类型名或候选名）" });
    if (!isRegistered && !declaring.length) {
      return json({ ok: false, message: `「${name}」既不在类型库、也无篇目宣告，无法作为并入起点` });
    }
    if (!typeNames.includes(targetRaw)) {
      const targetDeclaring = [];
      for (const n of fileNames) {
        const md2 = await readMd(ctx, `${META_DIR}/${n}`);
        const c2 = parseTypeCandidate(md2);
        if (c2 && c2.name === targetRaw) targetDeclaring.push({ file: n, cand: c2 });
      }
      if (!targetDeclaring.length) {
        // 第 119 轮：库主手输的新名字——登记为「定义待补」的新类型（用户输入非模型发明，可追溯）；
        // 未带 targetFresh 标记则维持硬拒。
        if (!input.targetFresh) {
          return json({ ok: false, message: `目标「${targetRaw}」既不在类型库、也无篇目宣告（现有类型：${typeNames.join("、") || "空"}）` });
        }
        const upF = upsertTypeRow(typeCur, { type: targetRaw, definition: "（定义待补）", mergedFrom: targetRaw, status: "在用", count: 0 });
        if (upF.action === "notable") return json({ ok: false, message: "类型库无表格可写，请检查库文件" });
        await ctx.resources.write(ref(TYPE_LIB), upF.md);
        typeCur = upF.md;
      } else {
        const up2 = upsertTypeRow(typeCur, { type: targetRaw, definition: targetDeclaring[0].cand.definition || "（定义待补）", mergedFrom: targetRaw, status: "在用", count: targetDeclaring.length });
        if (up2.action === "notable") return json({ ok: false, message: "类型库无表格可写，请检查库文件" });
        await ctx.resources.write(ref(TYPE_LIB), up2.md);
        typeCur = up2.md;
        for (const td of targetDeclaring) {
          const pt = patchDeclaringStatus(await readMd(ctx, `${META_DIR}/${td.file}`), targetRaw, `新立为类型库「${targetRaw}」${stamp}`);
          if (pt.changed) { await ctx.resources.write(ref(`${META_DIR}/${td.file}`), pt.md); stamped++; }
        }
      }
    }
    const state = parseMapping(await readMd(ctx, MAPPING));
    const target = hopResolve(state.rows, targetRaw);
    if (target === name) return json({ ok: false, message: `成环拒绝：「${name}」已归属「${targetRaw}」` });
    const existing = state.rows.find((r) => r.from === name);
    if (existing) { existing.to = target; existing.pinned = `库主 ${date}`; }
    else state.rows.push({ from: name, to: target, pinned: `库主 ${date}` });
    state.rows = flattenRows(state.rows);
    if (!isSingleHop(state.rows)) return json({ ok: false, message: "压平后仍非单跳（环），未写入" });
    const reason = String(input.reason || "").trim();
    state.log.push({
      round: `第${state.log.length + 1}轮`,
      date,
      action: `${name} → ${target}`,
      basis: `库主裁决（类型裁决页）：并入${reason ? `：${reason}` : ""}`,
    });
    await ctx.resources.write(ref(MAPPING), renderMapping(state));
    const libPatch = patchTypeRowStatus(typeCur, name, `并入→${target}`);
    if (libPatch.changed) await ctx.resources.write(ref(TYPE_LIB), libPatch.md);
    for (const d of pending) {
      const p = patchDeclaringStatus(d.md, name, `并入「${target}」${stamp}`);
      if (p.changed) { await ctx.resources.write(ref(`${META_DIR}/${d.file}`), p.md); stamped++; }
    }
    return json({ ok: true, action, name, now: target, stamped });
  },
};

export const { name, description, parameters, execute } = tool;
