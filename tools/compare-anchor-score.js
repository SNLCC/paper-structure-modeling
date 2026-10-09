import { parseAnchorScore } from "../lib/anchor.js";
import { ref, STRUCT_ROOT } from "../lib/paths.js";

const ANCHOR_DIR = `${STRUCT_ROOT}/锚点样本`;
const decoder = new TextDecoder();
const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });

// 盲打比对阈值：10 分制差值 > 2 判为超阈 → 修评分指引再验（环节 3）。
// 【暂定参数】数值尚未定案，调整只改这里。
const THRESHOLD = 2;

const tool = {
  name: "compare_anchor_score",
  description:
    "Compare a blind model score against the user's anchor score for the same paper (calibration step 3). The model must NOT have seen the anchor's score when producing blindScore — passing a score it already looked up invalidates the check. Returns both scores, absolute difference, and pass/fail against the threshold.",
  parameters: {
    type: "object",
    properties: {
      anchorId: { type: "string", description: "Anchor id (slug-year), e.g. sample-2020." },
      blindScore: { type: "number", description: "The model's blind total score, 1-10." },
      blindRationale: { type: "string", description: "The model's blind rationale (kept for report)." },
    },
    required: ["anchorId", "blindScore"],
  },
  sessionPermission: { readOnly: true },
  async execute(input = {}, ctx) {
    const id = String(input.anchorId || "").trim();
    if (!id) throw new Error("compare_anchor_score requires anchorId");
    const blind = Number(input.blindScore);
    if (!(blind >= 1 && blind <= 10)) return json({ ok: false, message: "blindScore 须为 1-10" });

    const path = `${ANCHOR_DIR}/${id}.锚点.md`;
    let md;
    try {
      const st = await ctx.resources.stat(ref(path));
      if (!st?.exists) return json({ ok: false, message: `锚点不存在：${path}` });
      const rd = await ctx.resources.read(ref(path));
      md = decoder.decode(rd.content ?? new Uint8Array());
    } catch (e) {
      return json({ ok: false, message: `锚点读取失败：${e?.message || e}` });
    }

    const anchorScore = parseAnchorScore(md);
    if (anchorScore === null) return json({ ok: false, message: "锚点文件中未解析到「篇级总分」行（格式被改动？）" });

    const diff = Math.abs(blind - anchorScore);
    const pass = diff <= THRESHOLD;
    return json({
      ok: true,
      anchorId: id,
      anchorScore,
      blindScore: blind,
      diff,
      threshold: THRESHOLD,
      pass,
      action: pass ? "一致性通过" : "超阈 → 修评分指引后重新盲打（环节 3）",
      blindRationale: input.blindRationale || undefined,
    });
  },
};

export const { name, description, parameters, execute } = tool;
