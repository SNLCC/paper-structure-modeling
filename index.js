import { defineApp } from "./sdk/app-contract/server-client.js";
import * as applyTagMerge from "./tools/apply-tag-merge.js";
import * as commitAnchor from "./tools/commit-anchor.js";
import * as commitExtraction from "./tools/commit-extraction.js";
import * as commitModel from "./tools/commit-model.js";
import * as compareAnchorScore from "./tools/compare-anchor-score.js";
import * as normalizeMapping from "./tools/normalize-mapping.js";
import * as searchStructure from "./tools/search-structure.js";
import * as suggestTagMerges from "./tools/suggest-tag-merges.js";
import * as zoteroAttachmentPath from "./tools/zotero-attachment-path.js";
import * as zoteroItem from "./tools/zotero-item.js";
import * as zoteroSearch from "./tools/zotero-search.js";

export const name = "paper-structure-modeling";

// P1 迁移 11 个工具（create-note 为 v1 dev smoke 专用，暂不迁）。
// tools 仍是 v1 的 execute(input, ctx) 双参形状（v2 args 平铺即 input），
// deps 与 v1 plugin ctx 同形注入（resources/network/models/dataDir），函数体零改动。
const TOOLS = [
  applyTagMerge,
  commitAnchor,
  commitExtraction,
  commitModel,
  compareAnchorScore,
  normalizeMapping,
  searchStructure,
  suggestTagMerges,
  zoteroAttachmentPath,
  zoteroItem,
  zoteroSearch,
];

export default defineApp(async (sdk) => {
  const deps = {
    resources: sdk.resources,
    network: sdk.network,
    models: sdk.models,
    dataDir: sdk.dataDir,
    logger: sdk.logger,
  };
  for (const t of TOOLS) {
    // v2 宿主不加前缀，自带命名空间与 v1 全名一致（SKILL.md 引用不变）；
    // 与运行中的 v1 插件撞名，启用顺序 = 先禁 v1 再启用 v2。
    await sdk.tools.register({
      name: `paper-structure-modeling_${t.name}`,
      description: t.description,
      parameters: t.parameters,
      sessionPermission: t.sessionPermission,
      execute: (args) => t.execute(args, deps),
    });
  }
  await sdk.logger.info(`paper-structure-modeling v2 registered ${TOOLS.length} tools`);
});
