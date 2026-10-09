// 通道三正式件：三闸推送链（设计文档 §5.8 第 58 轮已确认，开发文档 D4.12）。
// 归属闸（会话标定词 × 会话名三源取值链，第 63 轮）→ 命中闸（标签/类型字典交集 + 共用检索层，机械层只给候选与命中事实）
// → 频次闸（注入史去重，单次 ≤ maxPerRun）。三闸顺序与上限是设计口径，不可调高。
// 注入 = pi.sendMessage 可见档（存进会话、随下次请求进模型、不触发新 turn）；采纳权在读到消息的
// 会话内模型，相似度分数只排序不作判据。观测件 observe.js 独立保留（无差别证据），本件日志写 push.log。
import { appendFileSync, mkdirSync, readFileSync, promises as fsp } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { loadConfig } from "../lib/config.js";
import { TAG_LIB, TYPE_LIB } from "../lib/paths.js";

const DATA_DIR = path.join(homedir(), ".hanako", "plugin-data", "paper-structure-modeling");
const LOG_FILE = path.join(DATA_DIR, "push.log");
const ENTRY_TYPE = "psm-push";

function log(line) {
  try {
    mkdirSync(DATA_DIR, { recursive: true });
    appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${line}\n`, "utf-8");
  } catch {
    // 日志失败不外抛（沙箱禁写宿主目录时同观测件：自吞）
  }
}

// ---- 闸一判定的纯逻辑部分（可被 dev-check 直测）----

export function matchMarker(markers, name) {
  if (!Array.isArray(markers) || !markers.length) return null;
  if (typeof name !== "string" || !name) return null;
  const low = name.toLowerCase();
  for (const m of markers) {
    if (m && low.includes(m.toLowerCase())) return m;
  }
  return null;
}

// ---- 会话名取值链（第 62 轮实证：Hana 从不写 Pi session_info，getSessionName 结构性为空）----
// Hana 会话标题存 agents/<agent>/sessions/session-titles.json（key = sess id），而 Pi 会话标识是
// jsonl 文件名，两套 id 不通。三源依次：pi 会话名 → <sessionFile>.files.json 的 sessionId →
// usage-ledger attribution 按 sessionPath 反查 sessionId；拿到 sess id 后读同目录 session-titles.json
// 取标题。readJson 可注入供 dev-check 直测；任一步失败降级下一源，绝不外抛（agent_end 不被拖垮）。

function normalizePath(p) {
  try {
    return path.normalize(String(p)).toLowerCase();
  } catch {
    return "";
  }
}

export function resolveSessionName({ piName, sessionFile, readJson } = {}) {
  const read = (f) => {
    try {
      if (typeof readJson === "function") return readJson(f);
      return JSON.parse(readFileSync(f, "utf8"));
    } catch {
      return null; // 文件缺失/解析失败/注入读法抛错 → 一律降级下一源
    }
  };
  const titleOf = (sessId) => {
    if (typeof sessId !== "string" || !sessId || typeof sessionFile !== "string" || !sessionFile) return null;
    const titles = read(path.join(path.dirname(sessionFile), "session-titles.json"));
    const t = titles && titles[sessId];
    return typeof t === "string" && t.trim() ? t.trim() : null;
  };
  if (typeof piName === "string" && piName.trim()) return { name: piName.trim(), src: "pi" };
  if (typeof sessionFile !== "string" || !sessionFile) return { name: null, src: "none" };

  // 源二：files.json 旁挂文件（仅暂存过文件的会话存在，覆盖率约四成）
  const fj = read(`${sessionFile}.files.json`);
  const t1 = titleOf(fj && fj.sessionId);
  if (t1) return { name: t1, src: "files_json" };

  // 源三：usage-ledger attribution（覆盖所有起过 LLM 轮次的会话）
  const led = read(path.join(homedir(), ".hanako", "usage-ledger.json"));
  const target = normalizePath(sessionFile);
  for (const e of led && Array.isArray(led.entries) ? led.entries : []) {
    const a = e && e.attribution;
    if (!a || typeof a.sessionPath !== "string" || normalizePath(a.sessionPath) !== target) continue;
    const t2 = titleOf(a.sessionId);
    if (t2) return { name: t2, src: "ledger" };
    break; // 同会话同一 sessionId，titles 查过一次无即无
  }
  return { name: null, src: "none" };
}

function contentText(content) {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) return content.map((b) => (b && typeof b.text === "string" ? b.text : "")).join("\n");
  return "";
}

// 从 agent_end.messages 取最近一条 user 与 assistant 文本（限长），toolResult 等角色跳过。
export function extractRecentText(messages, maxUser = 500, maxAssistant = 1500) {
  let user = "";
  let assistant = "";
  for (const m of Array.isArray(messages) ? messages : []) {
    if (!m || typeof m !== "object") continue;
    const t = (typeof m.text === "string" && m.text) || contentText(m.content) || "";
    if (!t.trim()) continue;
    if (m.role === "user") user = t;
    else if (m.role === "assistant" || m.role === "model") assistant = t;
  }
  return { user: user.slice(0, maxUser), assistant: assistant.slice(0, maxAssistant) };
}

// 取第一张表的首列当字典（标签库/类型库同构表头，占位行与分隔行剔除）；
// 只取名字，语义字段归 parseTagLib 等专用解析器，这里不重复其语义。
function firstTableCells(md) {
  const names = [];
  for (const line of String(md || "").split(/\r?\n/)) {
    if (line.startsWith("## ")) break; // 只取第一张表
    if (!line.startsWith("|")) continue;
    const first = (line.split("|")[1] || "").trim();
    if (!first || first === "标签" || first === "类型" || first === "（暂无）") continue;
    if (/^-+$/.test(first)) continue;
    names.push(first);
  }
  return names;
}

function loadDictionary() {
  const names = [];
  for (const f of [TAG_LIB, TYPE_LIB]) {
    let md = "";
    try {
      md = readFileSync(f, "utf8");
    } catch {
      continue; // 库文件缺失 → 空字典 → 恒不命中 → 静默（空库防御）
    }
    for (const n of firstTableCells(md)) if (!names.includes(n)) names.push(n);
  }
  return names;
}

// searchLibrary 需要 ctx.resources.{list,read}；extension 环境用 node:fs 供一份同签名实现，
// 消费的仍是 lib/search.js 这一个检索函数（三通道同一检索接口的硬约束不破）。
function makeFsCtx() {
  return {
    resources: {
      async list(r) {
        const ents = await fsp.readdir(r.path, { withFileTypes: true });
        return { items: ents.map((d) => ({ name: d.name, isDirectory: d.isDirectory() })) };
      },
      async read(r) {
        const buf = await fsp.readFile(r.path);
        return { content: new Uint8Array(buf) };
      },
    },
  };
}

export function buildMessage(picked, matched, name) {
  const lines = [
    `【论文结构建模 · 自动感知注入】会话「${name}」当前内容命中结构库标签：${matched.slice(0, 8).join("、")}。`,
    "以下为物理检索候选（命中排序，不是相关性结论）：",
  ];
  for (const c of picked) {
    lines.push(`- 【${c.kind}】${c.title}（${c.path}，命中 ${c.score}）`);
    for (const h of (c.hits || []).slice(0, 2)) lines.push(`  L${h.line}: ${h.excerpt || ""}${h.text}`);
  }
  lines.push(
    "采纳指引：仅当候选与当前写作任务确实相关时才采用，采用时按通道一标准交付（模型位置 + 原篇目位置 + 原文引文）；与当前写作不相关请直接忽略，不必回应本条。"
  );
  return lines.join("\n");
}

export default async function (pi) {
  // searchLibrary 链动态加载：加载失败留日志降级，不让整个扩展静默死掉。
  let search;
  try {
    ({ searchLibrary: search } = await import("../lib/search.js"));
  } catch (e) {
    log(`LOAD_FAIL search: ${e && e.message}`);
    return;
  }
  log(`PUSH_LOADED pid=${process.pid}`);

  const memoryInjected = new Set(); // appendEntry 不可用时的进程内兜底
  let histMemoryOnly = false;

  pi.on("agent_end", async (event, ctx) => {
    try {
      // ---- 闸三·归属（会话名 × 标定词；取名走三源链，日志分状态，第 63 轮；日志 G1 按执行序）----
      const cfg = loadConfig();
      if (!cfg.markers.length) {
        log("G1_SKIP markers_empty"); // 默认全静默：标定词未配置不推送
        return;
      }
      const sessionFile =
        ctx && ctx.sessionManager && typeof ctx.sessionManager.getSessionFile === "function"
          ? ctx.sessionManager.getSessionFile()
          : undefined;
      const { name, src } = resolveSessionName({
        piName: typeof pi.getSessionName === "function" ? pi.getSessionName() : undefined,
        sessionFile,
      });
      if (!name) {
        log(`G1_SKIP name_unresolved markers=${cfg.markers.length} src=none`);
        return;
      }
      const marker = matchMarker(cfg.markers, name);
      if (!marker) {
        log(`G1_SKIP no_marker name=${JSON.stringify(name)} src=${src}`);
        return;
      }
      log(`G1_PASS name=${JSON.stringify(name)} src=${src} marker=${JSON.stringify(marker)}`);

      // ---- 闸一·命中（机械层：字典交集 → 共用检索层；结论留给会话内模型）----
      const { user, assistant } = extractRecentText(event && event.messages);
      const prose = `${user}\n${assistant}`.trim();
      if (!prose) {
        log("G2_SKIP no_text");
        return;
      }
      const dict = loadDictionary();
      const low = prose.toLowerCase();
      const matched = dict.filter((t) => low.includes(t.toLowerCase()));
      if (!matched.length) {
        log(`G2_SKIP no_tag dict=${dict.length}`);
        return;
      }
      let r;
      try {
        r = await search(makeFsCtx(), matched.join(" "), { limit: 12 });
      } catch (e) {
        log(`G2_SEARCH_FAIL ${e && e.message}`);
        return;
      }
      const results = r && r.ok ? r.results || [] : [];
      if (!results.length) {
        log(`G2_SKIP no_hit tags=${matched.length}`);
        return;
      }

      // ---- 闸二·频次（会话注入史：appendEntry 持久 + 进程内兜底）----
      const history = new Set(memoryInjected);
      try {
        const entries =
          ctx && ctx.sessionManager && typeof ctx.sessionManager.getEntries === "function"
            ? ctx.sessionManager.getEntries()
            : null;
        if (entries) {
          for (const e of entries) {
            if (e && e.type === "custom" && e.customType === ENTRY_TYPE && Array.isArray(e.data && e.data.paths)) {
              for (const p of e.data.paths) history.add(p);
            }
          }
        } else if (!histMemoryOnly) {
          histMemoryOnly = true;
          log("HIST memory_only getEntries 不可用，重启前仅进程内去重");
        }
      } catch (e) {
        log(`HIST_FAIL ${e && e.message}`);
      }
      const fresh = results.filter((x) => x && x.path && !history.has(x.path));
      if (!fresh.length) {
        log(`G3_SKIP all_injected n=${results.length}`);
        return;
      }
      const picked = fresh.slice(0, cfg.maxPerRun); // 单次注入 ≤ maxPerRun（设计上限 2）
      log(`G3_PASS candidates=${results.length} fresh=${fresh.length} pick=${picked.length}`);

      // ---- 可见档注入 ----
      if (typeof pi.sendMessage !== "function") {
        log("SEND_UNAVAILABLE pi.sendMessage 不存在");
        return;
      }
      try {
        pi.sendMessage({
          customType: ENTRY_TYPE,
          content: buildMessage(picked, matched, name),
          display: true,
          details: { paths: picked.map((x) => x.path), matched: matched.slice(0, 8), at: Date.now() },
        });
      } catch (e) {
        log(`SEND_FAIL ${e && e.message}`);
        return;
      }
      try {
        if (typeof pi.appendEntry === "function") {
          pi.appendEntry(ENTRY_TYPE, { paths: picked.map((x) => x.path), at: Date.now() });
        }
      } catch (e) {
        log(`APPEND_FAIL ${e && e.message}`);
      }
      for (const x of picked) memoryInjected.add(x.path);
      log(`INJECTED n=${picked.length} paths=${picked.map((x) => x.path).join(" | ")}`);
    } catch (e) {
      log(`ERROR ${e && (e.stack || e.message || e)}`);
    }
  });
}
