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

// 描述中的格式规则必须与 lib/extraction.js 的 validateExtraction 保持同源（提示层与校验层同一来源）；
// 校验逻辑改动时同步更新此处描述。
const LOCATION_RULE =
  "FORMAT RULE (enforced by the write gate): location must be §<digits>(.<digits>)* — e.g. §2.1, §2.2.1, or multiple segments separated by a single space like §2 §4 — or ¶<digits>. ASCII digits only: no Chinese numerals (§一 / §三.2 are rejected), no page numbers (p.11 rejected), no headings or other text. The same rule applies to scores[].target (node/fragment levels) and paragraphLogic[].location. Quote rules: slots[].evidence must be verbatim source text of ≥8 characters (paraphrase rejected); paragraphLogic[].quote ≥8 characters or empty.";

const tool = {
  name: "commit_extraction",
  description:
    "Validate and commit one paper-extraction record into the structure library. This is THE single write gate shared by path A (in-chat extraction) and path C (offline plugin session): validation runs before any file is written, and failure rejects the write.\n\n" +
    "Input: `extraction` (object) OR `extractionJsonPath` (string) — exactly one of them. For large records pass `extractionJsonPath`: an absolute path to a UTF-8 JSON file (write it first with your file-write tool) containing the extraction object; this avoids oversized tool-call payloads.\n\n" +
    "Input `extraction` fields: id (slug-year, e.g. sample-2020, all-lowercase+hyphens); meta.{title,authors,year,venue,discipline,boundary:{result:single|collection|volume_chapter,cut},extractor:A|C,date(YYYY-MM-DD),tags:[{name,action}],toVerify:[],anchorStatus:{has,entry},lowDecomposability:bool}; " +
    "understanding (free text); slots:[{location,action,object,evidence(原文引文≥8字),purpose}] (at least 1); emergent.{coreThesis,skeleton,objectionHandling,theoryUse,hiddenPremises,sectionFunctions,paragraphFunctions,openingClosing,densityDistribution}; paragraphLogic?:[{location,logic,quote}] (可选，仅关键段：开篇/转折/收束，0~3 段常见); " +
    "scores:[{level:article|node|fragment,target,score:1-10,rationale,anchorRef}] (at least one article-level); appreciation.{gems:[{location,note}],patterns:[],weaknesses:[{location,note}]}; newTypeProposal?.{name,definition,relation,basis}.\n\n" +
    LOCATION_RULE + "\n\n" +
    "meta.tags semantics: pass ONLY tags that are NEW to 标签库 (first do a semantic lookup against existing tags; if one matches, reuse it and do not include it). Each element: {name: 标签名, action: 该标签指向的处置动作描述} — `action` is written verbatim into the 标签库 '指向的处置动作' column, so write the action description (e.g. \"以形式符号分步建构方案\"), NOT a status word like new/reuse.\n\n" +
    "Mirrors 结构库/篇目/_模板.md. Use dryRun to check without writing.",
  parameters: {
    type: "object",
    properties: {
      extraction: {
        type: "object",
        description: "Structured extraction record (see tool description for the field list). Provide this OR extractionJsonPath, not both.",
      },
      extractionJsonPath: {
        type: "string",
        description: "Absolute path to a UTF-8 JSON file containing the extraction record. Alternative to the extraction object; use for large records to avoid oversized tool-call payloads.",
      },
      dryRun: { type: "boolean", description: "Validate only; do not write any file." },
    },
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
    let d = input.extraction;
    if ((d === undefined || d === null) && typeof input.extractionJsonPath === "string" && input.extractionJsonPath.trim()) {
      try {
        const file = await ctx.resources.read(ref(input.extractionJsonPath.trim()));
        d = JSON.parse(decoder.decode(file.content ?? new Uint8Array()));
      } catch (e) {
        return json({ ok: false, stage: "read_json", message: `extractionJsonPath 读取或解析失败：${e?.message || e}` });
      }
    }
    if (d === undefined || d === null) {
      return json({ ok: false, stage: "input", message: "需要 extraction（对象）或 extractionJsonPath（JSON 文件路径）二者之一。" });
    }
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
