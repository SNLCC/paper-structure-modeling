import { parseTagLib, appendQueueRow } from "../lib/taglib.js";
import { ref, STRUCT_ROOT, META_DIR, TAG_LIB } from "../lib/paths.js";

const decoder = new TextDecoder();
const json = (obj) => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 2) }] });

// 共现提示：候选判定 = 两标签共现篇数 ≥ threshold，或共享同一处置动作。
// 语义同义与否不在此判定（道 3 归库主裁决）；此处只算证据、进队列。
const DEFAULT_THRESHOLD = 2;

const parseTagsLine = (md) => {
  const m = /^- 标签：(.*)$/m.exec(md);
  if (!m) return [];
  return m[1].split("、").map((s) => s.trim()).filter((s) => s && s !== "（无）");
};

const tool = {
  name: "suggest_tag_merges",
  description:
    "Co-occurrence scan for label-merge review: scan all 篇目 for tag co-occurrence, score each tag pair by shared papers and shared 处置动作 (from 标签库), and append qualifying pairs to 标签库's 复核队列 with evidence. " +
    "This only computes evidence and enqueues — whether two labels are actually synonymous is the user's call (then apply_tag_merge). Idempotent: pairs already in the queue are not duplicated.",
  parameters: {
    type: "object",
    properties: {
      threshold: { type: "number", description: "Min shared papers to qualify, default 2." },
      dryRun: { type: "boolean", description: "Return candidates without appending to the queue." },
    },
  },
  sessionPermission: {
    kind: "workspace_write",
    describeSideEffect: () => ({
      kind: "file_write",
      summary: "Append candidate rows to 结构库/标签库.md 复核队列",
      ruleId: "paper-structure-modeling-suggest-tag-merges",
    }),
  },
  async execute(input = {}, ctx) {
    const threshold = Number(input.threshold) || DEFAULT_THRESHOLD;

    const tagMd = decoder.decode((await ctx.resources.read(ref(TAG_LIB))).content ?? new Uint8Array());
    const { tags, queue } = parseTagLib(tagMd);
    const actionOf = new Map(tags.map((t) => [t.tag, t.action]));
    const queued = new Set(queue.map((q) => q.pair));

    const listing = await ctx.resources.list(ref(META_DIR));
    const papers = [];
    for (const item of listing.items || []) {
      if (!item.isDirectory && item.name.endsWith(".md") && item.name !== "_模板.md") {
        const md = decoder.decode((await ctx.resources.read(ref(`${META_DIR}/${item.name}`))).content ?? new Uint8Array());
        papers.push({ id: item.name.replace(/\.md$/, ""), tags: parseTagsLine(md) });
      }
    }

    const co = new Map(); // "A||B" -> Set<篇目>
    for (const p of papers) {
      for (let i = 0; i < p.tags.length; i++) {
        for (let j = i + 1; j < p.tags.length; j++) {
          const key = [p.tags[i], p.tags[j]].sort().join("||");
          if (!co.has(key)) co.set(key, new Set());
          co.get(key).add(p.id);
        }
      }
    }

    const candidates = [];
    for (const [key, set] of co) {
      const [a, b] = key.split("||");
      const sharedAction = actionOf.get(a) && actionOf.get(a) === actionOf.get(b);
      if (set.size < threshold && !sharedAction) continue;
      const pair = `${a} vs ${b}`;
      if (queued.has(pair)) continue;
      candidates.push({
        pair,
        sharedPapers: [...set],
        sharedAction: sharedAction ? actionOf.get(a) : null,
        evidence: `共现 ${set.size} 篇（${[...set].join("、") || "无"}）${sharedAction ? `；同指处置动作「${sharedAction}」` : ""}`,
      });
    }

    if (input.dryRun || !candidates.length) {
      return json({ ok: true, scanned: papers.length, candidates, written: false });
    }

    let today = new Date().toISOString().slice(0, 10);
    let cur = tagMd;
    const appended = [];
    for (const c of candidates) {
      const r = appendQueueRow(cur, { pair: c.pair, evidence: c.evidence, date: today });
      if (r.appended) { cur = r.md; appended.push(c.pair); }
    }
    if (appended.length) await ctx.resources.write(ref(TAG_LIB), cur);
    return json({ ok: true, scanned: papers.length, candidates, written: appended.length });
  },
};

export const { name, description, parameters, execute } = tool;
