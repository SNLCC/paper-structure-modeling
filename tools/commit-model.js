import { ref, STRUCT_ROOT } from "../lib/paths.js";

const MODEL_DIR = `${STRUCT_ROOT}/写作模型`;
const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });

const tool = {
  name: "commit_model",
  description:
    "Commit one writing-model artifact as 写作模型/<类型>-写作模型-v<n>.md with automatic version increment (never overwrite history; 写作模型/README 版本规则). " +
    "Content discipline: pattern descriptions + detail layer (骨架挂实例, every skeleton entry cites source as《题名》(作者, 年份)·位置 — file id only as optional parenthetical cross-ref, never as the display source — plus 原文引文 + 评分) + selectively included high/low-score differences; NO fill-in templates; low-score papers must not be mixed into the positive model as whole papers (fragment absorption must state 出自篇级低分样本). The tool enforces header fields only — content discipline is the author's responsibility.",
  parameters: {
    type: "object",
    properties: {
      typeName: { type: "string", description: "The type this model belongs to, e.g. 反驳型论证. Becomes the filename prefix." },
      content: { type: "string", description: "Full markdown body of the model (规律描述 + 细节层 + 高低分差异点)." },
      sampleSize: { type: "number", description: "n = number of papers in the sample." },
      confidenceBasis: { type: "string", description: "置信度依据：样本量 / 频率稳定性 / 锚点覆盖度（读法 A）." },
      scoreGrouping: { type: "string", description: "高低分组口径, e.g. 锚点分≥8 为高分组（n=…）." },
      fingerprint: { type: "string", description: "样本指纹（样本篇目集+标签集哈希），写入头部供无变化检测；可选。" },
      tags: { type: "string", description: "关联标签（该类型样本的标签集，顿号分隔），写入头部供检索桥；可选。" },
      sampleIds: { type: "array", items: { type: "string" }, description: "样本篇目文件名清单，写入头部供追溯；可选。" },
      date: { type: "string", description: "YYYY-MM-DD generation date." },
      dryRun: { type: "boolean", description: "Validate and report the next version without writing." },
    },
    required: ["typeName", "content", "sampleSize", "confidenceBasis", "scoreGrouping", "date"],
  },
  sessionPermission: {
    kind: "workspace_write",
    describeSideEffect: (input) => ({
      kind: "file_write",
      summary: `Write 结构库/写作模型/${input?.typeName || "<类型>"}-写作模型-v<n>.md`,
      ruleId: "paper-structure-modeling-commit-model",
    }),
  },
  async execute(input = {}, ctx) {
    const typeName = String(input.typeName || "").trim();
    const content = String(input.content || "").trim();
    const errors = [];
    if (!typeName || /[\\/:*?"<>|]/.test(typeName)) errors.push("typeName 必填且不含路径非法字符");
    if (content.length < 100) errors.push("content 太短：模型需至少含规律描述与挂实例的证据（≥100 字）");
    if (!(Number(input.sampleSize) >= 1)) errors.push("sampleSize 须 ≥ 1");
    if (!String(input.confidenceBasis || "").trim()) errors.push("confidenceBasis 必填（置信度三依据）");
    if (!String(input.scoreGrouping || "").trim()) errors.push("scoreGrouping 必填（高低分组口径）");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(input.date || ""))) errors.push("date 须为 YYYY-MM-DD");
    if (errors.length) return json({ ok: false, stage: "validate", errors });

    const listing = await ctx.resources.list(ref(MODEL_DIR));
    const re = new RegExp(`^${typeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-写作模型-v(\\d+)\\.md$`);
    let maxV = 0;
    for (const item of listing.items || []) {
      const m = re.exec(item.name);
      if (m) maxV = Math.max(maxV, Number(m[1]));
    }
    const v = maxV + 1;
    const filename = `${typeName}-写作模型-v${v}.md`;
    if (input.dryRun) return json({ ok: true, stage: "dry_run", nextVersion: v, file: `${MODEL_DIR}/${filename}` });

    const md = [
      `# ${typeName} 写作模型 v${v}`,
      "",
      `- 类型：${typeName}`,
      `- 版本：v${v}`,
      `- 样本量：n=${input.sampleSize}`,
      `- 样本清单：${Array.isArray(input.sampleIds) && input.sampleIds.length ? input.sampleIds.join("、") : "（未记录）"}`,
      `- 关联标签：${String(input.tags || "").trim() || "（未记录）"}`,
      `- 生成日期：${input.date}`,
      `- 置信度依据：${input.confidenceBasis}`,
      `- 高低分组口径：${input.scoreGrouping}`,
      ...(input.fingerprint ? [`- 样本指纹：${String(input.fingerprint)}`] : []),
      "",
      "---",
      "",
      content,
      "",
      "---",
      "",
      `> 生成：commit_model v${v}（版本递增，历史不覆盖；骨架每条须挂篇目位置 + 原文引文 + 评分）`,
      "",
    ].join("\n");

    try {
      await ctx.resources.write(ref(`${MODEL_DIR}/${filename}`), md);
    } catch (e) {
      return json({ ok: false, stage: "write", message: `写入失败：${e?.message || e}` });
    }
    return json({ ok: true, stage: "committed", file: `${MODEL_DIR}/${filename}`, version: v, previous: maxV || null });
  },
};

export const { name, description, parameters, execute } = tool;
