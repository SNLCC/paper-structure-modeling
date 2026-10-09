// 结构库路径。默认 workspace 固定子目录；插件设置（第八 tab，config.json）可覆盖，
// 改动重启 Hana 生效——模块级常量在进程启动时定，宿主 ESM 缓存不随配置刷新（开发文档教训节）。
import { loadConfig } from "./config.js";

// 开源默认不携带个人绝对路径：未配置时为占位串，任何读写会 ENOENT 且报错文本自带指引；
// 配置入口 = 插件设置页 libraryPath（config.json），配置真实路径后全部常数自动生效。
const ROOT = loadConfig().libraryPath || "NOT_CONFIGURED__set_libraryPath_in_plugin_settings";

export const STRUCT_ROOT = ROOT;
export const META_DIR = `${ROOT}/篇目`;
export const ANCHOR_DIR = `${ROOT}/锚点样本`;
export const MODEL_DIR = `${ROOT}/写作模型`;
export const TAG_LIB = `${ROOT}/标签库.md`;
export const TYPE_LIB = `${ROOT}/类型库.md`;
export const MAPPING_FILE = `${ROOT}/闭包映射表.md`;

export const ref = (path) => ({ kind: "local-file", path });
