
const BASE = "http://localhost:23119/api";

async function zoteroFetch(ctx, pathAndQuery) {
  let res;
  try {
    res = await ctx.network.fetch(`${BASE}${pathAndQuery}`, { timeoutMs: 8000, cacheTtlMs: 0 });
  } catch (err) {
    throw new Error(`Zotero 本地接口连接失败（Zotero 未运行？）：${err?.message || err}`);
  }
  if (res.status === 403) {
    throw new Error("Zotero 返回 403：请在 Zotero 设置 → 高级 → 勾选 Allow other applications on this computer to communicate with Zotero。");
  }
  if (!res.ok) {
    const url = `${BASE}${pathAndQuery}`;
    const body = await res.text().catch(() => "");
    throw new Error(`Zotero 返回 ${res.status} ${res.statusText}；请求 URL：${url}${body ? `；响应：${body.slice(0, 200)}` : ""}`);
  }
  return res;
}

export function unwrapItem(raw) {
  const d = raw?.data ?? raw ?? {};
  return {
    key: raw?.key ?? d.key ?? "",
    itemType: d.itemType || "",
    title: d.title || d.filename || "",
    creators: (d.creators || [])
      .map((c) => (c.lastName ? `${c.lastName}${c.firstName ? " " + c.firstName : ""}` : c.name || ""))
      .filter(Boolean)
      .join("; "),
    date: d.date || "",
    publicationTitle: d.publicationTitle || d.publisher || d.bookTitle || "",
    DOI: d.DOI || "",
    url: d.url || "",
  };
}

export { BASE, zoteroFetch };

const tool = {
  name: "zotero_search",
  description: "Search the local Zotero library (Zotero desktop must be running with local API enabled). Returns item summaries with keys for further fetching.",
  parameters: {
    type: "object",
    properties: {
      query: { type: "string", description: "Search in title/creator/year. Empty string returns most recently added items." },
      itemType: { type: "string", description: "Optional item type filter, e.g. journalArticle, book, bookSection, conferencePaper." },
      limit: { type: "number", description: "Max items to return, default 20, cap 100." },
    },
  },
  sessionPermission: { readOnly: true },
  async execute(input = {}, ctx) {
    const q = typeof input.query === "string" ? input.query.trim() : "";
    const limit = Math.min(Math.max(Number(input.limit) || 20, 1), 100);
    const params = new URLSearchParams({ limit: String(limit), sort: "dateAdded", direction: "desc" });
    if (q) {
      params.set("q", q);
      params.set("qmode", "titleCreatorYear");
    }
    if (typeof input.itemType === "string" && input.itemType.trim()) {
      params.set("itemType", input.itemType.trim());
    }
    const res = await zoteroFetch(ctx, `/users/0/items?${params.toString()}`);
    const raw = await res.json();
    const items = (Array.isArray(raw) ? raw : []).map(unwrapItem);
    return { content: [{ type: "text", text: JSON.stringify({ count: items.length, items }, null, 2) }] };
  },
};

export const { name, description, parameters, execute } = tool;
