import { searchLibrary } from "../lib/search.js";

const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });

const tool = {
  name: "search_structure",
  description:
    "Search the 结构库 through the shared retrieval layer: query hits 篇目 / 写作模型 / 锚点样本 / 标签库 / 类型库 / 闭包映射表 and returns ranked entries with line excerpts. " +
    "Use this when the user says they are writing a section and needs relevant patterns or examples — the physical hit list narrows candidates; then read the promising files fully and quote them WITH location and original text (可追溯红线: patterns must be cited with 篇目位置 + 原文引文). Same endpoint powers the UI search box (channel two), one retrieval layer for all channels.",
  parameters: {
    type: "object",
    properties: {
      query: { type: "string", description: "Keywords, space or 、 separated, e.g. '反驳 开头'." },
      kind: { type: "string", enum: ["篇目", "写作模型", "锚点样本", "库"], description: "Optional source filter." },
      limit: { type: "number", description: "Max results, default 20." },
    },
    required: ["query"],
  },
  sessionPermission: { readOnly: true },
  async execute(input, ctx) {
    const r = await searchLibrary(ctx, input.query, input);
    return json(r);
  },
};

export const { name, description, parameters, execute } = tool;
