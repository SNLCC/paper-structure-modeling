// 插件配置（plugin-data/config.json）唯一读写道：schema、默认值、校验都在这一处。
// 消费方：lib/paths.js（结构库路径）、extensions/push.js（标定词/频次）、routes/api.js（第八 tab 读写）。
// 默认 = 全静默：markers 空数组时通道三不向任何会话推送（打扰度优先，显式配置才启用）。
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

// v2 App 数据目录：app-data/{appId}（子进程 Permission Model 可写根，第 76 轮迁移）
export const DATA_DIR = path.join(homedir(), ".hanako", "app-data", "paper-structure-modeling");
export const CONFIG_FILE = path.join(DATA_DIR, "config.json");

const DEFAULTS = { markers: [], libraryPath: "", maxPerRun: 2 };

// 宽松归一（推送侧与读取用）：坏字段回默认值，不抛错。
export function parseConfig(raw) {
  let o = {};
  try {
    o = JSON.parse(raw);
  } catch {
    o = {};
  }
  if (!o || typeof o !== "object" || Array.isArray(o)) o = {};
  const markers = Array.isArray(o.markers)
    ? [...new Set(o.markers.filter((m) => typeof m === "string").map((m) => m.trim()).filter(Boolean))].slice(0, 20)
    : [...DEFAULTS.markers];
  const libraryPath = typeof o.libraryPath === "string" ? o.libraryPath.trim().slice(0, 300) : DEFAULTS.libraryPath;
  let maxPerRun = Number(o.maxPerRun);
  if (!Number.isFinite(maxPerRun)) maxPerRun = DEFAULTS.maxPerRun;
  maxPerRun = Math.max(1, Math.min(2, Math.round(maxPerRun)));
  return { markers, libraryPath, maxPerRun };
}

export function loadConfig() {
  try {
    return parseConfig(readFileSync(CONFIG_FILE, "utf8"));
  } catch {
    return parseConfig("{}");
  }
}

// 严格校验（API 写入用）：错报给用户，不静默改值。
export function validateConfig(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { ok: false, message: "配置须为对象" };
  const errors = [];
  if (input.markers !== undefined) {
    if (!Array.isArray(input.markers)) errors.push("标定词须为数组");
    else if (input.markers.some((m) => typeof m !== "string")) errors.push("标定词须为字符串");
    else if (input.markers.some((m) => m.trim().length > 40)) errors.push("单个标定词不超过 40 字");
    else if (input.markers.filter((m) => String(m).trim()).length > 20) errors.push("标定词不超过 20 个");
  }
  if (input.libraryPath !== undefined && typeof input.libraryPath !== "string") errors.push("结构库路径须为字符串");
  if (input.maxPerRun !== undefined) {
    const n = Number(input.maxPerRun);
    if (!Number.isInteger(n) || n < 1 || n > 2) errors.push("单次注入上限须为 1 或 2（设计上限 2）");
  }
  if (errors.length) return { ok: false, message: errors.join("；") };
  return { ok: true, value: parseConfig(JSON.stringify(input)) };
}

export function saveConfig(value) {
  const cfg = parseConfig(JSON.stringify(value));
  mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(CONFIG_FILE, JSON.stringify(cfg, null, 2) + "\n", "utf-8");
  return cfg;
}
