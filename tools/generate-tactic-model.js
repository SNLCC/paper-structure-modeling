import { runTacticModel } from "../lib/model.js";

const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });

// 标签战术模型按需生成（§5.10，第 123 轮）：样本 = 携带该标签的全部篇目（≥2）；
// 写闸 commit_model(kind=tactic)，产物 战术-<标签>-写作模型-v<n>.md，版本与指纹规则同写作模型。
// 只归纳单招用法（适用时机/用法谱系/变体失效/近邻分界），不写整篇编排（编排归类型模型）。
const tool = {
  name: "generate_tactic_model",
  description:
    "On-demand tactic-model generation (§5.10, round 123): induce a TACTIC model for ONE tag — samples = every 篇目 carrying that tag (>=2 required; corpus <=24000 chars). " +
    "Writes 写作模型/战术-<标签>-写作模型-v<n>.md via commit_model(kind=tactic), versioned with sample-fingerprint skip-if-unchanged. " +
    "Content covers ONLY single-tactic usage (what it is & when to use / per-instance usage with quotes and scores / variants & failure boundaries / boundaries vs independent-neighbor tags) — NEVER whole-paper arrangement (that belongs to type models). " +
    "Trigger: user asks to 沉淀 a tactic while writing (写作取用), or explicitly requests it. Returns {ok:false, stage} with a clear reason when samples<2, unchanged, or over size limit.",
  parameters: {
    type: "object",
    properties: {
      label: { type: "string", description: "The tag name (exact 标签名 from 标签库) to build the tactic model for." },
    },
    required: ["label"],
  },
  sessionPermission: {
    kind: "workspace_write",
    describeSideEffect: (input) => ({
      kind: "file_write",
      summary: `Write 结构库/写作模型/战术-${input?.label || "<标签>"}-写作模型-v<n>.md`,
      ruleId: "paper-structure-modeling-generate-tactic-model",
    }),
  },
  async execute(input = {}, ctx) {
    const r = await runTacticModel(ctx, input);
    return json(r);
  },
};

export const { name, description, parameters, execute } = tool;
