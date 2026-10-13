import { setQueueDecision } from "../lib/taglib.js";
import { ref, TAG_LIB } from "../lib/paths.js";

const decoder = new TextDecoder();
const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });

// 判定独立（§5.9 设计 C 终态之二，第 101 轮）：库主裁定队列中某对标签并非同义、
// 两标签都保留。只回填该对的裁决单元格（判定独立（date）：理由），
// 标签状态、闭包映射、演化日志一律不动——与 apply_tag_merge（合并终态）互补。
const tool = {
  name: "apply_pair_independent",
  description:
    "Record the user's adjudication that a queued review pair is INDEPENDENT: the two labels are NOT synonyms and both stay active. " +
    "Fills only that pair's decision cell in 标签库 复核队列 with 判定独立（YYYY-MM-DD）: optional reason, and touches nothing else " +
    "(no tag status change, no closure-mapping row, no evolution log — unlike apply_tag_merge). " +
    "Use this as the third terminal state when the user decides to keep both labels separate. The pair must exist in the queue and must not already have a decision.",
  parameters: {
    type: "object",
    properties: {
      pair: { type: "string", description: "Exact queued pair text, e.g. 标签A vs 标签B." },
      date: { type: "string", description: "YYYY-MM-DD adjudication date." },
      reason: { type: "string", description: "Optional basis: why the two labels are distinct (recorded after the colon)." },
    },
    required: ["pair", "date"],
  },
  sessionPermission: {
    kind: "workspace_write",
    describeSideEffect: (input) => ({
      kind: "file_write",
      summary: `Write decision cell for pair「${input?.pair || "?"}」in 结构库/标签库.md 复核队列`,
      ruleId: "paper-structure-modeling-apply-pair-independent",
    }),
  },
  async execute(input = {}, ctx) {
    const pair = String(input.pair || "").trim();
    const date = String(input.date || "").trim();
    if (!pair || !pair.includes(" vs ")) return json({ ok: false, message: "pair 必填，形如「标签A vs 标签B」" });
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return json({ ok: false, message: "date 须为 YYYY-MM-DD" });
    const reason = String(input.reason || "").trim();

    const md = decoder.decode((await ctx.resources.read(ref(TAG_LIB))).content ?? new Uint8Array());
    const decision = `判定独立（${date}）${reason ? `：${reason}` : ""}`;
    const r = setQueueDecision(md, pair, decision);
    if (!r.ok) return json({ ok: false, message: r.message });
    await ctx.resources.write(ref(TAG_LIB), r.md);
    return json({ ok: true, pair, decision });
  },
};

export const { name, description, parameters, execute } = tool;
