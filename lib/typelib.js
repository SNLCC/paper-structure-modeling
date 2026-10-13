// 类型库与候选类型宣告的行级修补（§5.9 设计 D，第 103 轮）。
// 纯函数（md in → md out），可被 dev-check 直接测。

const cellsOf = (line) => line.split("|").slice(1, -1).map((s) => s.trim());
const isSep = (line) => /^\|\s*-+/.test(line);

// 单篇篇目 → 2.5 新类型宣告（无宣告返回 null）。
// 「候选名 / 定义」一行里名称在「——」前、定义在其后；两者同写的既有格式如此。
export function parseTypeCandidate(md) {
  const text = String(md || "");
  if (!/^###\s*2\.5/m.test(text)) return null;
  const nameLine = /^- 候选名 \/ 定义：(.*)$/m.exec(text);
  if (!nameLine) return null;
  const raw = nameLine[1].trim();
  const idx = raw.indexOf("——");
  const name = (idx >= 0 ? raw.slice(0, idx) : raw).trim();
  const definition = idx >= 0 ? raw.slice(idx + 2).trim() : "";
  const statusLine = /^- 状态：(.*)$/m.exec(text);
  const relationLine = /^- 与既有类型库的关系：(.*)$/m.exec(text);
  return {
    name,
    definition,
    status: statusLine ? statusLine[1].trim() : "",
    relation: relationLine ? relationLine[1].trim() : "",
  };
}

// 类型库表格行 upsert：首行占位「（暂无）」被替换；同名行更新；否则插到类型表分隔线后。
// 列序：| 类型 | 定义 | 归并自 | 子语法 | 状态 | 出现篇数 |
export function upsertTypeRow(md, row) {
  const lines = String(md || "").split(/\r?\n/);
  const newLine = `| ${row.type} | ${row.definition || ""} | ${row.mergedFrom || ""} | ${row.subgrammar || ""} | ${row.status || ""} | ${row.count ?? ""} |`;
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].startsWith("|") || isSep(lines[i])) continue;
    const c = cellsOf(lines[i]);
    if (!c[0] || c[0] === "类型") continue;
    if (c[0] === "（暂无）") { lines[i] = newLine; return { md: lines.join("\n"), action: "replaced-placeholder" }; }
    if (c[0] === row.type) { lines[i] = newLine; return { md: lines.join("\n"), action: "updated" }; }
  }
  for (let i = 1; i < lines.length; i++) {
    if (isSep(lines[i]) && lines[i - 1].startsWith("|") && cellsOf(lines[i - 1])[0] === "类型") {
      // 追加到该表末行之后（表尾增长，不倒序）
      let last = i;
      for (let j = i + 1; j < lines.length && lines[j].startsWith("|") && !isSep(lines[j]); j++) last = j;
      lines.splice(last + 1, 0, newLine);
      return { md: lines.join("\n"), action: "inserted" };
    }
  }
  return { md, action: "notable" };
}

// 类型库行状态列修补（登记后的演化，如 并入→X）。只改同名列，其余原样。
export function patchTypeRowStatus(md, type, status) {
  const lines = String(md || "").split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].startsWith("|") || isSep(lines[i])) continue;
    const c = cellsOf(lines[i]);
    if (c[0] === type && c.length >= 5) {
      c[4] = status;
      lines[i] = `| ${c.join(" | ")} |`;
      return { md: lines.join("\n"), changed: true };
    }
  }
  return { md, changed: false };
}

// 宣告篇目 2.5 状态行留痕（第 116 轮放宽）：同名宣告全部盖章（允许改判与再裁）；
// 新文与旧文相同则跳过（幂等）。
export function patchDeclaringStatus(md, name, newStatus) {
  const c = parseTypeCandidate(md);
  if (!c || c.name !== name || c.status === newStatus) return { md, changed: false };
  const next = String(md).replace(/^- 状态：.*$/m, `- 状态：${newStatus}`);
  return { md: next, changed: next !== String(md) };
}
