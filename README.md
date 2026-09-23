# 开发者免费资源大全 · free-for-dev 中文版

[ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev)（138k⭐）的中文翻译镜像：收录 **1300+** 对开发者有真实价值的免费服务（SaaS / PaaS / IaaS），每日自动同步上游，AI 增量翻译，并为每条服务标注**大陆可用性**。

**📖 在线阅读：<https://kael-odin.github.io/free-for-dev-zh/>**（支持搜索、暗色模式，也可直接阅读 [README.zh.md](README.zh.md)）

## 「大陆可用性」标注

原清单只告诉你"有什么免费"，这个镜像额外告诉你"在大陆用不用得了"——由 AI 在翻译时分级，可随时人工修正：

| 标记 | 含义 |
|---|---|
| ✅ | 大陆网络可直连访问与注册 |
| 🟡 | 可访问，但注册或关键功能有门槛（国际信用卡、Google 登录、部分资源需代理等） |
| 🔴 | 明确限制或封锁大陆 IP，基本离不开代理 |
| ❓ | 未知，待标注 |

认为标注不准？编辑 [`data/overrides.json`](data/overrides.json)（按服务名覆盖 `access` 或 `desc`），下次构建自动生效。

## 它是怎么运转的

无第三方依赖，纯 Node 内置模块，四个脚本一条流水线：

```
上游 README.md ──sync──▶ upstream/ 快照 + data/segments.json（行级分段，指纹为键）
                            │
                            ▶ translate（增量：上游改一个字只重翻那一条；描述+可用性一次产出）
                            │
                            ▶ build ──▶ README.zh.md + docs/README.zh.md ──push──▶ GitHub Pages
```

- 同步不走 git merge：上游快照整体替换，自有文件与上游零交集，**永不冲突**
- 翻译缓存按内容指纹复用；每日上游约 3 个 commit，增量成本趋近于零
- 翻译在本机计划任务（`free-for-dev-zh-daily-sync`）里执行——LLM 中转站封锁机房 IP，GitHub Actions 调不通（详见 `scripts/daily-sync.cmd`）
- 目录锚点用显式 `<a id>`，绕开 GitHub 与 docsify 中文 slug 规则不一致的坑

本地手动跑：`npm run sync && npm run translate && npm run build`。

> [!IMPORTANT]
> **署名与免责声明**：清单内容翻译自 [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev)（[free-for.dev](https://free-for.dev/)），原始清单由原作者与 1600+ 贡献者编纂维护，**版权归原作者所有**。原仓库未声明开源许可证，本项目仅为便于中文读者查阅的非商业翻译镜像，如版权方有异议将按要求处理。免费档信息以各官方页面为准，随时可能变动；「大陆可用性」标注由 AI 生成，仅供参考。本仓库与所列服务无任何关联。
>
> 本仓库自有的脚本与站点代码（`scripts/`、`docs/`）以 MIT 许可发布。
