import { useCallback, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { hana } from '@hana/app-sdk/ui';
import {
  Button,
  CardShell,
  EmptyState,
  HanaThemeProvider,
  Select,
  TextInput,
} from '@hana/plugin-components';
import '@hana/plugin-components/styles.css';
import './panel.css';

// v2：路由基准由 hana.api.fetch 自定（/api/apps/<id>/routes/），
// 凭证经 appSurfaceSession 自动携带（v1 的 token query 机制退役）。
const route = (p: string) => p.replace(/^\/+/, '');

// 非 JSON 响应（如宿主 500 纯文本）不再让 .json() 当场炸：解析失败按 HTTP 错误结构化返回。
async function parseAny(r: any): Promise<any> {
  const t = await r.text();
  try {
    return JSON.parse(t);
  } catch {
    return { ok: false, stage: 'http', message: `HTTP ${r.status}：${(t || '无响应体').slice(0, 200)}` };
  }
}
async function apiGet(path: string): Promise<any> {
  const r = await hana.api.fetch(route(path));
  return parseAny(r);
}
async function apiPost(path: string, body: unknown): Promise<any> {
  const r = await hana.api.fetch(route(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return parseAny(r);
}

// 导入链是后台单任务：提交后轮询 status 直到收尾（超时兕底 8 分钟 > 3 次重试上限）。
async function pollImport(timeoutMs = 8 * 60 * 1000): Promise<any> {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    await new Promise((r) => setTimeout(r, 5000));
    const s = await apiGet('/api/import/status').catch(() => null);
    if (s && s.running === false && s.lastResult) return s.lastResult;
  }
  return { ok: false, stage: 'timeout', message: '等待超时（8 分钟），任务可能仍在运行；稍后到「待办 · 导入失败」查看结果。' };
}

// 篇目首行落格格式：# 题目（作者, 年份）——列表与下拉统一显示人话（不露文件 id）
function parseEntryHead(firstLine: string, fallbackId: string) {
  const m = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(firstLine || '').trim());
  return { title: m ? m[1] : fallbackId, meta: m ? `${m[2].trim()} · ${m[3]}` : '' };
}
async function readEntryHead(file: string): Promise<string> {
  const r = await apiGet(fileApi(`篇目/${file}`)).catch(() => null);
  return r && r.ok ? String(r.content || '').split(/\r?\n/, 1)[0] : '';
}
const fileApi = (rel: string) => `/api/file?path=${encodeURIComponent(rel)}`;

// ---- 方案三信息架构：5 区导航 + 区内子页，首页为默认落点 ----
type Zone = 'home' | 'use' | 'library' | 'todo' | 'settings';
const NAV: { id: Zone; label: string }[] = [
  { id: 'home', label: '首页' },
  { id: 'use', label: '取用' },
  { id: 'library', label: '结构库' },
  { id: 'todo', label: '待办' },
  { id: 'settings', label: '设置' },
];
const SUBS: Record<'use' | 'library' | 'todo', { id: string; label: string }[]> = {
  use: [
    { id: 'search', label: '检索' },
    { id: 'models', label: '写作模型' },
  ],
  library: [
    { id: 'browse', label: '篇目' },
    { id: 'compare', label: '对比' },
    { id: 'board', label: '看板' },
  ],
  todo: [
    { id: 'score', label: '录评分' },
    { id: 'queue', label: '标签裁决' },
    { id: 'import-fail', label: '导入失败' },
  ],
};
type ZoneEx = 'use' | 'library' | 'todo';
type Stats = { papers: number; models: number; queuePending: number; failures: number };

// ---- 轻量 Markdown 渲染（标题/表格/列表/引用/行内样式）----
function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function inline(s: string): string {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}
function mdToHtml(md: string): string {
  const lines = String(md || '').split(/\r?\n/);
  const out: string[] = [];
  let i = 0;
  let inList = false;
  const closeList = () => { if (inList) { out.push('</ul>'); inList = false; } };
  while (i < lines.length) {
    const line = lines[i];
    if (/^\|.*\|/.test(line) && i + 1 < lines.length && /^\|\s*-+/.test(lines[i + 1])) {
      closeList();
      const head = line.split('|').slice(1, -1).map((c) => c.trim());
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        rows.push(lines[i].split('|').slice(1, -1).map((c) => c.trim()));
        i++;
      }
      out.push('<table><thead><tr>' + head.map((h) => `<th>${inline(h)}</th>`).join('') + '</tr></thead><tbody>');
      for (const r of rows) out.push('<tr>' + r.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>');
      out.push('</tbody></table>');
      continue;
    }
    if (/^###\s/.test(line)) { closeList(); out.push(`<h3>${inline(line.slice(4))}</h3>`); }
    else if (/^##\s/.test(line)) { closeList(); out.push(`<h2>${inline(line.slice(3))}</h2>`); }
    else if (/^#\s/.test(line)) { closeList(); out.push(`<h1>${inline(line.slice(2))}</h1>`); }
    else if (/^>\s?/.test(line)) { closeList(); out.push(`<blockquote>${inline(line.replace(/^>\s?/, ''))}</blockquote>`); }
    else if (/^-\s/.test(line) || /^\*\s/.test(line)) {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push(`<li>${inline(line.slice(2))}</li>`);
    }
    else if (/^---+\s*$/.test(line)) { closeList(); out.push('<hr>'); }
    else if (line.trim() === '') { closeList(); }
    else { closeList(); out.push(`<p>${inline(line)}</p>`); }
    i++;
  }
  closeList();
  return out.join('\n');
}

function Doc({ md }: { md: string }) {
  return <div className="doc" dangerouslySetInnerHTML={{ __html: mdToHtml(md) }} />;
}

async function listDir(dir: string): Promise<string[]> {
  const r = await apiGet(`/api/list?dir=${encodeURIComponent(dir)}`);
  if (!r.ok) return [];
  return (r.items || [])
    .filter((it: any) => !it.isDirectory && it.name.endsWith('.md') && it.name !== '_模板.md')
    .map((it: any) => it.name as string);
}

type QueueRow = { pair: string; evidence: string; date: string; decision: string };
function parseQueue(md: string): QueueRow[] {
  const lines = String(md || '').split(/\r?\n/);
  const rows: QueueRow[] = [];
  let inQ = false;
  for (const line of lines) {
    if (line.startsWith('## ')) { inQ = line.includes('复核队列'); continue; }
    if (inQ && line.startsWith('|') && !/^\|\s*-+/.test(line)) {
      const c = line.split('|').slice(1, -1).map((s) => s.trim());
      if (c[0] && c[0] !== '疑似对') rows.push({ pair: c[0], evidence: c[1] || '', date: c[2] || '', decision: c[3] || '' });
    }
  }
  return rows;
}

// 首页状态条 + 待办徽标共用一份统计（不各拉一套）
async function loadStats(): Promise<Stats> {
  const [papers, models, tagLib, fails] = await Promise.all([
    listDir('篇目'),
    listDir('写作模型'),
    apiGet(fileApi('标签库.md')),
    apiGet('/api/import/failures').catch(() => ({ ok: false, items: [] })),
  ]);
  const queue = tagLib.ok ? parseQueue(tagLib.content) : [];
  return {
    papers: papers.length,
    models: models.length,
    queuePending: queue.filter((r) => !r.decision).length,
    failures: (fails.items || []).length,
  };
}

// ---- 1 录评分 ----
function ScoreTab() {
  const today = new Date().toISOString().slice(0, 10);
  const [f, setF] = useState({ id: '', title: '', authors: '', year: '', venue: '', textType: '', score: '9', rationale: '', date: today, recordedBy: '' });
  const [result, setResult] = useState<any>(null);
  const set = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }));

  async function submit() {
    const anchor = {
      id: f.id.trim(), title: f.title.trim(), authors: f.authors.trim(), year: f.year.trim(),
      venue: f.venue.trim() || undefined, textType: f.textType.trim(),
      score: Number(f.score), rationale: f.rationale.trim(), date: f.date, recordedBy: f.recordedBy.trim(),
    };
    const r = await apiPost('/api/tool/commit_anchor', { anchor });
    setResult(r);
    if (r.ok) hana.toast.show({ message: '评分已落盘', type: 'success' });
  }

  return (
    <div className="form">
      <p className="hint">你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。</p>
      <div className="grid2">
        <TextInput label="篇目 id（slug-年）" value={f.id} onChange={(e) => set('id', e.currentTarget.value)} placeholder="sample-2020" />
        <TextInput label="文本类型（你判）" value={f.textType} onChange={(e) => set('textType', e.currentTarget.value)} placeholder="论证型 / 阐释型…" />
        <TextInput label="标题" value={f.title} onChange={(e) => set('title', e.currentTarget.value)} />
        <TextInput label="作者" value={f.authors} onChange={(e) => set('authors', e.currentTarget.value)} />
        <TextInput label="年份" value={f.year} onChange={(e) => set('year', e.currentTarget.value)} />
        <TextInput label="出处（可空）" value={f.venue} onChange={(e) => set('venue', e.currentTarget.value)} />
        <TextInput label="总分 1-10" value={f.score} onChange={(e) => set('score', e.currentTarget.value)} />
        <TextInput label="日期" value={f.date} onChange={(e) => set('date', e.currentTarget.value)} />
      </div>
      <TextInput label="理由（≥10 字）" value={f.rationale} onChange={(e) => set('rationale', e.currentTarget.value)} />
      <TextInput label="录入者" value={f.recordedBy} onChange={(e) => set('recordedBy', e.currentTarget.value)} />
      <Button variant="primary" onClick={submit}>提交评分</Button>
      {result && (
        <pre className={result.ok ? 'ok' : 'err'}>
          {result.ok ? `已写入：${result.file || '(dry run)'}` : JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

// ---- 2 标签裁决 ----
function QueueTab({ tick }: { tick: number }) {
  const [rows, setRows] = useState<QueueRow[]>([]);
  const [note, setNote] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState('');
  const load = useCallback(async () => {
    const r = await apiGet(fileApi('标签库.md'));
    setRows(r.ok ? parseQueue(r.content) : []);
  }, []);
  useEffect(() => { void load(); }, [load, tick]);

  async function decide(pair: string, merged: string, target: string) {
    const date = new Date().toISOString().slice(0, 10);
    const evidence = note[pair] || `裁决执行：${pair}`;
    const r = await apiPost('/api/tool/apply_tag_merge', { mergedLabel: merged, target, date, evidence });
    setMsg(r.ok ? `已执行：${merged} → ${r.now}` : (r.message || JSON.stringify(r)));
    if (r.ok) await load();
  }

  const pending = rows.filter((r) => !r.decision);
  return (
    <div>
      <p className="hint">相近标签会进到这里，由你决定合并方向；裁决后库内归一，原始记录不动。</p>
      {rows.length === 0 && <EmptyState title="暂无待裁决标签" description="篇目积累出相近标签后，候选会自动出现在这里。" />}
      {rows.map((r) => (
        <CardShell key={r.pair} title={r.pair} description={`${r.date} 进队 · ${r.evidence}`}>
          {r.decision ? (
            <p className="decided">已裁决：{r.decision}</p>
          ) : (
            <div className="queue-actions">
              {[r.pair.split(' vs ')[0], r.pair.split(' vs ')[1]].filter(Boolean).map((merged, idx, arr) => (
                <div key={merged} className="queue-op">
                  <Button onClick={() => decide(r.pair, merged, arr[1 - idx])}>
                    「{merged}」并入「{arr[1 - idx]}」
                  </Button>
                </div>
              ))}
              <TextInput label="依据（可空）" value={note[r.pair] || ''} onChange={(e) => setNote((p) => ({ ...p, [r.pair]: e.currentTarget.value }))} />
            </div>
          )}
        </CardShell>
      ))}
      {pending.length > 0 && null}
      {msg && <p className={msg.startsWith('已') ? 'ok' : 'err'}>{msg}</p>}
    </div>
  );
}

// ---- 3 篇目（一套导航：条目即按钮，显示题目 / 作者 · 年份）----
function BrowseTab({ tick }: { tick: number }) {
  const [items, setItems] = useState<{ id: string; title: string; meta: string }[]>([]);
  const [sel, setSel] = useState('');
  const [md, setMd] = useState('');
  useEffect(() => {
    void listDir('篇目').then(async (fs) => {
      const list = await Promise.all(
        fs.map(async (f) => {
          const { title, meta } = parseEntryHead(await readEntryHead(f), f.replace(/\.md$/, ''));
          return { id: f, title, meta: meta || f.replace(/\.md$/, '') };
        }),
      );
      setItems(list);
    });
  }, [tick]);
  useEffect(() => {
    if (!sel) { setMd(''); return; }
    void apiGet(fileApi(`篇目/${sel}`)).then((r) => setMd(r.ok ? r.content : r.message || '读取失败'));
  }, [sel]);

  if (!items.length) return <EmptyState title="还没有篇目" description="导入文献或在对话里拆解后，篇目会出现在这里。" />;
  return (
    <div className="split">
      <div className="side">
        <div className="entrylist">
          {items.map((it) => (
            <button
              key={it.id}
              className={sel === it.id ? 'entryitem on' : 'entryitem'}
              onClick={() => setSel(it.id)}
            >
              <span className="entrytitle">{it.title}</span>
              <span className="entrymeta">{it.meta}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="main">{sel ? <Doc md={md} /> : <p className="hint">左侧选篇查看（每条登记都带位置与原文引文）。</p>}</div>
    </div>
  );
}

// ---- 4 对比 ----
function CompareTab({ tick }: { tick: number }) {
  const [files, setFiles] = useState<string[]>([]);
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [mdA, setMdA] = useState('');
  const [mdB, setMdB] = useState('');
  const [labels, setLabels] = useState<Record<string, string>>({});
  useEffect(() => {
    void listDir('篇目').then(async (fs) => {
      setFiles(fs);
      if (fs[0]) setA(fs[0]);
      if (fs[1]) setB(fs[1]);
      const pairs = await Promise.all(fs.map(async (f) => {
        const { title, meta } = parseEntryHead(await readEntryHead(f), f.replace(/\.md$/, ''));
        return [f, meta ? `${title} · ${meta}` : title] as const;
      }));
      setLabels(Object.fromEntries(pairs));
    });
  }, [tick]);
  useEffect(() => {
    if (a) void apiGet(fileApi(`篇目/${a}`)).then((r) => setMdA(r.ok ? r.content : ''));
  }, [a]);
  useEffect(() => {
    if (b) void apiGet(fileApi(`篇目/${b}`)).then((r) => setMdB(r.ok ? r.content : ''));
  }, [b]);

  if (files.length < 2) return <EmptyState title="至少两篇可对比" description="先积累两篇以上篇目。" />;
  const opts = files.map((f) => ({ value: f, label: labels[f] || f.replace(/\.md$/, '') }));
  return (
    <div>
      <div className="grid2">
        <Select value={a} onChange={setA} options={opts} />
        <Select value={b} onChange={setB} options={opts} />
      </div>
      <div className="compare">
        <div className="col"><Doc md={mdA} /></div>
        <div className="col"><Doc md={mdB} /></div>
      </div>
    </div>
  );
}

// ---- 5 看板 ----
function BoardTab({ tick }: { tick: number }) {
  const [stats, setStats] = useState<any>(null);
  useEffect(() => {
    void (async () => {
      const [papers, anchors, models, tagLib, mapping, typeLib] = await Promise.all([
        listDir('篇目'), listDir('锚点样本'), listDir('写作模型'),
        apiGet(fileApi('标签库.md')), apiGet(fileApi('闭包映射表.md')), apiGet(fileApi('类型库.md')),
      ]);
      const tags = tagLib.ok ? countTable(tagLib.content, '标签') : [];
      const queue = tagLib.ok ? parseQueue(tagLib.content) : [];
      const mapRows = mapping.ok ? countTable(mapping.content, 'from') : [];
      const types = typeLib.ok ? countTable(typeLib.content, '类型') : [];
      setStats({
        papers: papers.length, anchors: anchors.length, models: models.length,
        tags, queuePending: queue.filter((q: any) => !q.decision).length,
        mapRows, types,
      });
    })();
  }, [tick]);
  if (!stats) return <p className="hint">统计中…</p>;
  const coverage = stats.papers ? Math.round((stats.anchors / stats.papers) * 100) : 0;
  return (
    <div className="cards">
      <CardShell title={`篇目 ${stats.papers}`} description="已完成的篇目" />
      <CardShell title={`锚点 ${stats.anchors}`} description={`锚点覆盖度 ${coverage}%（置信度依据之一）`} />
      <CardShell title={`标签 ${stats.tags.length}`} description={`待裁决 ${stats.queuePending}`} />
      <CardShell title={`类型 ${stats.types.length}`} description={`映射表 ${stats.mapRows.length} 行`} />
      <CardShell title={`写作模型 ${stats.models}`} description="版本化产物" />
      <CardShell title="描述性 / 规范性频率" description="描述与规范分开统计；篇目与锚点积累后按类型分组计算。" />
    </div>
  );
}

function countTable(md: string, headerFirst: string): string[] {
  const lines = String(md || '').split(/\r?\n/);
  const out: string[] = [];
  let inTable = false;
  for (const line of lines) {
    if (line.startsWith('|') && !/^\|\s*-+/.test(line)) {
      const c = line.split('|').slice(1, -1).map((s) => s.trim());
      if (c[0] === headerFirst) { inTable = true; continue; }
      if (inTable && c[0] && c[0] !== '（暂无）') out.push(c[0]);
    } else if (inTable && !line.startsWith('|')) inTable = false;
  }
  return out;
}

// ---- 6 写作模型（浏览 + 生成/更新入口：管线第 4-5 环，版本递增历史不覆盖）----
function ModelsTab({ tick }: { tick: number }) {
  const [files, setFiles] = useState<string[]>([]);
  const [sel, setSel] = useState('');
  const [md, setMd] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const load = useCallback(() => { void listDir('写作模型').then(setFiles); }, []);
  useEffect(() => { void load(); }, [load, tick]);
  useEffect(() => {
    if (!sel) { setMd(''); return; }
    void apiGet(fileApi(`写作模型/${sel}`)).then((r) => setMd(r.ok ? r.content : ''));
  }, [sel]);

  async function generate() {
    setBusy(true);
    setMsg('');
    try {
      const start = await apiPost('/api/model/generate', {});
      if (!start.started) { setMsg(start.message || '发起失败'); setBusy(false); return; }
      setMsg('建模中：归属 → 归纳 → 逐类型生成（每个类型一次模型调用，可离开本页）…');
      const t0 = Date.now();
      let fin: any = null;
      while (Date.now() - t0 < 8 * 60 * 1000) {
        await new Promise((r) => setTimeout(r, 5000));
        const s = await apiGet('/api/model/status').catch(() => null);
        if (s && s.running === false && s.lastResult) { fin = s.lastResult; break; }
      }
      if (!fin) { setMsg('等待超时（8 分钟），稍后刷新本页查看结果'); setBusy(false); return; }
      const lines = (fin.results || []).map((x: any) =>
        x.ok
          ? `✓ ${x.type} → v${x.version}（样本 ${x.samples} 篇${x.previous ? `，原 v${x.previous}` : ''}）`
          : x.skipped
            ? `· ${x.type}：${x.skipped}`
            : `✗ ${x.type}：${x.error || '失败'}`);
      const wins = lines.filter((l: string) => l.startsWith('✓')).length;
      setMsg((wins ? (lines.length === wins ? '完成：' : '部分完成：') : '未生成：') + (lines.join('；') || fin.message || ''));
      if (wins) {
        hana.toast.show({ message: '写作模型已生成/更新', type: 'success' });
        load();
      }
    } catch (e: any) {
      setMsg(`请求失败：${String(e?.message || e)}`);
    }
    setBusy(false);
  }

  return (
    <div>
      <div className="import-row">
        <Button variant="primary" disabled={busy} onClick={() => void generate()}>
          {busy ? '建模中…' : '生成 / 更新写作模型'}
        </Button>
        <span className="hint">同类型样本 ≥2 篇才生成；新文献入库后再次点击即得新版本（v+1，历史保留）。</span>
      </div>
      {msg && <pre className="hint">{msg}</pre>}
      {!files.length ? (
        <EmptyState title="暂无写作模型" description="点上方按钮归纳生成；样本不足的类型会跳过并说明。" />
      ) : (
        <>
          <div className="filebtns">
            {files.map((f) => (
              <button key={f} className={sel === f ? 'filebtn on' : 'filebtn'} onClick={() => setSel(f)}>{f.replace(/\.md$/, '')}</button>
            ))}
          </div>
          {sel ? <Doc md={md} /> : <p className="hint">选择一份模型查看（规律描述 + 骨架挂实例 + 高低分差异点）。</p>}
        </>
      )}
    </div>
  );
}

// ---- 7 检索（取用）：与 search_structure 工具共用同一 searchLibrary ----
function SearchTab() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [sel, setSel] = useState<{ path: string; title: string } | null>(null);
  const [md, setMd] = useState('');

  async function go() {
    if (!q.trim()) return;
    const r = await apiGet(`/api/search?query=${encodeURIComponent(q.trim())}`);
    setResults(r.ok ? r.results : []);
    setSel(null);
  }
  useEffect(() => {
    if (!sel) { setMd(''); return; }
    void apiGet(fileApi(sel.path)).then((r) => setMd(r.ok ? r.content : '读取失败'));
  }, [sel]);

  return (
    <div>
      <p className="hint">按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。</p>
      <div className="searchbar">
        <TextInput label="关键词（空格 / 、 分隔）" value={q} onChange={(e) => setQ(e.currentTarget.value)}
          placeholder="例：反驳 开头" onKeyDown={(e) => { if (e.key === 'Enter') void go(); }} />
        <Button variant="primary" onClick={() => void go()}>搜索</Button>
      </div>
      <div className="searchresults">
        {results.map((r) => (
          <div key={r.path} className={sel?.path === r.path ? 'searchhit on' : 'searchhit'}>
            <div className="searchhit-head" onClick={() => setSel(r)}>
              <span className="badge">{r.kind}</span>
              <b>{r.title}</b>
              <span className="hint">命中 {r.score} · {r.path}</span>
            </div>
            {sel?.path !== r.path && r.hits?.slice(0, 2).map((h: any, i: number) => (
              <div key={i} className="hitline">L{h.line}: {h.excerpt}{h.text}</div>
            ))}
          </div>
        ))}
        {!results.length && <p className="hint">输入关键词后搜索；结果按命中度排序，点击标题展开全文。</p>}
      </div>
      {sel && <div className="searchpreview"><h4>{sel.title}</h4><Doc md={md} /></div>}
    </div>
  );
}

function SettingsTab() {
  const [markers, setMarkers] = useState('');
  const [libPath, setLibPath] = useState('');
  const [maxN, setMaxN] = useState('2');
  const [note, setNote] = useState('');

  useEffect(() => {
    void apiGet('/api/config').then((r) => {
      if (r.ok && r.config) {
        setMarkers((r.config.markers || []).join('、'));
        setLibPath(r.config.libraryPath || '');
        setMaxN(String(r.config.maxPerRun ?? 2));
      } else {
        setNote(r.message || '配置读取失败');
      }
    });
  }, []);

  async function save() {
    setNote('保存中…');
    const r = await apiPost('/api/config', {
      markers: markers.split(/[\s、，,;；]+/).map((s) => s.trim()).filter(Boolean),
      libraryPath: libPath.trim(),
      maxPerRun: Number(maxN) || 2,
    });
    setNote(r.ok ? '已保存' : `保存失败：${r.message || '未知错误'}`);
  }

  return (
    <div className="settings">
      <p className="hint">会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。</p>
      <TextInput label="会话标定词（、或逗号分隔，含任一即放行）" value={markers}
        onChange={(e) => setMarkers(e.currentTarget.value)} placeholder="例：构成性、论文、写作" />
      <TextInput label="结构库路径（留空用默认；改后重启 Hana 生效）" value={libPath}
        onChange={(e) => setLibPath(e.currentTarget.value)} placeholder="默认：workspace 写作模型插件/结构库" />
      <TextInput label="单次推荐上限（1-2，设计上限 2）" value={maxN}
        onChange={(e) => setMaxN(e.currentTarget.value)} />
      <div className="saverow">
        <Button variant="primary" onClick={() => void save()}>保存</Button>
        {note && <span className="savehint">{note}</span>}
      </div>
      <p className="hint">命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。</p>
    </div>
  );
}

// ---- 导入区（首页内）：拖放 md/txt + 文件选择 + 粘贴 → POST /api/import ----
function ImportZone({ onDone }: { onDone: () => void }) {
  const [paste, setPaste] = useState('');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [dragOver, setDragOver] = useState(false);
  const [showZotero, setShowZotero] = useState(false);

  async function submit(body: Record<string, unknown>, fromTs?: number) {
    setBusy(true);
    setResult(null);
    try {
      const start = await apiPost('/api/import', fromTs !== undefined ? { ...body, fromTs } : body);
      if (!start.started) {
        // 快速失败（入参/忙闸/网络错误）直接呈现
        setResult(start);
        setBusy(false);
        return;
      }
      setResult({ ok: true, stage: 'running', message: start.message || '拆解进行中' });
      const r = await pollImport();
      setResult(r);
      if (r.ok) {
        hana.toast.show({ message: '拆解完成，已入库', type: 'success' });
        onDone();
      } else if (r.failureTs) {
        hana.toast.show({ message: '拆解失败，已记入待办', type: 'error' });
        onDone();
      }
    } catch (e: any) {
      setResult({ ok: false, stage: 'network', message: String(e?.message || e) });
    }
    setBusy(false);
  }

  async function run(text: string, fromTs?: number) {
    const t = String(text || '').trim();
    if (!t) {
      setResult({ ok: false, stage: 'input', message: '请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件' });
      return;
    }
    await submit({ text: t }, fromTs);
  }

  async function readFile(f: File) {
    if (/\.pdf$/i.test(f.name)) {
      if (f.size > 50 * 1024 * 1024) {
        setResult({ ok: false, stage: 'input', message: 'PDF 超过 50 MB 上限' });
        return;
      }
      try {
        const b64 = await new Promise<string>((res, rej) => {
          const rd = new FileReader();
          rd.onload = () => res(String(rd.result).split(',')[1] || '');
          rd.onerror = () => rej(new Error('文件读取失败'));
          rd.readAsDataURL(f);
        });
        await submit({ pdfBase64: b64, filename: f.name });
      } catch (e: any) {
        setResult({ ok: false, stage: 'input', message: String(e?.message || e) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(f.name)) {
      setResult({ ok: false, stage: 'input', message: '支持 md / txt / pdf 文件' });
      return;
    }
    await submit({ text: await f.text() });
  }

  return (
    <div className="import-zone">
      <h4 className="import-title">导入文献</h4>
      <div
        className={dragOver ? 'drop on' : 'drop'}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          const f = e.dataTransfer.files?.[0];
          if (f) void readFile(f);
        }}
      >
        <p>把 .md / .txt / .pdf 文献拖到这里</p>
        <label className="filepick">
          或选择文件
          <input
            type="file"
            accept=".md,.txt,.pdf,text/plain,text/markdown,application/pdf"
            style={{ display: 'none' }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              e.target.value = '';
              if (f) void readFile(f);
            }}
          />
        </label>
        <p className="hint zotero-toggle">
          或
          <button className="linkbtn" onClick={() => setShowZotero((v) => !v)}>
            {showZotero ? '收起 Zotero' : '从 Zotero 取'}
          </button>
        </p>
      </div>
      {showZotero && <ZoteroBox submit={(b) => submit(b)} busy={busy} />}
      <textarea
        className="pastebox"
        value={paste}
        onChange={(e) => setPaste(e.target.value)}
        placeholder="也可以直接粘贴文献全文…"
        rows={4}
        disabled={busy}
      />
      <div className="import-row">
        <Button variant="primary" disabled={busy || !paste.trim()} onClick={() => void run(paste)}>
          一键拆解
        </Button>
        {busy && <span className="hint">正在拆解：提取（PDF 先转文本）→ 落格校验 → 入库（约 1-3 分钟，可离开本页，完成后有提示）…</span>}
      </div>
      {result && (
        <pre className={result.ok ? 'ok' : 'err'}>
          {result.ok
            ? result.stage === 'running'
              ? `${result.message || '拆解进行中…'}`
              : `已入库：${result.file}（第 ${result.attempts} 次通过${result.tagsAdded?.length ? `，新增标签 ${result.tagsAdded.join('、')}` : ''}）` +
              (result.pdfEngine
                ? `\nPDF 引擎：${
                    result.pdfEngine === 'pymupdf'
                      ? 'PyMuPDF'
                      : 'unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf'
                  }`
                : '')
            : `${result.message || '拆解失败'}${
                result.errors?.length
                  ? '\n' + result.errors.slice(0, 6).map((x: any) => `· ${x.field}：${x.message}`).join('\n')
                  : ''
              }${result.failureTs ? '\n（已记入待办，可到「待办 · 导入失败」重试）' : ''}`}
        </pre>
      )}
    </div>
  );
}

// ---- Zotero 取件面板（甲方案）：搜索 → 条目 → 附件 → 导入拆解 / 复制路径 ----
// 调用全部走本插件 route（iframe 边界），zotero_* 工具经 /api/tool/:name 转发；
// 导入 = 附件路径 → /api/import {pdfPath}（服务端 ResourceIO 读 + 提取 + 既有拆解链）。
function ZoteroBox({ submit, busy }: { submit: (body: Record<string, unknown>) => Promise<void>; busy: boolean }) {
  const [q, setQ] = useState('');
  const [items, setItems] = useState<any[] | null>(null);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<any[]>([]);
  const [msg, setMsg] = useState('');
  const [busy2, setBusy2] = useState(false);

  async function search() {
    setBusy2(true);
    setMsg('');
    setOpenKey(null);
    setAttachments([]);
    try {
      const r = await apiPost('/api/tool/zotero_search', { query: q, limit: 20 });
      if (r && Array.isArray(r.items)) {
        setItems(r.items);
        if (!r.items.length) setMsg('没有命中条目');
      } else {
        setMsg(r?.message || 'Zotero 查询失败');
      }
    } catch (e: any) {
      setMsg(String(e?.message || e));
    }
    setBusy2(false);
  }

  async function open(key: string) {
    if (openKey === key) {
      setOpenKey(null);
      return;
    }
    setBusy2(true);
    setMsg('');
    try {
      const r = await apiPost('/api/tool/zotero_item', { key });
      if (r && r.item) {
        setAttachments(r.attachments || []);
        setOpenKey(key);
      } else {
        setMsg(r?.message || '条目读取失败');
      }
    } catch (e: any) {
      setMsg(String(e?.message || e));
    }
    setBusy2(false);
  }

  async function pathOf(attachmentKey: string): Promise<string | null> {
    try {
      const r = await apiPost('/api/tool/zotero_attachment_path', { attachmentKey });
      if (r && r.path) return String(r.path);
      setMsg(r?.message || '附件路径解析失败');
    } catch (e: any) {
      setMsg(String(e?.message || e));
    }
    return null;
  }

  async function importAttachment(a: any) {
    const p = await pathOf(a.key);
    if (p) await submit({ pdfPath: p, filename: a.filename || '' });
  }

  async function copyPath(a: any) {
    const p = await pathOf(a.key);
    if (!p) return;
    try {
      await hana.clipboard.writeText(p);
      hana.toast.show({ message: '路径已复制', type: 'success' });
    } catch {
      setMsg(`复制失败，路径：${p}`);
    }
  }

  return (
    <div className="zbox">
      <p className="hint">需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。</p>
      <div className="import-row">
        <TextInput
          label="搜索（标题 / 作者 / 年份；留空 = 最近添加）"
          value={q}
          onChange={(e) => setQ(e.currentTarget.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') void search(); }}
        />
        <Button disabled={busy2 || busy} onClick={() => void search()}>搜索</Button>
      </div>
      {msg && <p className="err">{msg}</p>}
      {items && items.length > 0 && (
        <div className="zlist">
          {items.map((it: any) => (
            <div key={it.key} className="zitem">
              <div className="zitem-head" onClick={() => void open(it.key)}>
                <b>{it.title || '（无标题）'}</b>
                <span className="hint">{[it.creators, it.date, it.publicationTitle].filter(Boolean).join(' · ')}</span>
              </div>
              {openKey === it.key && (
                <div className="zattach">
                  {attachments.length === 0 && <p className="hint">无附件</p>}
                  {attachments.map((a: any) => (
                    <div key={a.key} className="zattach-row">
                      <span className="zattach-name">{a.filename || a.contentType || a.key}</span>
                      <span className="zattach-actions">
                        {/\.pdf$/i.test(a.filename || '') && (
                          <Button variant="primary" disabled={busy || busy2} onClick={() => void importAttachment(a)}>
                            导入拆解
                          </Button>
                        )}
                        <Button disabled={busy2} onClick={() => void copyPath(a)}>复制路径</Button>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- 首页（方案三四要素 + 导入入口）----
function HomeTab({ stats, go, onDone }: { stats: Stats | null; go: (z: Zone) => void; onDone: () => void }) {
  const todo = stats ? stats.queuePending + stats.failures : 0;
  // 未配置引导：库路径为空或占位串时，在首页给出一步到位的指引
  const [libState, setLibState] = useState<'loading' | 'unconfigured' | 'ok'>('loading');
  useEffect(() => {
    apiGet('/api/config')
      .then((r) => {
        const p = r?.config?.libraryPath ?? '';
        setLibState(p && !String(p).startsWith('NOT_CONFIGURED') ? 'ok' : 'unconfigured');
      })
      .catch(() => setLibState('loading'));
  }, []);
  return (
    <div className="home">
      <p className="tagline">把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。</p>
      {libState === 'unconfigured' && (
        <div className="home-banner">
          尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。
          <Button onClick={() => go('settings')}>前往设置</Button>
        </div>
      )}
      <ol className="steps">
        <li>把文献拖进面板一键拆解，或在对话里让我拆</li>
        <li>库里提出的疑问到「待办」处理，保证每条引文可回溯</li>
        <li>写论文时到「取用」检索同类模型，按出处引用</li>
      </ol>
      <div className="home-actions">
        <Button variant="primary" onClick={() => go('use')}>去取用</Button>
        <Button onClick={() => go('library')}>看结构库</Button>
        <Button disabled={!stats || todo === 0} onClick={() => go('todo')}>
          {todo > 0 ? `处理待办（${todo}）` : '暂无待办'}
        </Button>
      </div>
      <div className="statusbar">
        {stats ? `库内 ${stats.papers} 篇目 · ${stats.models} 模型 · 待办 ${todo} 条` : '统计中…'}
      </div>
      <ImportZone onDone={onDone} />
    </div>
  );
}

// ---- 待办 · 导入失败（失败进待办，可原样重试）----
function ImportFailTab({ tick, bump }: { tick: number; bump: () => void }) {
  const [items, setItems] = useState<any[]>([]);
  const [busyTs, setBusyTs] = useState<number | null>(null);
  const [msg, setMsg] = useState('');
  const load = useCallback(async () => {
    const r = await apiGet('/api/import/failures').catch(() => ({ items: [] }));
    setItems(r.items || []);
  }, []);
  useEffect(() => { void load(); }, [load, tick]);

  async function retry(item: any) {
    setBusyTs(item.ts);
    setMsg('');
    try {
      const start = await apiPost('/api/import', { text: item.text, fromTs: item.ts });
      if (start.started) {
        setMsg('重试中（约 1-3 分钟，可离开本页）…');
        const r = await pollImport();
        if (r.ok) {
          setMsg(`重试成功：${r.file}`);
          hana.toast.show({ message: '重试成功，已入库', type: 'success' });
        } else {
          setMsg(`仍失败：${r.message || '未知错误'}${r.failureTs ? '（已刷新记录）' : ''}`);
        }
      } else if (start.ok) {
        setMsg(`重试成功：${start.file}`);
        hana.toast.show({ message: '重试成功，已入库', type: 'success' });
      } else {
        setMsg(`仍失败：${start.message || '未知错误'}`);
      }
    } catch (e: any) {
      setMsg(`请求失败：${String(e?.message || e)}`);
    }
    setBusyTs(null);
    await load();
    bump();
  }

  async function dismiss(item: any) {
    await apiPost('/api/import/failures/dismiss', { ts: item.ts }).catch(() => null);
    await load();
    bump();
  }

  if (!items.length) return <EmptyState title="暂无导入失败" description="导入拆解失败的文献会落在这里，可原样重试。" />;
  return (
    <div>
      <p className="hint">拆解失败的导入（多为校验未过或模型异常）连原文一起存在这里，重试走同一条链路。</p>
      {items.map((it) => (
        <div key={it.ts} className="fail-item">
          <div className="fail-head">
            <b>{new Date(it.ts).toLocaleString()}</b>
            <span className="badge">{it.stage}</span>
            <span className="hint">尝试 {it.attempts} 次 · {(it.text || '').length} 字</span>
          </div>
          <div className="fail-msg">{it.message}</div>
          {(it.errors || []).slice(0, 4).map((e: any, i: number) => (
            <div key={i} className="hint">· {e.field}：{e.message}</div>
          ))}
          <div className="fail-actions">
            <Button variant="primary" disabled={busyTs === it.ts} onClick={() => void retry(it)}>
              {busyTs === it.ts ? '重试中…' : '重试'}
            </Button>
            <Button disabled={busyTs === it.ts} onClick={() => void dismiss(it)}>移除</Button>
          </div>
        </div>
      ))}
      {msg && <p className={msg.startsWith('重试成功') ? 'ok' : 'err'}>{msg}</p>}
    </div>
  );
}

function Panel() {
  const surface = document.getElementById('root')?.dataset.surface || 'page';
  // 默认落点 = 首页，每次打开回到首页（方案三）
  const [zone, setZone] = useState<Zone>('home');
  const [subMap, setSubMap] = useState<Record<Zone, string>>({
    home: '', use: 'search', library: 'browse', todo: 'score', settings: '',
  });
  const [tick, setTick] = useState(0);
  const [stats, setStats] = useState<Stats | null>(null);

  const bump = useCallback(() => setTick((t) => t + 1), []);
  const go = useCallback((z: Zone) => setZone(z), []);

  useEffect(() => {
    hana.ready();
    hana.ui.resize({ height: surface === 'widget' ? 420 : 760 });
  }, [surface]);

  useEffect(() => {
    let alive = true;
    void loadStats().then((s) => { if (alive) setStats(s); }).catch(() => { if (alive) setStats(null); });
    return () => { alive = false; };
  }, [tick, zone]);

  const sub = subMap[zone];
  const content = useMemo(() => {
    switch (zone) {
      case 'home': return <HomeTab stats={stats} go={go} onDone={bump} />;
      case 'use': return sub === 'models' ? <ModelsTab tick={tick} /> : <SearchTab />;
      case 'library':
        if (sub === 'compare') return <CompareTab tick={tick} />;
        if (sub === 'board') return <BoardTab tick={tick} />;
        return <BrowseTab tick={tick} />;
      case 'todo':
        if (sub === 'queue') return <QueueTab tick={tick} />;
        if (sub === 'import-fail') return <ImportFailTab tick={tick} bump={bump} />;
        return <ScoreTab />;
      case 'settings': return <SettingsTab />;
    }
  }, [zone, sub, tick, stats, go, bump]);

  const todoCount = stats ? stats.queuePending + stats.failures : 0;

  return (
    <HanaThemeProvider mode="inherit" className="plugin-panel">
      <CardShell
        title="论文结构建模"
        description="把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。"
        actions={<Button variant="ghost" onClick={bump}>刷新</Button>}
      >
        <nav className="tabs zones">
          {NAV.map((t) => (
            <button key={t.id} className={zone === t.id ? 'tab on' : 'tab'} onClick={() => setZone(t.id)}>
              {t.label}
              {t.id === 'todo' && todoCount > 0 && <span className="nav-badge">{todoCount}</span>}
            </button>
          ))}
        </nav>
        {zone !== 'home' && zone !== 'settings' && (
          <nav className="tabs sub">
            {SUBS[zone as ZoneEx].map((s) => (
              <button
                key={s.id}
                className={sub === s.id ? 'tab on' : 'tab'}
                onClick={() => setSubMap((p) => ({ ...p, [zone]: s.id }))}
              >
                {s.label}
              </button>
            ))}
          </nav>
        )}
        <div className="tab-body">{content}</div>
      </CardShell>
    </HanaThemeProvider>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<Panel />);
