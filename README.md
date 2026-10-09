# 论文结构建模（paper-structure-modeling）

把论文拆成可回溯的论证结构，沉淀为写作模型，写作时按意图检索取用。HanaAgent v2 App（manifestVersion 2）。

## 功能

- **导入拆解**：面板拖入 md / txt / pdf（或从 Zotero 取附件），经「同一份提示词 → 模型智能提取 → 同一道落格校验 → 同一写闸入库」生成单篇拆解记录，失败自动进待办可原样重试。
- **检索取用**：关键词物理命中排序收窄候选，交付时每条挂出处（篇目位置 + 原文引文）。
- **结构库**：标签库、类型库、闭包映射、锚点评分、写作模型，全部 Markdown，只增不改、可 grep。
- **通道**：工具暴露给模型（对话中直接调用）、HTTP 路由（面板数据面）、整页卡与速览功能面板（UI）。

## 运行环境

- HanaAgent ≥ 1.0.6-beta（manifest `minAppVersion`）。
- **PDF 解析**：主引擎 PyMuPDF sidecar —— 需要本机 `Python 3.9+` 并 `python -m pip install --user pypdfium2` 之外，安装：`python -m pip install --user pymupdf`（官方 PyPI 源）。sidecar 不可用时自动回退内置 unpdf（纯 JS，零外部依赖），功能不减。
- Python 解释器可用环境变量 `PSM_PYTHON` 覆盖（默认 PATH 上的 `python`）。

## 安装

1. 将整个 `paper-structure-modeling/` 目录拷贝到 `~/.hanako/apps/`（目录名必须等于 manifest `id`）。
2. 重启 Hana。
3. 市场 →「已安装」→ App 类目 →「待批准」区批准。确认卡会逐条列出声明的能力（工具暴露、模型调用、资源读写、子进程、剪贴板）与 localhost 网络白名单。

## 首次配置（必做）

结构库是每个使用者自己的数据目录，插件不预置个人路径：

1. 把包内 `library-template/` 整个拷到你的工作区任意位置（如 `我的研究/结构库/`）。
2. 插件设置页把 **libraryPath** 指向该目录并保存。
3. 未配置时所有结构库操作会失败并提示，属预期行为。

> **安全红线：结构库目录必须位于本仓库之外。** 库内含你拆解的文献原文引文与结构记录，若把库放在仓库目录内，这些内容会随 git 提交进入公开仓库。请始终配置仓库外的私人路径（如工作区）；发布与提交前，也请在 GitHub Desktop 的变更列表里确认没有出现陌生的中文数据文件。

`library-template/` 内含：单篇模板（`篇目/_模板.md`）、空表骨架（标签库、类型库、闭包映射表）、方法论文档（评分指引、维度清单）与各目录 README。**拆解链的提示词快照依赖其中四件文件（类型库、标签库、评分指引、维度清单），缺一则拆解质量降级。**

## 数据边界

拆解产出（篇目、锚点样本、写作模型）永远写在你配置的 libraryPath 下，属于你自己的数据，不随插件分发、不上传。本仓库与 `library-template/` 只含空骨架与方法说明。

## 开发

```bash
npm install          # 依赖（vendor/ 内 tgz 来自官方 hana-app-creator 分发，同官方 file: 用法）
npm run build:ui     # src/ → ui/assets/（panel.js / panel.css）
npm run typecheck    # tsc --noEmit
node dev-check.mjs   # 核心库断言（若含）
node <hana>/scripts/validate-app.mjs --dir . --json   # 官方静态校验
```

- **PDF 双引擎**：`pdf_extract.py`（PyMuPDF 块级栏排序，主）+ `lib/pdf-text.js` 内 unpdf（回退）。对照方法与样本见 `docs/spike/`。
- **路由**：`routes/api.js` 经 v2 兼容目录自动挂载到 `/api/apps/<id>/routes/`，具名导出 `register`。
- **技能**：`skills/structure-extraction/SKILL.md` 是对话拆解的方法论载体，同时是导入链提示词的唯一来源（单源约束，禁止出现第二份）。

## 来源说明

`vendor/sdk/` 内的 `@hana/*` 打包文件来自官方 `hana-app-creator` skill 附带的分发资产，与官方文档推荐的 `file:` 依赖用法一致，仅用于本地构建。

## 许可

本项目以 [MIT](LICENSE) 发布。第三方组件的许可与来源披露见 [NOTICE](NOTICE)，要点：

- `@hana/*` SDK：Apache-2.0（官方分发资产，随包携带）；react 与 unpdf：MIT（unpdf 打包产物内嵌 Mozilla pdf.js，Apache-2.0）。
- PDF 主引擎 PyMuPDF 为 AGPL-3.0 **外部依赖**：用户自行 pip 安装，本插件以独立子进程调用其公开**函数接口（纯本地内存处理，零网络）**，无链接无嵌入、不随仓库分发——不构成本项目的衍生作品，也不传染本许可；不安装时自动回退 MIT 的 unpdf 引擎。
