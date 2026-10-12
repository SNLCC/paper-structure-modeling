// 锚点样本：校验 + 渲染 + 分数解析（render 与 parse 配对，格式自产自解析）。
// 锚点只增不改：建立时录入，之后不修改。

const ID_RE = /^[a-z0-9\u4e00-\u9fff]+(?:-[a-z0-9\u4e00-\u9fff]+)*-\d{4}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function validateAnchor(a) {
  const errors = [];
  const err = (field, message) => errors.push({ field, message });
  if (!a || typeof a !== "object") return { ok: false, errors: [{ field: "anchor", message: "必须为对象" }] };

  if (!ID_RE.test(String(a.id || "").trim())) err("id", "格式应为 <标题>-<作者>-<年份>，与篇目 id 对齐（如示例论文标题-示例作者-2016）");
  for (const f of ["title", "authors", "year"]) {
    if (!String(a[f] ?? "").trim()) err(f, "必填");
  }
  if (!(typeof a.score === "number" && a.score >= 1 && a.score <= 10)) err("score", "1-10 数值（库主打的篇级总分）");
  if (String(a.rationale ?? "").trim().length < 10) err("rationale", "理由至少 10 字——归纳评分指引要靠它，空泛理由无法归纳");
  if (!String(a.textType ?? "").trim()) err("textType", "文本类型（库主判，自由文本；评分维度按类型分的前提）");
  if (!DATE_RE.test(String(a.date || ""))) err("date", "格式 YYYY-MM-DD");
  if (!String(a.recordedBy ?? "").trim()) err("recordedBy", "如「库主」或「助手代录（库主口述）」");
  return { ok: errors.length === 0, errors };
}

export function renderAnchor(a) {
  return [
    `# 锚点：${a.title}`,
    "",
    `- 对应篇目：${a.entryRef || `篇目/${a.id}.md（若尚未拆解）`}`,
    `- 出处：${a.authors} / ${a.year}${a.venue ? ` / ${a.venue}` : ""}`,
    `- 文本类型（库主判）：${a.textType}`,
    `- 篇级总分：${a.score}`,
    `- 理由：${String(a.rationale).trim()}`,
    `- 打分日期：${a.date}`,
    `- 录入：${a.recordedBy}`,
    "",
    "> 用途限定：归纳评分指引 + 盲打校验。不做逐篇相似度匹配。",
    "",
  ].join("\n");
}

export function parseAnchorScore(md) {
  const m = /-\s*(?:库主打的)?篇级总分：\s*(\d+(?:\.\d+)?)/.exec(String(md || ""));
  return m ? Number(m[1]) : null;
}
