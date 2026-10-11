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

// 后台任务轮询（导入/建模共用；切页后由挂载恢复接管，各认各的 kind）
async function pollJob(statusPath: string, opts: { kind?: string; timeoutMs?: number } = {}): Promise<any> {
  const timeoutMs = opts.timeoutMs ?? 8 * 60 * 1000;
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    await new Promise((r) => setTimeout(r, 5000));
    const s = await apiGet(statusPath).catch(() => null);
    if (s && s.running === false && (!opts.kind || s.kind === opts.kind) && s.lastResult) return s.lastResult;
  }
  return { ok: false, stage: 'timeout', message: `等待超时（${Math.round(timeoutMs / 60000)} 分钟），任务可能仍在运行；稍后刷新查看结果。` };
}
async function pollImport(timeoutMs = 8 * 60 * 1000): Promise<any> {
  return pollJob('/api/import/status', { timeoutMs });
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
  const [proposing, setProposing] = useState(false);

  // 挂载恢复：提议中切页回来，接管轮询到收尾
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const s = await apiGet('/api/model/status').catch(() => null);
      if (cancelled || !s || !s.running || s.kind !== 'propose') return;
      setProposing(true);
      setMsg('模型提议进行中（接管切页前的任务）…');
      const fin = await pollJob('/api/model/status', { kind: 'propose', timeoutMs: 3 * 60 * 1000 });
      if (cancelled) return;
      setMsg(fin.ok ? `已入队 ${fin.queued?.length || 0} 对` : (fin.message || '未产出建议'));
      if (fin.ok) await load();
      setProposing(false);
    })();
    return () => { cancelled = true; };
  }, []);
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

  async function propose() {
    setProposing(true);
    setMsg('');
    try {
      const start = await apiPost('/api/model/propose-merges', {});
      if (!start.started) { setMsg(start.message || '发起失败'); setProposing(false); return; }
      const fin = await pollJob('/api/model/status', { kind: 'propose', timeoutMs: 3 * 60 * 1000 });
      if (fin.stage === 'timeout') { setMsg(fin.message); setProposing(false); return; }
      setMsg(fin.ok
        ? `已入队 ${fin.queued.length} 对：${fin.queued.join('；')}`
        : (fin.message || '未产出建议'));
      if (fin.ok) await load();
    } catch (e: any) {
      setMsg(`请求失败：${String(e?.message || e)}`);
    }
    setProposing(false);
  }

  async function cooccur() {
    const r = await apiPost('/api/tool/suggest_tag_merges', {});
    setMsg(r.ok
      ? (r.written ? `共现入队 ${r.written} 对` : '共现提示无新候选（语义相近的对请用模型提议）')
      : (r.message || JSON.stringify(r)));
    if (r.ok) await load();
  }

  const pending = rows.filter((r) => !r.decision);
  return (
    <div>
      <p className="hint">
        {pending.length > 0 && <b>{pending.length} 对待裁决　</b>}
        相近标签会进到这里，由你决定合并方向；裁决后库内归一，原始记录不动。
      </p>
      <div className="import-row">
        <Button variant="primary" disabled={proposing} onClick={() => void propose()}>
          {proposing ? '提议中…' : '模型提议疑似对'}
        </Button>
        <Button disabled={proposing} onClick={() => void cooccur()}>跑共现提示</Button>
        <span className="hint">提议与共现只负责入队；合并方向由你在下方卡片上裁决。</span>
      </div>
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

// ---- 通用 md 编辑器（篇目 / 写作模型手动修订；轻校验 + 尾部修订留痕，库主可自行删除留痕）----
function EditMd({ initial, savePath, onSaved }: { initial: string; savePath: string; onSaved: (newText: string) => void }) {
  const [text, setText] = useState(initial);
  const [err, setErr] = useState('');
  const [saving, setSaving] = useState(false);

  async function save() {
    if (!text.startsWith('#')) { setErr('首行须为 # 标题（防存入半截文件）'); return; }
    let out = text;
    if (out !== initial) {
      const stamp = new Date().toISOString().slice(0, 10);
      const line = /^> 人工修订：(.+)$/m;
      out = line.test(out) ? out.replace(line, `> 人工修订：${stamp}`) : out.trimEnd() + `\n\n> 人工修订：${stamp}\n`;
    }
    setSaving(true);
    setErr('');
    try {
      const r = await apiPost('/api/library/write-file', { path: savePath, content: out });
      if (r && r.ok) { hana.toast.show({ message: '已保存', type: 'success' }); onSaved(out); }
      else setErr(r?.message || '保存失败');
    } catch (e: any) {
      setErr(String(e?.message || e));
    }
    setSaving(false);
  }

  return (
    <div className="editor">
      {err && <p className="err">{err}</p>}
      <textarea className="editbox" value={text} onChange={(e) => setText(e.currentTarget.value)} rows={22} spellCheck={false} />
      <div className="import-row">
        <Button variant="primary" disabled={saving} onClick={() => void save()}>保存</Button>
        <span className="hint">首行须为 # 标题；改动会在尾部留一行修订日期（可自行删除）。改标签：编辑「- 标签：」行。</span>
      </div>
    </div>
  );
}

// ---- 3 篇目（一套导航：条目即按钮，显示题目 / 作者 · 年份）----
function BrowseTab({ tick }: { tick: number }) {
  const [items, setItems] = useState<{ id: string; title: string; meta: string }[]>([]);
  const [sel, setSel] = useState('');
  const [md, setMd] = useState('');
  const [editing, setEditing] = useState(false);
  const loadItems = useCallback(async () => {
    const fs = await listDir('篇目');
    const list = await Promise.all(
      fs.map(async (f) => {
        const { title, meta } = parseEntryHead(await readEntryHead(f), f.replace(/\.md$/, ''));
        return { id: f, title, meta: meta || f.replace(/\.md$/, '') };
      }),
    );
    setItems(list);
  }, []);
  useEffect(() => { void loadItems(); }, [loadItems, tick]);
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
      <div className="main">
        {sel && (
          <div className="import-row">
            <Button onClick={() => setEditing((v) => !v)}>{editing ? '返回预览' : '编辑本篇'}</Button>
          </div>
        )}
        {sel ? (
          editing ? (
            <EditMd
              initial={md}
              savePath={`篇目/${sel}`}
              onSaved={(t) => { setMd(t); setEditing(false); void loadItems(); }}
            />
          ) : (
            <Doc md={md} />
          )
        ) : (
          <p className="hint">左侧选篇查看（每条登记都带位置与原文引文）。</p>
        )}
      </div>
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
  const [histOpen, setHistOpen] = useState<Record<string, boolean>>({});
  const [editingModel, setEditingModel] = useState(false);

  // 挂载恢复：建模中切页回来，接管轮询到收尾
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const s = await apiGet('/api/model/status').catch(() => null);
      if (cancelled || !s || !s.running || s.kind !== 'generate') return;
      setBusy(true);
      setMsg('建模进行中（接管切页前的任务）…');
      const fin = await pollJob('/api/model/status', { kind: 'generate' });
      if (cancelled) return;
      setMsg(fin.stage === 'timeout' ? fin.message : (fin.ok ? '完成：见下方分组' : (fin.message || '未生成')));
      if (fin.ok) { hana.toast.show({ message: '写作模型已生成/更新', type: 'success' }); load(); }
      setBusy(false);
    })();
    return () => { cancelled = true; };
  }, []);
  // 按类型分组：默认最新在头，历史折叠（顺带避开 v10 字典序排在 v2 前的坑）
  const groups = useMemo(() => {
    const map = new Map<string, { file: string; v: number }[]>();
    for (const f of files) {
      const m = /^(.+)-写作模型-v(\d+)\.md$/.exec(f);
      if (!m) continue;
      if (!map.has(m[1])) map.set(m[1], []);
      map.get(m[1])!.push({ file: f, v: Number(m[2]) });
    }
    return [...map.entries()].map(([type, list]) => {
      list.sort((a, b) => a.v - b.v);
      return { type, latest: list[list.length - 1], history: list.slice(0, -1).reverse() };
    });
  }, [files]);
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
      const fin = await pollJob('/api/model/status', { kind: 'generate' });
      if (fin.stage === 'timeout') { setMsg(fin.message); setBusy(false); return; }
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
      {!groups.length ? (
        <EmptyState title="暂无写作模型" description="点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" />
      ) : (
        <>
          {groups.map((g) => (
            <div key={g.type} className="model-group">
              <div className="model-group-head">
                <span className="model-grouptitle">{g.type}</span>
                <button
                  className={sel === g.latest.file ? 'filebtn on' : 'filebtn'}
                  onClick={() => setSel(g.latest.file)}
                >
                  v{g.latest.v}（最新）
                </button>
                {g.history.length > 0 && (
                  <button className="linkbtn" onClick={() => setHistOpen((p) => ({ ...p, [g.type]: !p[g.type] }))}>
                    {histOpen[g.type] ? '收起历史' : `历史 ${g.history.length} 版`}
                  </button>
                )}
              </div>
              {histOpen[g.type] && (
                <div className="filebtns">
                  {g.history.map((h) => (
                    <button key={h.file} className={sel === h.file ? 'filebtn on' : 'filebtn'} onClick={() => setSel(h.file)}>
                      v{h.v}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {sel ? (
            editingModel ? (
              <EditMd
                initial={md}
                savePath={`写作模型/${sel}`}
                onSaved={(t) => { setMd(t); setEditingModel(false); load(); }}
              />
            ) : (
              <>
                <div className="import-row">
                  <Button onClick={() => setEditingModel(true)}>编辑本模型</Button>
                </div>
                <Doc md={md} />
              </>
            )
          ) : (
            <p className="hint">选择版本查看（每类默认最新；旧版折叠在「历史」里可对照）。</p>
          )}
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

  // 挂载恢复：拆解中切页回来，接管轮询到收尾（不丢“拆解中”状态）
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const s = await apiGet('/api/import/status').catch(() => null);
      if (cancelled || !s || !s.running) return;
      setBusy(true);
      setResult({ ok: true, stage: 'running', message: '拆解进行中（接管切页前的任务）…' });
      const fin = await pollImport();
      if (cancelled) return;
      setResult(fin);
      if (fin.ok) { hana.toast.show({ message: '拆解完成，已入库', type: 'success' }); onDone(); }
      else if (fin.failureTs) { hana.toast.show({ message: '拆解失败，已记入待办', type: 'error' }); onDone(); }
      setBusy(false);
    })();
    return () => { cancelled = true; };
  }, []);

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
      {showZotero && <ZoteroBox />}
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

// ---- Zotero 取件面板（M3 批量队列）：分类树/搜索双模式多选 → 队列串行拆解 ----
// 附件解析在入队时完成（fail fast）；队列由后端有限并发执行，3 秒轮询；原生拖拽排序。
type ZItem = { key: string; title: string; authors: string; year: string; itemType: string };
type CollNode = { key: string; name: string; children: CollNode[] };
type QItem = { key: number; label: string; status: string; attempts: number; message: string; file: string };

const QSTATUS: Record<string, string> = {
  pending: '排队', running: '运行中', stopping: '停止中', done: '✓ 完成', failed: '✗ 失败', cancelled: '■ 已停止',
};

function CollTree({ nodes, active, onPick, depth = 0 }: { nodes: CollNode[]; active: string | null; onPick: (k: string, n: string) => void; depth?: number }) {
  return (
    <>
      {nodes.map((n) => (
        <div key={n.key}>
          <button
            className={active === n.key ? 'collbtn on' : 'collbtn'}
            style={{ paddingLeft: 8 + depth * 14 }}
            onClick={() => onPick(n.key, n.name)}
          >
            {n.name}
          </button>
          {n.children.length > 0 && <CollTree nodes={n.children} active={active} onPick={onPick} depth={depth + 1} />}
        </div>
      ))}
    </>
  );
}

function ZoteroBox() {
  const [colls, setColls] = useState<CollNode[]>([]);
  const [collKey, setCollKey] = useState<string | null>(null);
  const [cItems, setCItems] = useState<ZItem[]>([]);
  const [q, setQ] = useState('');
  const [mode, setMode] = useState<'collection' | 'search'>('collection');
  const [sItems, setSItems] = useState<ZItem[] | null>(null);
  const [sel, setSel] = useState<Set<string>>(new Set());
  const [queue, setQueue] = useState<QItem[]>([]);
  const [snap, setSnap] = useState<any>(null);
  const [msg, setMsg] = useState('');
  const [busy2, setBusy2] = useState(false);
  const [dragKey, setDragKey] = useState<number | null>(null);

  // 分类树（挂载一次）
  useEffect(() => {
    void apiGet('/api/zotero/collections').then((r) => {
      if (r && r.ok) setColls(r.collections || []);
      else setMsg(r?.message || '分类读取失败（Zotero 桌面端在运行吗？）');
    }).catch(() => setMsg('分类读取失败'));
  }, []);

  // 队列轮询（3 秒；卸载停）
  useEffect(() => {
    let alive = true;
    const tickQ = () =>
      void apiGet('/api/import/queue').then((s) => {
        if (alive && s && s.ok) { setQueue(s.items || []); setSnap(s); }
      }).catch(() => {});
    tickQ();
    const t = setInterval(tickQ, 3000);
    return () => { alive = false; clearInterval(t); };
  }, []);

  async function openColl(key: string, name: string) {
    setMode('collection'); setCollKey(key); setSel(new Set());
    setBusy2(true); setMsg(`加载「${name}」…`);
    try {
      const r = await apiGet(`/api/zotero/collection-items?key=${encodeURIComponent(key)}`);
      if (r && r.ok) {
        setCItems(r.items || []);
        if (r.truncated) setMsg(`该分类较大，列表显示前 ${r.items.length} 条文献；更多可用搜索收窄`);
        else if (!(r.items || []).length) setMsg('该分类没有可导入的文献条目');
        else setMsg('');
      } else setMsg(r?.message || '条目读取失败');
    } catch (e: any) { setMsg(String(e?.message || e)); }
    setBusy2(false);
  }

  async function goSearch() {
    setMode('search'); setCollKey(null); setSel(new Set());
    setBusy2(true); setMsg('');
    try {
      const r = await apiPost('/api/tool/zotero_search', { query: q, limit: 50 });
      if (r && Array.isArray(r.items)) {
        setSItems(r.items.map((it: any) => ({
          key: it.key, title: it.title, authors: it.creators,
          year: String(it.date || '').slice(0, 4), itemType: it.itemType,
        })));
        if (!r.items.length) setMsg('没有命中条目');
      } else setMsg(r?.message || 'Zotero 查询失败');
    } catch (e: any) { setMsg(String(e?.message || e)); }
    setBusy2(false);
  }

  const list: ZItem[] = mode === 'collection' ? cItems : (sItems || []);

  function toggle(k: string) {
    setSel((p) => { const n = new Set(p); if (n.has(k)) n.delete(k); else n.add(k); return n; });
  }
  function toggleAll() {
    setSel((p) => (p.size >= list.length && list.length > 0 ? new Set() : new Set(list.map((i) => i.key))));
  }

  // 加入队列：逐条解析附件（fail fast，缺附件当场报告不入队）
  async function enqueueSelected() {
    const chosen = list.filter((i) => sel.has(i.key));
    if (!chosen.length) { setMsg('先勾选条目'); return; }
    setBusy2(true);
    const items: any[] = [];
    const missing: string[] = [];
    for (let i = 0; i < chosen.length; i++) {
      const it = chosen[i];
      setMsg(`解析附件 ${i + 1}/${chosen.length}…`);
      try {
        const r = await apiPost('/api/tool/zotero_item', { key: it.key });
        const att = r && Array.isArray(r.attachments) && r.attachments[0] ? r.attachments[0] : null;
        if (!att) { missing.push(it.title || it.key); continue; }
        const p = await apiPost('/api/tool/zotero_attachment_path', { attachmentKey: att.key || att });
        if (p && p.path) items.push({ label: it.title || it.key, pdfPath: String(p.path), source: `zotero:${it.key}` });
        else missing.push(it.title || it.key);
      } catch { missing.push(it.title || it.key); }
    }
    if (items.length) {
      const r = await apiPost('/api/import/enqueue', { items });
      if (r && r.ok) {
        setMsg(`已入队 ${r.queued} 篇${missing.length ? `；${missing.length} 篇缺附件未入队：${missing.slice(0, 2).join('、')}${missing.length > 2 ? '…' : ''}` : ''}`);
        setSel(new Set());
        hana.toast.show({ message: `已入队 ${r.queued} 篇，队列开始执行`, type: 'success' });
      } else setMsg(r?.message || '入队失败');
    } else {
      setMsg(`没有可入队条目${missing.length ? `（${missing.length} 篇缺附件）` : ''}`);
    }
    setBusy2(false);
  }

  async function refreshQ() {
    const s = await apiGet('/api/import/queue').catch(() => null);
    if (s && s.ok) { setQueue(s.items || []); setSnap(s); }
  }

  async function qa(action: string, key?: number, extra: Record<string, unknown> = {}) {
    const r = await apiPost('/api/import/queue-action', key !== undefined ? { action, key, ...extra } : { action });
    if (r && r.ok) { setSnap(r.snapshot); void refreshQ(); return true; }
    setMsg(r?.message || '操作失败');
    return false;
  }

  async function copyPathFor(itemKey: string) {
    setBusy2(true);
    try {
      const r = await apiPost('/api/tool/zotero_item', { key: itemKey });
      const att = r && Array.isArray(r.attachments) && r.attachments[0] ? r.attachments[0] : null;
      if (!att) { setMsg('该条目无附件'); setBusy2(false); return; }
      const p = await apiPost('/api/tool/zotero_attachment_path', { attachmentKey: att.key || att });
      if (p && p.path) {
        await hana.clipboard.writeText(String(p.path));
        hana.toast.show({ message: '路径已复制', type: 'success' });
      } else setMsg(p?.message || '附件路径解析失败');
    } catch (e: any) { setMsg(String(e?.message || e)); }
    setBusy2(false);
  }

  // 拖拽排序（原生 HTML5）：拖到目标项之前
  function onDrop(targetKey: number) {
    const from = dragKey;
    setDragKey(null);
    if (from === null || from === targetKey) return;
    void qa('reorder', from, { before: targetKey });
  }

  const total = snap?.total ?? queue.length;
  const finished = (snap?.done ?? 0) + (snap?.failed ?? 0) + (snap?.cancelled ?? 0);

  return (
    <div className="zbox">
      <p className="hint">需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。勾选后加入队列，串行拆解（并发 1，随时可停）。</p>
      <div className="import-row">
        <TextInput
          label="搜索（标题 / 作者 / 年份）"
          value={q}
          onChange={(e) => setQ(e.currentTarget.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') void goSearch(); }}
        />
        <Button disabled={busy2} onClick={() => void goSearch()}>搜索</Button>
        <Button variant="primary" disabled={busy2 || sel.size === 0} onClick={() => void enqueueSelected()}>
          加入队列（{sel.size}）
        </Button>
        <Button disabled={busy2 || list.length === 0} onClick={toggleAll}>
          {sel.size >= list.length && list.length > 0 ? '取消全选' : '全选本页'}
        </Button>
      </div>
      {msg && <p className="hint">{msg}</p>}
      <div className="zgrid">
        <div className="ztree">
          <div
            className={mode === 'collection' && !collKey ? 'collbtn on' : 'collbtn'}
            onClick={() => { setMode('collection'); setSel(new Set()); }}
          >
            按分类浏览
          </div>
          <CollTree nodes={colls} active={collKey} onPick={(k, n) => void openColl(k, n)} />
        </div>
        <div className="zlist zlistpick">
          {list.length === 0 && (
            <p className="hint">{mode === 'collection' ? '选择左侧分类加载条目，或用搜索。' : '搜索无结果。'}</p>
          )}
          {list.map((it) => (
            <label key={it.key} className="zrow">
              <input type="checkbox" checked={sel.has(it.key)} onChange={() => toggle(it.key)} />
              <span className="zrow-main">
                <b>{it.title || '（无题名）'}</b>
                <span className="hint">{[it.authors, it.year].filter(Boolean).join(' · ')}</span>
              </span>
              <button
                className="linkbtn"
                onClick={(e) => { e.preventDefault(); void copyPathFor(it.key); }}
              >
                路径
              </button>
            </label>
          ))}
        </div>
      </div>

      <div className="qhead">
        <b>导入队列</b>
        <span className="hint">
          {total ? `${finished}/${total} 完成 · 运行 ${(snap?.running ?? 0) + (snap?.stopping ?? 0)} · 排队 ${snap?.pending ?? 0}${snap?.paused ? ' · 已暂停' : ''}` : '队列为空'}
        </span>
        <span className="qhead-actions">
          <Button disabled={!snap || total === 0} onClick={() => void qa(snap?.paused ? 'resume' : 'pause')}>
            {snap?.paused ? '继续' : '暂停'}
          </Button>
          <Button disabled={!snap || ((snap?.done ?? 0) + (snap?.cancelled ?? 0)) === 0} onClick={() => void qa('clear-done')}>
            清理已完成
          </Button>
        </span>
      </div>
      {queue.length === 0 ? (
        <p className="hint">勾选文献点「加入队列」开始批量导入；运行中可继续追加，支持单篇停止/开始与拖拽排序。</p>
      ) : (
        <div className="qlist">
          {queue.map((it) => (
            <div
              key={it.key}
              className={dragKey === it.key ? 'qrow dragging' : 'qrow'}
              draggable={it.status === 'pending'}
              onDragStart={() => setDragKey(it.key)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(it.key)}
              onDragEnd={() => setDragKey(null)}
            >
              <span className="qhandle" title="拖拽排序（仅排队中）">☰</span>
              <span className="qstatus">{QSTATUS[it.status] || it.status}</span>
              <span className="qlabel" title={it.message || it.file || ''}>{it.label}</span>
              {(it.status === 'pending' || it.status === 'running') && (
                <Button onClick={() => void qa('cancel', it.key)}>停止</Button>
              )}
              {it.status === 'stopping' && <span className="hint">停止中…</span>}
              {(it.status === 'cancelled' || it.status === 'failed') && (
                <Button onClick={() => void qa('start', it.key)}>开始</Button>
              )}
              {it.status !== 'running' && it.status !== 'stopping' && (
                <Button onClick={() => void qa('remove', it.key)}>移除</Button>
              )}
              {it.status === 'failed' && it.message && <span className="qerr">{it.message}</span>}
              {it.status === 'done' && <span className="qok">已入库</span>}
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

  // 挂载恢复：重试中切页回来，接管轮询到收尾
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const s = await apiGet('/api/import/status').catch(() => null);
      if (cancelled || !s || !s.running) return;
      setMsg('有导入任务进行中，等待结果…');
      const fin = await pollImport();
      if (cancelled) return;
      setMsg(fin.ok ? `完成：${fin.file}` : `仍失败：${fin.message || '未知错误'}${fin.failureTs ? '（已刷新记录）' : ''}`);
      if (fin.ok || fin.failureTs) { await load(); bump(); }
    })();
    return () => { cancelled = true; };
  }, []);

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
      <p className="hint">
        {items.length > 0 && <b>共 {items.length} 条待处理　</b>}
        拆解失败的导入（多为校验未过或模型异常）连原文一起存在这里，重试走同一条链路。
      </p>
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
                {zone === 'todo' && s.id === 'import-fail' && (stats?.failures ?? 0) > 0 && (
                  <span className="nav-badge">{stats?.failures ?? 0}</span>
                )}
                {zone === 'todo' && s.id === 'queue' && (stats?.queuePending ?? 0) > 0 && (
                  <span className="nav-badge">{stats?.queuePending ?? 0}</span>
                )}
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
