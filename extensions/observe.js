import { appendFileSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const LOG_DIR = path.join(homedir(), ".hanako", "plugin-data", "paper-structure-modeling");
const LOG_FILE = path.join(LOG_DIR, "observe.log");

function safeWrite(line) {
  try {
    mkdirSync(LOG_DIR, { recursive: true });
    appendFileSync(LOG_FILE, line + "\n", "utf-8");
  } catch {
    // 观测件自身失败绝不外抛
  }
}

function dump(value) {
  try {
    const raw = JSON.stringify(value, (key, v) => {
      if (typeof v === "string" && v.length > 2000) return v.slice(0, 2000) + "...[truncated]";
      return v;
    });
    if (raw === undefined) return String(value);
    return raw.length > 8000 ? raw.slice(0, 8000) + "...[cut]" : raw;
  } catch (e) {
    return "[unserializable: " + (e && e.message) + "] " + String(value);
  }
}

export default function (pi) {
  let api = [];
  try {
    const proto = Object.getPrototypeOf(pi);
    api = [...new Set([...Object.keys(pi), ...(proto ? Object.getOwnPropertyNames(proto) : [])])];
  } catch {
    api = ["<inspect-failed>"];
  }
  safeWrite(`[${new Date().toISOString()}] EXTENSION_LOADED pid=${process.pid} api=${dump(api)}`);

  const subscribe = (name) => {
    try {
      pi.on(name, async (event) => {
        safeWrite(`[${new Date().toISOString()}] ${name} ${dump(event)}`);
      });
      safeWrite(`[${new Date().toISOString()}] SUBSCRIBED ${name}`);
    } catch (e) {
      safeWrite(`[${new Date().toISOString()}] SUBSCRIBE_FAIL ${name}: ${e && e.message}`);
    }
  };

  // 感知面第二发：会话身份 + 本轮 prompt + 完整对话消息流
  // context/before_agent_start 为 transform 型：handler 无返回值即 passthrough，不干预管线
  for (const name of ["session_start", "before_agent_start", "context", "agent_start", "agent_end"]) {
    subscribe(name);
  }
}
