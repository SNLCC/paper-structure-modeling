import { validateAnchor, renderAnchor } from "../lib/anchor.js";
import { ref, STRUCT_ROOT } from "../lib/paths.js";

const ANCHOR_DIR = `${STRUCT_ROOT}/锚点样本`;
const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });

const tool = {
  name: "commit_anchor",
  description:
    "Commit one anchor sample (the user's own total score for a paper) into 锚点样本/. Anchors feed two things only: 评分指引归纳 and 盲打校验. Append-only; an existing id is rejected. " +
    "Input `anchor` fields: id (slug-year, aligned with 篇目 id), title, authors, year, venue?, textType (the user's judgment, free text), score (1-10 total), rationale (≥10 chars, this is what guidance induction consumes), date (YYYY-MM-DD), recordedBy (e.g. 「库主」/「助手代录（库主口述）」), entryRef?",
  parameters: {
    type: "object",
    properties: {
      anchor: { type: "object", description: "Anchor record (see tool description)." },
      dryRun: { type: "boolean", description: "Validate only; do not write." },
    },
    required: ["anchor"],
  },
  sessionPermission: {
    kind: "workspace_write",
    describeSideEffect: (input) => ({
      kind: "file_write",
      summary: `Write 结构库/锚点样本/${input?.anchor?.id || "<id>"}.锚点.md`,
      ruleId: "paper-structure-modeling-commit-anchor",
    }),
  },
  async execute(input = {}, ctx) {
    const a = input.anchor;
    const v = validateAnchor(a);
    if (!v.ok) return json({ ok: false, stage: "validate", errors: v.errors });
    if (input.dryRun) return json({ ok: true, stage: "dry_run" });

    const path = `${ANCHOR_DIR}/${a.id}.锚点.md`;
    let exists = false;
    try {
      const st = await ctx.resources.stat(ref(path));
      exists = !!st?.exists;
    } catch { /* treat as absent */ }
    if (exists) {
      return json({ ok: false, stage: "conflict", message: `锚点已存在：${path}。锚点只增不改；确需更正请直接修改文件并注明原因。` });
    }

    try {
      await ctx.resources.write(ref(path), renderAnchor(a));
    } catch (e) {
      return json({ ok: false, stage: "write", message: `锚点写入失败：${e?.message || e}` });
    }
    return json({ ok: true, stage: "committed", file: path });
  },
};

export const { name, description, parameters, execute } = tool;
