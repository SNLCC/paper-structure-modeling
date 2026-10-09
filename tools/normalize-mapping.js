import { parseMapping, flattenRows, isSingleHop, renderMapping } from "../lib/mapping.js";
import { ref, STRUCT_ROOT } from "../lib/paths.js";

const MAPPING = `${STRUCT_ROOT}/闭包映射表.md`;
const decoder = new TextDecoder();
const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });

const tool = {
  name: "normalize_mapping",
  description:
    "Run closure normalization on 闭包映射表.md: flatten every row's right value to its endpoint so the table stays single-hop. Idempotent — reports changed:false when already normalized. Use after hand-editing the mapping table or as a periodic integrity check. Writes only when the flattened result differs.",
  parameters: { type: "object", properties: {} },
  sessionPermission: {
    kind: "workspace_write",
    describeSideEffect: () => ({
      kind: "file_write",
      summary: "Rewrite 结构库/闭包映射表.md when flattening changes any right value",
      ruleId: "paper-structure-modeling-normalize-mapping",
    }),
  },
  async execute(_input, ctx) {
    const md = decoder.decode((await ctx.resources.read(ref(MAPPING))).content ?? new Uint8Array());
    const state = parseMapping(md);
    const flat = flattenRows(state.rows);
    const singleHop = isSingleHop(flat);
    const changed = JSON.stringify(flat.map((r) => [r.from, r.to])) !== JSON.stringify(state.rows.map((r) => [r.from, r.to]));

    if (!singleHop) {
      return json({ ok: false, message: "压平后仍非单跳（存在环）。未写入，进唯一归属复核队列人工处理。", rows: flat });
    }
    if (!changed) return json({ ok: true, changed: false, rows: flat.length, message: "已单跳，无需改写（幂等）" });

    await ctx.resources.write(ref(MAPPING), renderMapping({ ...state, rows: flat }));
    return json({ ok: true, changed: true, rows: flat.length, message: "已压平并写回" });
  },
};

export const { name, description, parameters, execute } = tool;
