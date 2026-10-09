import { validateExtraction, renderExtraction } from "../lib/extraction.js";
import { ref, META_DIR, TAG_LIB } from "../lib/paths.js";

const decoder = new TextDecoder();
const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });

// 标签库合并：字面查重兜底（语义查重是拆解者在打标时的职责，见 L1 skill 第 4 步）。
// 只增不删不改；幂等。
function mergeTags(md, tags, id) {
  const lines = md.split(/\r?\n/);
  const sepIdx = lines.findIndex((l) => /^\|\s*-{2,}/.test(l));
  if (sepIdx < 0) return { md, added: [], error: "标签库表格分隔线未找到，结构可能被改动" };
  let end = sepIdx + 1;
  while (end < lines.length && lines[end].trim() !== "" && lines[end].startsWith("|")) end++;

  const existing = new Set();
  for (let i = sepIdx + 1; i < end; i++) {
    const first = (lines[i].split("|")[1] || "").trim();
    if (first && first !== "（暂无）") existing.add(first);
  }

  const added = [];
  const newRows = [];
  for (const t of tags || []) {
    const name = String(t?.name || "").trim();
    if (!name || existing.has(name)) continue;
    newRows.push(`| ${name} | ${id} | ${String(t.action || "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ")} | active | |`);
    existing.add(name);
    added.push(name);
  }
  if (!newRows.length) return { md, added: [] };

  const onlyPlaceholder = end - sepIdx === 2 && /^\|\s*（暂无）/.test(lines[sepIdx + 1] || "");
  if (onlyPlaceholder) lines.splice(sepIdx + 1, 1, ...newRows);
  else lines.splice(end, 0, ...newRows);
  return { md: lines.join("\n"), added };
}

const tool = {
  name: "commit_extraction",
  description:
    "Validate and commit one paper-extraction record into the structure library. This is THE single write gate shared by path A (in-chat extraction) and path C (offline plugin session): validation runs before any file is written, and failure rejects the write. " +
    "Input `extraction` fields: id (slug-year, e.g. sample-2020); meta.{title,authors,year,venue,discipline,boundary:{result:single|collection|volume_chapter,cut},extractor:A|C,date,tags:[{name,action}],toVerify:[],anchorStatus:{has,entry},lowDecomposability:bool}; " +
    "understanding (free text); slots:[{location:'§2.1 或 ¶4',action,object,evidence(原文引文≥8字),purpose}]; emergent.{coreThesis,skeleton,objectionHandling,theoryUse,hiddenPremises,sectionFunctions,paragraphFunctions,openingClosing,densityDistribution}; " +
    "scores:[{level:article|node|fragment,target,score:1-10,rationale,anchorRef}]; appreciation.{gems:[{location,note}],patterns:[],weaknesses:[{location,note}]}; newTypeProposal?.{name,definition,relation,basis}. " +
    "Mirrors 结构库/篇目/_模板.md. Use dryRun to check without writing.",
  parameters: {
    type: "object",
    properties: {
      extraction: {
        type: "object",
        description: "Structured extraction record (see tool description for the field list).",
      },
      dryRun: { type: "boolean", description: "Validate only; do not write any file." },
    },
    required: ["extraction"],
  },
  sessionPermission: {
    kind: "workspace_write",
    describeSideEffect: (input) => ({
      kind: "file_write",
      summary: `Write 结构库/篇目/${input?.extraction?.id || "<id>"}.md and append new tags to 结构库/标签库.md`,
      ruleId: "paper-structure-modeling-commit-extraction",
    }),
  },
  async execute(input = {}, ctx) {
    const d = input.extraction;
    const v = validateExtraction(d);
    if (!v.ok) return json({ ok: false, stage: "validate", errors: v.errors });
    if (input.dryRun) return json({ ok: true, stage: "dry_run", errors: [], lowDecomposability: v.lowDecomposability });

    const path = `${META_DIR}/${d.id}.md`;
    let exists = false;
    try {
      const st = await ctx.resources.stat(ref(path));
      exists = !!st?.exists;
    } catch { /* treat as absent */ }
    if (exists) {
      return json({
        ok: false,
        stage: "conflict",
        message: `篇目已存在：${path}。写定即稳定；修订请直接修改该文件并在其元信息追加修订记录。`,
      });
    }

    const md = renderExtraction(d);
    try {
      await ctx.resources.write(ref(path), md);
    } catch (e) {
      return json({ ok: false, stage: "write", message: `篇目写入失败：${e?.message || e}` });
    }

    let tagsAdded = [];
    let tagLibError = null;
    try {
      const cur = await ctx.resources.read(ref(TAG_LIB));
      const curMd = decoder.decode(cur.content ?? new Uint8Array());
      const merged = mergeTags(curMd, d.meta?.tags || [], d.id);
      if (merged.error) tagLibError = merged.error;
      if (merged.added.length) {
        await ctx.resources.write(ref(TAG_LIB), merged.md);
        tagsAdded = merged.added;
      }
    } catch (e) {
      tagLibError = `标签库合并失败（篇目已写入，需手动补标签）：${e?.message || e}`;
    }

    const pending = d.newTypeProposal?.name
      ? { ...d.newTypeProposal, status: "候选（待库主裁决）" }
      : null;

    return json({
      ok: !tagLibError,
      stage: "committed",
      file: path,
      tagsAdded,
      tagLibError,
      pendingNewType: pending,
      lowDecomposability: v.lowDecomposability || undefined,
    });
  },
};

export const { name, description, parameters, execute } = tool;
