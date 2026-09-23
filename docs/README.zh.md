# 开发者免费资源大全 · free-for.dev 中文版

> [!IMPORTANT]
> **署名与免责声明**：本清单翻译自 [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev)（[free-for.dev](https://free-for.dev/)）。原始清单由原作者与 1600+ 贡献者编纂维护，版权归原作者所有；原仓库未声明开源许可证，本项目仅为便于中文读者查阅的非商业翻译镜像，如版权方有异议将按要求处理。本站与所列服务无任何关联，免费档信息以各官方页面为准，随时可能变动。

**上游同步**：2026-09-23T20:34:44.347Z · 上游版本 `unknown` · 每日自动同步

**「大陆可用性」标注**由 AI 辅助生成，仅供参考，欢迎提 PR 修正（编辑 `data/overrides.json`）：

| 标记 | 含义 |
|---|---|
| ✅ | 大陆网络可直连访问与注册 |
| 🟡 | 可访问，但注册或关键功能有门槛（国际信用卡、Google 登录、部分资源需代理等） |
| 🔴 | 明确限制或封锁大陆 IP，基本离不开代理 |
| ❓ | 未知，待标注 |


开发者和开源作者现在有许多提供免费套餐的服务，但要找齐所有这些服务并做出明智决策需要花费不少时间。

这是一份提供免费开发者套餐的软件（SaaS、PaaS、IaaS 等）及其他服务的列表。

本列表的范围仅限于基础架构开发者（系统管理员、DevOps 从业者等）可能觉得有用的内容。我们喜欢所有免费服务，但最好保持主题相关。有时界限比较模糊，因此这带有主观色彩；如果我没有接受你的贡献，请不要感到被冒犯。

本列表源自 1600 多人提交的 Pull Request、评审、想法和工作成果。你也可以通过提交 [Pull Requests](https://github.com/ripienaar/free-for-dev) 来帮助添加更多服务，或移除那些服务内容已变更或已停用的条目。

[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本列表仅收录“即服务”（as-a-Service）类产品，不收录自托管软件。要符合收录条件，服务必须提供免费套餐，而不仅仅是免费试用。如果免费套餐按时间划分，则必须至少持续一年。我们还会从安全角度考量免费套餐，因此 SSO 是可以的，但我不会接受将 TLS 限制为仅付费套餐可用的服务。

# 目录


  * [主要云服务商的永久免费额度限制](#sec-0)
  * [云管理解决方案](#sec-1)
  * [分析、事件与统计](#sec-2)
  * [API、数据与机器学习](#sec-3)
  * [制品仓库](#sec-4)
  * [BaaS](#sec-5)
  * [低代码平台](#sec-6)
  * [CDN 与防护](#sec-7)
  * [CI 与 CD](#sec-8)
  * [CMS](#sec-9)
  * [代码生成](#sec-10)
  * [代码质量](#sec-11)
  * [代码搜索与浏览](#sec-12)
  * [崩溃与异常处理](#sec-13)
  * [地图数据可视化](#sec-14)
  * [托管数据服务](#sec-15)
  * [设计与 UI](#sec-16)
  * [开发者博客网站](#sec-17)
  * [DNS](#sec-18)
  * [Docker 相关](#sec-19)
  * [域名](#sec-20)
  * [教育与职业发展](#sec-21)
  * [邮件](#sec-22)
  * [功能开关管理平台](#sec-23)
  * [字体](#sec-24)
  * [表单](#sec-25)
  * [生成式 AI](#sec-26)
  * [IaaS](#sec-27)
  * [IDE 与代码编辑](#sec-28)
  * [国际手机号码验证 API 与 SDK](#sec-29)
  * [问题跟踪与项目管理](#sec-30)
  * [日志管理](#sec-31)
  * [移动应用分发与反馈](#sec-32)
  * [管理系统](#sec-33)
  * [消息传递与流处理](#sec-34)
  * [杂项](#sec-35)
  * [监控](#sec-36)
  * [PaaS](#sec-37)
  * [包构建系统](#sec-38)
  * [支付与账单集成](#sec-39)
  * [隐私管理](#sec-40)
  * [截图 API](#sec-41)
  * [Flutter 相关及无需 Mac 构建 iOS 应用](#sec-42)
  * [搜索](#sec-43)
  * [安全与 PKI](#sec-44)
  * [身份验证、授权与用户管理](#sec-45)
  * [源代码仓库](#sec-46)
  * [存储与媒体处理](#sec-47)
  * [隧道、WebRTC、Web Socket 服务器及其他路由器](#sec-48)
  * [测试](#sec-49)
  * [团队与协作工具](#sec-50)
  * [翻译管理](#sec-51)
  * [访客会话录制](#sec-52)
  * [虚拟主机](#sec-53)
  * [评论平台](#sec-54)
  * [远程桌面工具](#sec-55)
  * [其他免费资源](#sec-56)

<a id="sec-0"></a>
## 主要云服务提供商

  * [Google Cloud Platform](https://cloud.google.com) 🟡
    - App Engine - 每天 28 小时前端实例，9 小时后端实例
    - Cloud Firestore - 1GB 存储，每天 50,000 次读取、20,000 次写入、20,000 次删除
    - Compute Engine - 1 台非抢占式 e2-micro 实例、30GB HDD、5GB 快照存储（仅限特定区域）、每月从北美到所有区域目的地（不含中国和澳大利亚）的 1GB 网络出站流量
    - Cloud Storage - 5GB 存储，1GB 网络出站流量
    - Cloud Shell - 基于网页的 Linux shell/主 IDE，附带 5GB 持久化存储。每周限 60 小时
    - Cloud Pub/Sub - 每月 10GB 消息量
    - Cloud Functions - 每月 200 万次调用（包括后台调用和 HTTP 调用）
    - Cloud Run - 每月 200 万次请求、360,000 GB-秒内存、180,000 vCPU-秒计算时间、每月 1 GB 从北美区域发出的网络出站流量
    - Google Kubernetes Engine - 单个区域级集群免收集群管理费，每个用户节点按标准 Compute Engine 价格计费
    - BigQuery - 每月 1 TB 查询量、每月 10 GB 存储空间
    - Cloud Build - 每天 120 构建分钟
    * [Google Colab](https://colab.research.google.com/) - 免费的 Jupyter Notebooks 开发环境。 ❓
    * [Kaggle](https://www.kaggle.com/) - 提供 4 核 CPU、30 GB 内存的 Jupyter Notebooks 计算环境，无每周使用量限制。完成手机号验证后，可免费添加 1 块 Nvidia Tesla P100 GPU 或 2 块 Nvidia Tesla T4 GPU，每周使用限额为 30 GPU 小时。完成身份验证后，可免费使用 1 台配备 96 核 CPU 和 330 GB 内存的 TPU v3-8，每周使用限额为 20 小时。详情请查看 [技术规格](https://www.kaggle.com/docs/notebooks#technical-specifications)。 🟡
    * [ChromeRemoteDesktop](https://remotedesktop.google.com/) - 免费的远程桌面应用，可连接的设备数量几乎没有限制，隶属于 Google，因此需要 Google 账号。 🔴
    * [Google AI Studio](https://aistudio.google.com/) - 免费使用 Gemini 3.5 Flash、Gemini 3 Flash 和 Gemma 4 模型。Flash 的免费额度为每分钟 5 次请求、每天 20 次请求、每分钟 250k 输入 token；Gemma 4 的免费额度为每分钟 30 次请求、每天 14.4k 次请求，但每分钟只有 16k 输入 token。 🔴
    - 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com) 🟡
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月 1TB 出口流量、10M 次 HTTP 请求及 2M 次 Function 调用 ✅
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10 个自定义指标和告警，1M 次 API 请求，5GB 日志数据摄取量和 5GB 日志数据归档量 ❓
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月 100 分钟构建时间 ❓
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5 个活跃用户，每账户 5k 个仓库，每月 50GB 存储空间和 10K 次请求 ❓
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月 1 条活跃流水线 ❓
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL 数据库 🟡
    * [Lambda](https://aws.amazon.com/lambda/) - 每月 100 万次请求 ❓
    * [SNS](https://aws.amazon.com/sns/) - 每月 100 万次发布 ❓
    * [SES](https://aws.amazon.com/ses/) - 每月 3.000 条消息（6 个月） ❓
    * [SQS](https://aws.amazon.com/sqs/) - 100 万次消息队列请求 🟡
    - 完整详细列表 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com) 🟡
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10 个 Web、移动端或 API 应用（每天 60 CPU 分钟） 🟡
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月 100 万次请求 ❓
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 助力快速、轻松、精简地搭建开发测试环境 🟡
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000 个对象 ❓
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 每月 50,000 名存储用户 ❓
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5 名活跃用户，私有 Git 仓库数量不限 🟡
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) - 开源项目可在 Linux、macOS 和 Windows 上免费使用 10 个并行作业，时长不限 🟡
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天 8,000 条消息 🟡
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 750 小时、15GB 数据处理量和 5 条规则（12 个月） 🟡
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100 万条推送通知 🟡
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB 出站流量（12 个月） 🟡
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB 存储和 1000 RU 的预配吞吐量 🟡
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) - 构建、部署并托管静态应用和 serverless 函数，免费提供 SSL、身份验证/授权（Authentication/Authorization）和自定义域名 🟡
    * [Storage](https://azure.microsoft.com/services/storage/) - 100GB LRS 事务（Azure Files）、5GB Blob 存储、10GB LRS 归档存储、2x64GB SSD（12 个月） 🟡
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（Computer Vision、Translator、Face detection、Bots 等），免费层包含有限的事务量 🟡
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于 AI 的搜索与索引服务，10,000 个文档以内免费 🟡
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管 Kubernetes 服务，集群管理免费 🟡
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月 100K 次操作 ❓
    * [Service Bus](https://azure.microsoft.com/products/service-bus/) - 750 小时和 1300 万次操作，Standard 层基础单位（12 个月） 🟡
    - 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/) 🟡
    - 计算
       - 2 台基于 AMD 的 Compute 虚拟机，每台配备 1/8 OCPU 和 1 GB 内存
       - 2 个基于 Arm 的 Ampere A1 核心和 12 GB 内存，可用作 1 台虚拟机或最多拆分为 2 台虚拟机
       * [deemed idle](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances) - 输入内容不完整，仅包含链接片段 urces.htm#compute__idleinstances)，无法确定对应的服务与描述。 ❓
    - 块存储卷 - 2 个卷，总计 200 GB（用于计算）
    - 对象存储 - 10 GB
    - 负载均衡器 - 1 个实例，带宽 10 Mbps
    - 数据库 - 2 个数据库，每个 20 GB
    - 监控 - 5 亿个摄取数据点，10 亿个检索数据点
    - 带宽 - 每月 10 TB 出站流量，基于 x64 的虚拟机速度限制为 50 Mbps，基于 ARM 的虚拟机为 500 Mbps * 核心数
    - 公网 IP - 2 个 IPv4 用于虚拟机，1 个 IPv4 用于负载均衡器
    - 通知 - 每月 100 万个交付选项，每月发送 1000 封电子邮件
    - 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/) 🟡
    - Cloudant 数据库 - 1 GB 数据存储
    - Db2 数据库 - 100MB 数据存储
    - API Connect - 每月 50,000 次 API 调用
    - 可用性监控 - 每月 300 万个数据点
    - 日志分析 - 每日 500MB 日志
    - 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/) ✅
    * [Application Services](https://www.cloudflare.com/plans/) - 为不限数量的域名提供免费 DNS、DDoS 防护、CDN 及免费 SSL、防火墙规则与页面规则、WAF、Bot 缓解、免费不限量的 Rate Limiting（每个域名 1 条规则）、分析统计、邮件转发 ✅
    * [Zero Trust & SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多 50 名用户，24 小时活动日志记录，3 个网络位置 ❓
    * [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) - 你可以通过隧道把本地运行的 HTTP 端口暴露到 trycloudflare.com 上的随机子域名，使用 [Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/)，无需注册账号。更多功能（TCP 隧道、负载均衡、VPN）见 [Zero Trust](https://www.cloudflare.com/products/zero-trust/) Free Plan。 ✅
    * [Workers](https://developers.cloudflare.com/workers/) - 在 Cloudflare 的全球网络上免费部署 serverless 代码——每天 10 万次请求。 ✅
    * [Workers KV](https://developers.cloudflare.com/kv) - 每天 10 万次读取请求、1000 次写入请求、1000 次删除请求、1000 次列出（list）请求，1 GB 存储空间 ✅
    * [R2](https://developers.cloudflare.com/r2/) - 每月 10 GB，每月 100 万次 Class A 操作，每月 1000 万次 Class B 操作 ✅
    * [D1](https://developers.cloudflare.com/d1/) - 每天读取 500 万行，每天写入 10 万行，1 GB 存储 ✅
    * [Pages](https://developers.cloudflare.com/pages/) - 在 Cloudflare 快速、安全的全球网络上开发和部署你的 Web 应用。每月 500 次构建、100 个自定义域名、集成 SSL、不限可访问席位、不限预览部署，并可通过 Cloudflare Workers 集成获得全栈能力。 ✅
    * [Queues](https://developers.cloudflare.com/queues/) - 每月 100 万次操作 ✅
    * [TURN](https://developers.cloudflare.com/calls/turn/) - 每月 1TB 免费出站流量。 ❓

  * [Zoho](https://www.zoho.com) - 以电子邮件服务起家，如今提供一整套服务，其中部分服务有免费套餐。以下是提供免费套餐的服务列表： ✅
    * [Catalyst by Zoho](https://catalyst.zoho.com) - PaaS/全栈云平台，提供较为慷慨的[免费套餐](https://catalyst.zoho.com/free-tier.html) ✅
    * [Zoho Apptics](https://www.zoho.com/apptics/) - 统一且可指导行动的产品分析工具，用于监控移动、Web 与桌面应用的性能、分析用户行为并收集反馈，提供慷慨的 Free Forever（永久免费）套餐。 ✅
    * [Email](https://zoho.com/mail) - 5 个用户免费。每用户 5GB 存储与 25 MB 附件上限，限一个域名。 ✅
    * [Zoho Assist](https://www.zoho.com/assist) - Zoho Assist 的永久免费套餐包含 1 个并发远程支持许可，以及 5 台无人值守计算机的许可，使用时长不限，可用于专业与个人用途。 ✅
    * [Sprints](https://zoho.com/sprints) - 5 个用户、5 个项目与 500MB 存储免费。 ✅
    * [Docs](https://zoho.com/docs) - 5 个用户免费，上传上限 1 GB，存储空间 5GB。附带 Zoho Office Suite（Writer、Sheets 与 Show）。 ✅
    * [Projects](https://zoho.com/projects) - 免费版支持 3 个用户、2 个项目，附件上限 10 MB。同样的套餐也适用于 [Bugtracker](https://zoho.com/bugtracker)。 ✅
    * [Connect](https://zoho.com/connect) - 团队协作服务免费支持 25 个用户，包含 3 个群组、3 个自定义应用、3 个 Boards、3 个 Manuals 和 10 个集成，并提供频道、活动与论坛功能。 ✅
    * [Meeting](https://zoho.com/meeting) - 会议最多支持 3 名参会者，Webinar（网络研讨会）最多 10 名听众。 ✅
    * [Vault](https://zoho.com/vault) - 密码管理服务面向个人用户开放。 ✅
    * [Showtime](https://zoho.com/showtime) - 又一款会议软件，可用于最多 5 名参会者的远程培训会议。 ✅
    * [Notebook](https://zoho.com/notebook) - 一款免费的 Evernote 替代品。 ✅
    * [Wiki](https://zoho.com/wiki) - 免费版支持 3 名用户，提供 50 MB 存储空间、无限页面、zip 备份、RSS 与 Atom feed、访问权限控制及自定义 CSS。 ✅
    * [Subscriptions](https://zoho.com/subscriptions) - 周期性账单管理，免费版支持 20 个客户/订阅和 1 名用户，支付托管全部由 Zoho 完成。保存最近 40 条订阅指标。 ✅
    * [Checkout](https://zoho.com/checkout) - 产品账单管理，支持 3 个页面和最多 50 笔付款。 ✅
    * [Desk](https://zoho.com/desk) - 客户支持管理，包含 3 名客服坐席、私有知识库和邮件工单。可与 [Assist](https://zoho.com/assist) 集成，支持 1 名远程技术人员和 5 台无人值守计算机。 ✅
    * [Cliq](https://zoho.com/cliq) - 团队聊天软件，提供 100 GB 存储空间、不限用户数、每个频道 100 名用户，并支持 SSO。 ✅
    * [Campaigns](https://zoho.com/campaigns) - 电子邮件营销。 ✅
    * [Forms](https://zoho.com/forms) - 表单创建工具。 ✅
    * [Sign](https://zoho.com/sign) - 无纸化电子签名。 ✅
    * [Surveys](https://zoho.com/surveys) - 在线问卷调查。 ✅
     * [Bookings](https://zoho.com/bookings) - 预约日程安排工具。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-1"></a>
## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 协作式解决方案，可端到端地可视化构建和管理云基础设施。 🟡
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（含 1 台部署服务器、1 个静态站点），Cloud 66 提供在任何云上构建、部署和扩展应用所需的一切，免去「服务器琐事」的烦恼。 🟡
  * [Cloud Cost Analyzer](https://cca.dragonfractal.com/) - 扫描 AWS 和 Azure 的成本浪费，提供 92 项自动化检查，涵盖闲置 NAT gateway、gp2 卷、过度配置的实例等。通过只读、开发者优先的 CLI 获取节省估算。免费额度支持在 1 个 AWS 账户上每次扫描最多 5,000 个资源。付费版提供资源 ID 和精确的修复步骤。 🟡
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发者在 AWS 上自动化部署。免费额度下，单个开发者（单用户）可部署不限量的静态站点、Web 服务和环境。每月免费提供 10 次 job 执行，预览和自动部署也包含在免费额度内。 🟡
  * [Parsivex](https://www.parsivex.com) - Parsivex 扫描你的 AWS 账户，查找闲置 EC2、未挂载的 EBS、规格过大的 RDS、过期快照、NAT gateway 过度使用等问题。免费额度提供对 1 个 AWS 账户的每月一次扫描，返回每月总浪费金额及分类明细。付费计划可查看逐项结果并支持定期重新扫描。 🟡
  * [Pulumi](https://www.pulumi.com/) - 现代化基础设施即代码平台，可使用熟悉的编程语言和工具来构建、部署和管理云基础设施。 🟡
  * [scalr.com](https://scalr.com/) - Scalr 是一款 Terraform 自动化与协作（TACO）产品，用于改善 Terraform 管理的基础设施和配置的协作与自动化。完整支持 Terraform CLI，集成 OPA，采用分层配置模型。无 SSO 附加费，所有功能全部包含。每月可免费使用最多 50 次 run。 🟡

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-2"></a>
## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) - 最多 5 名用户可使用不限量的公开和私有 Git 仓库，并附带用于 CI/CD 的 Pipelines。 🟡
  * [Codeberg](https://codeberg.org/) - 面向免费和开源项目提供不限量的公开和私有仓库（协作者数量不限）。基于 [Forgejo](https://forgejo.org/) 构建。通过 [Codeberg Pages](https://codeberg.page/) 提供静态网站托管，通过 [Codeberg's CI](https://docs.codeberg.org/ci/) 提供 CI/CD 托管，通过 [Codeberg Translate](https://translate.codeberg.org/) 提供翻译托管。包含 Package 和容器托管、项目管理及 Issue 跟踪。 🟡
  * [framagit.org](https://framagit.org/) - Framagit 是 Framasoft 基于 GitLab 软件运营的软件 forge，包含 CI、静态 Pages、项目页面和 Issue 跟踪。 🟡
  * [GitGud](https://gitgud.io) - 不限量的私有和公开仓库，永久免费。由 GitLab 与 Sapphire 驱动。包含 CI/CD、静态托管、Container Registry、项目管理和 Issue 跟踪。 ❓
  * [GitHub](https://github.com/) - 不限量的公开和私有仓库（协作者数量不限）。包含 CI/CD、开发环境、静态托管、Package 和容器托管、项目管理以及 AI Copilot。 🟡
  * [gitlab.com](https://about.gitlab.com/) - 提供不限量的公开与私有 Git 仓库，最多 5 名协作者。包含 CI/CD、静态网站托管、Container Registry、项目管理与 Issue 跟踪。 ✅
  * [heptapod.net](https://foss.heptapod.net/) - Heptapod 是 GitLab Community Edition 的一个友好 fork，提供对 Mercurial 的支持。 ❓
  * [pijul.com](https://pijul.com/) - 免费开源的分布式版本控制系统。其特色建立在可靠的补丁理论之上，易于学习、使用与分发，解决了 git/hg/svn/darcs 的许多问题。 ❓
  * [projectlocker.com](https://projectlocker.com) - 免费提供 1 个私有项目（支持 Git 和 Subversion），含 50 MB 空间。 ❓
  * [RocketGit](https://rocketgit.com) - 基于 Git 的代码仓库托管服务。提供不限数量的公开和私有仓库。 ✅
  * [savannah.gnu.org](https://savannah.gnu.org/) - 为自由软件项目提供协作式软件开发管理服务（面向 GNU 项目）。 ✅
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - 为自由软件项目提供协作式软件开发管理服务（面向非 GNU 项目）。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-3"></a>
## API、数据与机器学习

  * [Abstract API](https://www.abstractapi.com) - 面向多种用例的 API 套件，包括 IP 地理定位、电话号码验证和邮箱验证等。 ✅
  * [AlphaAI](https://alphai.io/developers) - 财经新闻 API 与 MCP server。每篇文章都会获得按股票代码（ticker）的影响分析、分类和 1-10 的相关度评分，SEC Form 4 内部人申报文件会被转化为带评分的事件。免费额度为 REST 和 MCP 均每分钟 20 次请求、每天 100 次请求，无需绑卡。 ❓
  * [AnyHook](https://anyhook.net) - 入站 webhook 中继服务：将 Stripe、GitHub 或 LINE bot 的 webhook 指向它，它会先存储每个事件再投递给你的处理端点，当你的端点宕机时自动重试，并保留可回放的日志。可通过 API 创建端点，无需注册账号。免费计划包含每月 3,000 个事件、1 个应用、3 次重试和 3 天保留期，无需信用卡。 ❓
  * [Apify](https://www.apify.com/) - 网页抓取与自动化平台，可为任意网站创建 API 并提取数据。提供现成的爬虫、集成代理和定制方案。免费计划每月赠送 $5 平台额度。 ✅
  * [APITemplate.io](https://apitemplate.io) - 通过简单的 API 或 Zapier、Airtable 等自动化工具自动生成图片和 PDF 文档，无需 CSS/HTML。免费计划包含每月 50 张图片和 3 个模板。 ✅
  * [APIVerve](https://apiverve.com) - 可免费即时使用 120+ 个 API，注重质量、一致性与可靠性。免费套餐每月最多 50 个 API Token。（2025-06-25 时可能已下线） ❓
  * [Arize AI](https://arize.com/) - 机器学习可观测性服务，用于模型监控与根因分析，可排查数据质量和性能漂移等问题。免费额度支持最多两个模型。 ✅
  * [Beeceptor](https://beeceptor.com) - 无代码的云端平台，用于 Mock 和调试多协议 API（REST、SOAP、gRPC 与 GraphQL），提供即时可用的服务器，支持基于规则的逻辑、CRUD 与有状态 Mock、代理转发以及 CORS 管理，加快集成与测试。免费计划每天包含 50 次请求，并提供公开的 dashboard/endpoint，任何拿到 dashboard URL 的人都可以查看提交的请求和响应。 ✅
  * [BigDataCloud](https://www.bigdatacloud.com/) - 为现代 Web 提供快速、准确且免费的 API（不限量或每月最多 10K-50K 次），涵盖 IP 地理定位、逆地理编码、网络洞察、邮箱与手机号验证、客户端信息等。 ✅
  * [Brave Search API](https://brave.com/search/api/) - 独立的 Web、新闻、图片、视频搜索及 AI/LLM 上下文 API，适合 RAG 流水线和 AI agent。免费层每月包含 $5 额度（需信用卡验证）。 🟡
  * [Browse AI](https://www.browse.ai) - 网页数据抓取与监控。每月免费 1k credits，相当于 1k 个并发请求。 ✅
  * [Calendarific](https://calendarific.com) - 面向 200 多个国家/地区的企业级公共节假日 API 服务。免费计划每月包含 500 次调用。 ✅
  * [Canopy](https://www.canopyapi.co/) - 用于获取 Amazon.com 商品、搜索和类目数据的 GraphQL API。免费计划每月包含 100 次调用。 ✅
  * [CarAPI.dev](https://carapi.dev) - 综合汽车数据 API，提供 VIN 解码、被盗车辆查询、车辆估值、检测数据等。免费层在全部 9 个端点合计每月 100 次请求。 ✅
  * [CatchDoms](https://catchdoms.com) - 聚合来自 16 个市场的过期域名与即将删除（dropping）域名列表，并提供 SEO 增强（外链、Trust Flow、Wayback 历史）与质量评分。免费计划：10 条解锁列表、5 个收藏、3 个已保存搜索。注册即含 7 天 Pro 试用，可使用完整 REST API 与 MCP server。 ✅
  * [Cloudmersive](https://cloudmersive.com/) - 实用 API 平台，可完整使用其庞大的 API 库，包括文档转换、病毒扫描等，每月 600 次调用，仅提供北美可用区（AZ），最大文件 2.5MB。 ✅
  * [CometML](https://www.comet.com/site/) - MLOps 平台，提供实验跟踪、模型生产管理、模型注册表（model registry）与完整数据血缘，覆盖从训练到生产的完整工作流。对个人与学术用户免费。 ✅
  * [Commerce Layer](https://commercelayer.io) - 可组合式商务（composable commerce）API，可从任意前端构建、下单并管理订单。开发者计划免费提供每月 100 笔订单与最多 1,000 个 SKU。 ✅
  * [Composio](https://composio.dev/) - 面向 AI Agent 与 LLM 的集成平台，可接入 200+ 个覆盖 agentic 互联网的工具。 ✅
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图片、视频、音频与电子书。提供 REST API，以及 Node.js、PHP、Python 库。付费计划支持最大 50 GB 的文件；免费层级受文件大小（20MB）与转换次数（30/天、300/月）限制。 ✅
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 以 API 与微服务形式提供国家、地区、省份、城市、邮政编码等各类信息。免费层级每天最多 100 次请求。 ✅
  * [Coupler](https://www.coupler.io/) - 在应用之间同步数据的集成工具，可创建实时仪表盘与报告、转换和处理数值，并收集与备份洞察。免费计划限 1 个用户、1 个数据连接、1 个数据源与 1 个数据目标，且需手动刷新数据。 ✅
  * [CraftMyPDF](https://craftmypdf.com) - 通过可复用模板自动生成 PDF 文档，提供拖拽式编辑器和简单的 API。免费计划每月可生成 100 个 PDF，并包含三个模板。 ✅
  * [Cube](https://cube.dev/) - Cube 帮助数据工程师和应用开发者从现代数据存储中访问数据，将其组织为一致的定义，并交付给每一个应用。使用 Cube 最快的方式是 Cube Cloud，其免费额度为每天 1,000 次查询。 ❓
  * [CurlHub](https://curlhub.io) - 用于检查和调试 API 调用的代理服务。免费计划包含每月 10,000 次请求。 ✅
  * [CurrencyScoop](https://currencyscoop.com) - 面向金融科技应用的实时汇率数据 API。免费套餐每月包含 5,000 次调用。 ✅
  * [CustomJS](https://www.customjs.io) - HTML to PDF、PDF 转 PNG/文本，以及 PDF 拆分/提取/合并 API。免费额度为每月 600 次调用。 ✅
  * [Data Fetcher](https://datafetcher.com) - 无需编写代码即可将 Airtable 连接到任何应用或 API。提供类 Postman 界面，可在 Airtable 中运行 API 请求。内置数十款应用的预置集成。免费套餐每月包含 100 次运行。 ❓
  * [Dataimporter.io](https://www.dataimporter.io) - 用于连接、清理数据并导入 Salesforce 的工具。免费套餐每月最多支持 20,000 条记录。 ✅
  * [Datalore](https://datalore.jetbrains.com) - JetBrains 出品的 Python notebook 服务。每月含 10 GB 存储空间和 120 小时运行时长。 ✅
  * [DB Designer](https://www.dbdesigner.net/) - 基于云的数据库 schema 设计与建模工具，免费 starter 计划包含 2 个数据库模型，每个模型 10 张表。 ✅
  * [DB-IP](https://db-ip.com/api/free) - 免费 IP 地理定位 API，每个 IP 每天 1k 次请求；CC-BY 4.0 许可下的 lite 数据库同样免费。 ✅
  * [DeepAR](https://developer.deepar.ai) - 一套 SDK 即可为任何平台提供增强现实（AR）面部滤镜。免费计划支持最多 10 个月度活跃用户（MAU），可同时追踪最多 4 张人脸。 ✅
  * [Deepnote](https://deepnote.com) - 一款新型数据科学 notebook，兼容 Jupyter，支持实时协作与云端运行。免费层包含不限量的个人项目、不限量的基础机器（5GB RAM 和 2vCPU），以及最多 3 名编辑者的团队。 ✅
  * [Compare JSON](https://comparejson.com) - 一款在线工具，用于比较两个 JSON 数据结构之间的差异，帮助你快速定位 JSON 数据中的不同之处。 ✅
  * [Disease.sh](https://disease.sh/) - 免费 API，提供准确的数据，用于构建与 Covid-19 相关的实用应用。 ✅
  * [Doczilla](https://www.doczilla.app/) - SaaS API，可直接从 HTML/CSS/JS 代码生成截图或 PDF。免费计划每月允许 250 份文档。 ✅
  * [Doppio](https://doppio.sh/) - 托管式 API，使用顶级渲染技术生成并私密存储 PDF 和截图。免费计划每月允许 400 份 PDF 和截图。 ✅
  * [DocPenny](https://docpenny.com) - 基于 HTML 生成 PDF 文档，支持模板、webhook 回调与按积分计费。免费计划每月 50 个积分，无需信用卡。 ✅
  * [Doqlo](https://doqlo.com/) - 通过 Web 应用或 Public API 从 CSV 批量填写并邮件合并 PDF 表单。免费计划每月包含 100 份输出 PDF。 ✅
  * [DynamicDocs](https://advicement.io) - 通过 JSON to PDF API 基于 LaTeX 模板生成 PDF 文档。免费计划每月允许 50 次 API 调用，并可使用模板库。 ✅
  * [Earnings Feed](https://earningsfeed.com/api) - 提供 SEC 文件、内部人交易与机构持仓的实时 API。免费层每分钟 15 次请求。 ✅
  * [Estuary](https://estuary.dev/) - 面向 CDC、流式与批量数据集成的实时数据集成平台，提供 200+ 托管连接器。免费计划包含每月 10 GB 数据迁移量和最多 2 个连接器实例，无时限，无需信用卡。 ✅
  * [Export SDK](https://exportsdk.com) - 提供 SDK 与无代码集成的 PDF 生成 API，配备拖拽式模板编辑器。免费计划每月 250 页，用户数不限，含 3 个模板。 ✅
  * [Financial Data](https://financialdata.net/) - 股票市场与金融数据 API。免费计划每天允许 300 次请求。 ✅
  * [finlight](https://finlight.me) - 实时金融新闻 API，支持实体解析（tickers、ISIN）与情感标注，可通过 REST、WebSocket、webhook 和 MCP server 访问。免费层：REST 与 MCP 每月 5,000 次请求，文章延迟 12 小时，无需信用卡。 ✅
  * [Firecrawl](https://www.firecrawl.dev/) - 抓取网站并将其转换为干净、适合 LLM 使用的 markdown 或结构化数据的 API，可处理 JavaScript 渲染、代理和速率限制。免费套餐每月包含 1,000 credits，无需信用卡。 ✅
  * [Formfeed](https://formfeed.dev) - 通过简单 API 或 Zapier、Make 等自动化工具，从 JSON 生成 PDF 和图片的 API。免费计划每月包含 100 次 PDF 转换。 ❓
  * [FraudLabs Pro](https://www.fraudlabspro.com) - 筛查订单交易中的信用卡支付欺诈。该 REST API 会根据订单的输入参数检测所有可能的欺诈特征。免费的 Micro 套餐每月 500 笔交易。 ✅
  * [FreeIPAPI](https://freeipapi.com) - 面向商业与非商业用户的免费、快速、可靠的 IP 地理位置定位 API，以 JSON 格式提供。 ✅
  * [Geolocated.io](https://geolocated.io) - 在多洲部署服务器的 IP 地理位置定位 API，免费套餐每天 2,000 次请求。 ✅
  * [Hex](https://hex.tech/) - 面向 notebook、数据应用和知识库的协作式数据平台。免费社区版最多可创建五个项目。 ✅
  * [Hook0](https://www.hook0.com/) - Hook0 是一个开源的 Webhooks-as-a-service (WaaS)，让在线产品可以轻松提供 webhooks。免费额度为每天派发最多 100 个事件，历史记录保留七天。 ✅
  * [Hoppscotch](https://hoppscotch.io) - 一款免费、快速、美观的 API 请求构建工具。 ✅
  * [HS Ping](https://hsping.com) - 支持多国 HS（Harmonized System，协调制度）与 HTS（Harmonized Tariff System，协调关税制度）编码查询的 API，免费套餐每天 100 次查询。 ❓
  * [huggingface.co](https://huggingface.co) - 为 Pytorch、TensorFlow 和 JAX 构建、训练和部署 NLP 模型。每月免费 30k 输入字符。 🔴
  * [Insomnia](https://insomnia.rest) - 开源 API 客户端，用于设计和测试 API，支持 REST 和 GraphQL。 ✅
  * [Inngest](https://www.inngest.com) - 面向 TypeScript、Python 和 Go 的持久化执行与事件驱动工作流。Hobby 计划免费：每月 50k 次执行、5 个并发步骤、500k 事件摄入，且无需信用卡。 ✅
  * [Invantive Cloud](https://cloud.invantive.com/) - 通过 Invantive SQL 或 OData4（通常配合 Power BI 或 Power Query）访问 Exact Online、Twinfield、ActiveCampaign、Visma 等 70 多个（云）平台。包含数据复制与交换。面向开发者和实施顾问提供免费计划；部分平台免费，但有数据量限制。 ✅
  * [IP Geolocation API by ipwho.org](https://ipwho.org/) - 每天 2,000 次免费请求。以非企业级的价格提供企业级的快速 API。深受开发者、企业、政府和教育客户信赖。服务器分布在 12+ 个地区。 ✅
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) - 来自 Abstract 的 IP Geolocation API — 提供 1,000 次免费请求。 ✅
  * [IP Geolocation](https://ipgeolocation.io/) - IP Geolocation API — 面向开发者的永久免费计划，每日限 1,000 次请求。 ✅
  * [ip-api](https://ip-api.com) - IP Geolocation API，非商业用途免费，无需 API key，免费计划限同一 IP 地址每分钟 45 次请求。 ✅
  * [IP.City](https://ip.city) - 每天免费提供 100 次 IP 地理位置查询。 ✅
  * [IP2Location.io](https://www.ip2location.io/) - 免费增值（freemium）模式、快速可靠的 IP 地理位置定位 API。可获取城市、坐标、ISP、ASN、AS 数据等信息。免费套餐每月含 50k credits。IP2Location.io 还提供每月 500 次 WHOIS 和托管域名查询，可查看域名注册详情并找出托管在特定 IP 上的域名。升级到付费套餐可获得更多功能。 ✅
  * [Proxmint GeoIP](https://proxmint.com/tools/ip-lookup) - 免费 IP → 国家/城市/ASN JSON API，无需密钥，开放 CORS。基于 MaxMind GeoLite2。 ✅
  * [ip2geo.dev](https://ip2geo.dev) - IP 地理位置定位 API，可将 IP 地址转换为包含城市、国家、时区、ASN 和货币等在内的位置数据。免费套餐每月含 1,000 次请求。 ✅
  * [ipaddress.sh](https://ipaddress.sh) - 简单的公网 IP 地址获取服务，支持多种[格式](https://about.ipaddress.sh/)。 ✅
  * [ipapi.is](https://ipapi.is/) - 由开发者打造、面向开发者的可靠 IP 地址 API，拥有业内最强的 Hosting Detection（托管检测）能力。免费套餐提供 1000 次查询，无需注册。 ✅
  * [ipapi](https://ipapi.co/) - Kloudend, Inc 出品的 IP 地址位置 API——构建在 AWS 之上的可靠地理位置 API，受财富 500 强企业信赖。免费套餐提供每月 30k 次查询（每天 1k 次），无需注册。 ✅
  * [ipbase.com](https://ipbase.com) - IP Geolocation API - 永久免费套餐，每月提供 150 次请求。 ✅
  * [IPinfo](https://ipinfo.io/) - 快速、准确且免费（每月最多 50k 次）的 IP 地址数据 API。提供涵盖地理位置、公司、运营商、IP 段、域名、滥用联系人等详情的多款 API。所有付费 API 均可免费试用。 ✅
  * [IPLocate](https://www.iplocate.io) - IP 地理定位 API，每天最多 1,000 次请求免费。包含代理/VPN/托管（hosting）检测、ASN 数据、IP to Company 等功能。IPLocate 还提供可免费下载的 IP to Country 与 IP to ASN 数据库，支持 CSV 或兼容 GeoIP 的 MMDB 格式。 ✅
  * [IPTrace](https://iptrace.io) - 一个简单得让人不好意思的 API，为你的业务提供可靠且实用的 IP 地理定位数据，每月 50,000 次免费查询。 ✅
  * [JSON IP](https://getjsonip.com) - 返回发起请求的客户端的公网 IP 地址。免费层无需注册。借助 CORS，可直接在浏览器中用客户端 JS 请求数据。适用于需要监控客户端与服务器 IP 变化的服务。请求数不限。 ✅
  * [JSON to Table](https://jsontotable.org) - 将 JSON 转换为交互式表格，便于在线快速查看、编辑和分享。 ✅
  * [JSON2Video](https://json2video.com) - 一个视频编辑 API，可通过编程或无代码方式自动化制作视频营销和社交媒体视频。 ✅
  * [JSONing](https://jsoning.com/api/) - 从一个 JSON 对象创建假的 REST API，并可自定义 HTTP 状态码、响应头和响应体。 ✅
  * [Labelixa](https://labelixa.com) - Zebra ZPL 标签渲染与校验 API 及浏览器查看器。免费层包含匿名渲染配额以及无水印的条形码生成，无需绑卡。 ✅
  * [LayerCall](https://www.layercall.com) - 一次调用即可对 IP、邮箱、电话、域名或设备进行欺诈与信任评分，并为 AI agent 提供授权与 Web Bot Auth 验证。每月 1,000 次查询免费，无需绑卡。 ✅
  * [LoginLlama](https://loginllama.app) - 一个登录安全 API，用于检测欺诈性和可疑登录并通知你的客户。每月 1,000 次登录检测免费。 ✅
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时与历史金融数据。Free Forever API 档位每天可免费进行 100 次 API 请求。 ✅
  * [Maxim AI](https://getmaxim.ai/) - 对 AI agent 进行模拟、评估与观测。Maxim 是一个端到端的评估与可观测性平台，帮助团队更可靠、快 5 倍以上地交付 AI agent。独立开发者和小团队（3 个席位）永久免费。 ✅
  * [microlink.io](https://microlink.io/) - 把任意网站转化为数据，例如 metatags 规范化、美观的链接预览、网页抓取能力，或截图即服务。每天 50 次请求，天天免费。 ✅
  * [Mintlify](https://mintlify.com) - API 文档的现代标准。美观且易于维护的 UI 组件、应用内搜索和交互式 playground。1 名编辑者免费。 ✅
  * [MockAPI](https://www.mockapi.io/) - MockAPI 是一个简单工具，可让你快速模拟 API、生成自定义数据，并通过 RESTful 接口执行操作。MockAPI 定位为原型/测试/学习工具。免费提供 1 个项目、每个项目 2 个资源。 ✅
  * [Mockerito](https://mockerito.com/) - 免费的 mock REST API 服务，提供覆盖 9 个领域（电商、金融、医疗、教育、招聘、社交媒体、股市、天气和航空）的仿真数据。无需强制注册，无需 API key，请求量不限。适合前端原型开发、API 测试以及 Web 开发的学习与教学。 ✅
  * [Mockfly](https://www.mockfly.dev/) - Mockfly 是一款值得信赖的 API mocking 与 feature flag 管理开发工具，可通过直观的界面快速生成并控制 mock API。免费档每天提供 500 次请求。 ✅
  * [Mocko.dev](https://mocko.dev/) - 免费代理你的 API，在云端选择要 mock 的端点并检查流量，加快开发与集成测试。 ✅
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) - 一款免费简洁的工具，可在多个节点检查你的出口 IP，了解你的 IP 在全球不同地区和服务看来是什么样子。适合用来测试 Control D 这类基于规则的 DNS 分流工具。 ✅
  * [NASdisks Drive Data API](https://www.nasdisks.com/data/) - 免费、无需密钥、支持 CORS 的 API，提供 NAS HDD/SSD 规格、按型号划分的 CMR/SMR 分类，以及基于 Backblaze Drive Stats 得出的年化故障率。返回 JSON 或 CSV，采用 CC BY 4.0 许可，无需注册。 ❓
  * [News API](https://newsapi.org) - 用代码搜索网络新闻并获取 JSON 结果。开发者每天有 100 次免费查询。文章有 24 小时延迟。 ✅
  * [OCR.Space](https://ocr.space/) - OCR API，可解析图片和 PDF 文件并以 JSON 格式返回文本结果。每月 25,000 次请求免费，文件大小上限 1MB。 ✅
  * [OpenAPI3 Designer](https://openapidesigner.com/) - 免费以可视化方式创建 Open API 3 定义。 ✅
  * [Parseur](https://parseur.com) - 每月 20 页免费：从 PDF、电子邮件中提取数据。AI 驱动，提供完整 API 访问。 ✅
  * [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，提供可视化模板编辑器或 HTML 转 PDF、动态数据集成，以及通过 API 进行 PDF 渲染。免费计划包含 1 个模板、每月 100 份 PDF。 ✅
  * [PDFBolt](https://pdfbolt.com) - 面向开发者的 PDF 生成 API，以隐私为核心设计理念。文档风格仿照 Stripe，每月包含 500 次免费 PDF 转换。 ✅
  * [Pexafy](https://docs.pexafy.com) - 语义图像搜索 API，聚合 9 个免费图库来源（Unsplash、Pexels、Pixabay、Kaboompics 等），以统一的 JSON schema 提供 900 万+ 张图片，无需逐个来源单独对接。支持自然语言查询、以图搜图，并可按颜色、方向和许可协议过滤。读取端点开放 CORS，可直接在浏览器中运行。免费计划包含每月 5,000 次 API 请求和 1 个 key，无需应用审核。 ✅
  * [Pixela](https://pixe.la/) - 免费的 daystream 数据库服务。所有操作均通过 API 完成，还支持以热力图和折线图进行可视化。 ❓
  * [Posthook](https://posthook.io) - 可将 webhook 定时安排在未来某一时间触发，支持自动重试、送达跟踪和失败告警。免费计划包含每月 1,000 个 webhook。 ✅
  * [Postman](https://postman.com) - Postman 是一个面向 API 开发的协作平台，帮助简化工作流、更快地构建更好的 API。Postman App 可永久免费使用，Postman 云端功能在特定限额内同样永久免费。 ✅
  * [PrefectCloud](https://www.prefect.io/cloud/) - 完整的数据流自动化平台。免费计划包含 5 个已部署的工作流和每月 500 分钟的 serverless 计算额度。 ✅
  * [Preset Cloud](https://preset.io/) - 托管的 Apache Superset 服务。对最多 5 名用户的团队永久免费，提供不限量的仪表盘与图表、无代码图表构建器以及协作式 SQL 编辑器。 ✅
  * [ProxySentry](https://proxysentry.io/) - 用于检测住宅代理和 VPN 的 IP API。ProxySentry.io 在 rapidapi.com 上提供免费层，每月 10k 次请求。 ✅
  * [Publora](https://publora.com) - 发布 API：通过一次 HTTPS 调用即可发布或定时发布到 10 个社交网络，也可由 AI agent 通过 MCP 调用。永久免费：每月 15 条帖子、3 个关联账号，支持除 X 外的所有网络。 🟡
  * [Reducto](https://reducto.ai) - 把任意非结构化文档（PDF、XLSX、JPG、PPTX 等）转换为结构化 JSON 数据。可解析、提取数据并编辑 PDF 表单。提供免费层，含 15k 免费 credits，并支持按量付费。 ✅
  * [Rendi](https://rendi.dev) - FFmpeg API——面向 FFmpeg 的 REST API，可在线运行 FFmpeg 而无需自建基础设施。免费层提供每月处理配额和 4 个 vCPU。 ❓
  * [RequestBin.com](https://requestbin.com) - 创建一个免费的 endpoint，可向其发送 HTTP 请求。发送到该 endpoint 的任何 HTTP 请求都会连同 payload 和 headers 一起被记录下来，便于查看来自 webhook 及其他服务的回调内容。 ✅
  * [Simplescraper](https://simplescraper.io) - 每次操作完成后触发你的 webhook。免费计划包含 100 个云端抓取 credits。 ❓
  * [Geekflare API](https://geekflare.com/api/) - Geekflare API 可将网页抓取为 Markdown、截图、执行 TLS 扫描和 DNS 查询、测试加载时间等。免费计划每月提供 500 个 API credits（例如 500 次 DNS 查询、250 次 web 抓取或 100 次截图）。参见 [credit 对照表](https://docs.geekflare.com/api/api-credit-mapping)。 ✅
  * [SmartParse](https://smartparse.io) - SmartParse 是一个数据迁移与 CSV 转 API 平台，提供节省时间和成本的开发者工具。Free 层级每月包含 300 个 Processing Units、浏览器上传、数据隔离、熔断机制和任务提醒。 ❓
  * [Sofodata](https://www.sofodata.com/) - 从 CSV 文件创建安全的 RESTful API。上传 CSV 文件后即可立即通过 API 访问数据，加快应用开发。免费计划包含 2 个 API 和每月 2,500 次 API 调用，无需信用卡。 ❓
  * [Svix](https://www.svix.com/) - Webhooks 即服务（Webhooks as a Service）。免费额度为每月最多发送 50,000 条消息。 ✅
  * [Tavily AI](https://tavily.com/) - 用于在线搜索的 API，可快速获得洞察并进行全面研究，还支持对研究结果进行整理。Free 层级每月 1,000 次请求，无需信用卡。 ✅
  * [TemplateFox](https://pdftemplateapi.com) - PDF 生成 API，提供可视化模板编辑器、动态数据合并，以及 7 种语言的 SDK。免费计划包含每月 60 份 PDF 和 3 个模板。 ❓
  * [The IP API](https://theipapi.com/) - IP 地理定位 API，每天提供 1,000 次免费请求。提供 IP 地址的位置信息，包括国家、城市、地区等。 ✅
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑 API。核心功能可免费无限量使用。 ✅
  * [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 提供免费计划的天气 API。提供准确且最新的全球天气预报，以及历史数据和天气监测方案。 ✅
  * [Treblle](https://www.treblle.com) - Treblle 帮助团队构建、发布和治理 API，提供高级的 API 日志聚合、可观测性、文档与调试功能。所有功能均可免费使用，但免费套餐每月请求量上限为 250k 次。 ❓
  * [Trophy](https://trophy.so) - Trophy 是面向消费级应用的游戏化层。使用预构建的 API 和开源 UI 组件，即可上线成就、连续打卡、积分、排行榜等功能。月活跃用户不超过 1,000 人免费。 ✅
  * [UniRateAPI](https://unirateapi.com) - 提供 590 多种货币及加密货币的实时汇率。免费计划不限制 API 调用次数，适合开发者和金融类应用。 ✅
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的 VAT 号码验证 API。每月 150 次免费验证。 ✅
  * [vatnode](https://vatnode.dev) - 欧盟 VAT 号码验证 REST API，支持 VIES 及各国税务登记库回退查询，并返回官方 VIES 咨询编号以备审计记录。免费额度为每月 100 次验证，无需信用卡。 ✅
  * [WeatherXu](https://weatherxu.com/) - 通过 API 提供全球天气数据，包括实时天气、逐小时与逐日预报以及天气预警。整合 AI 模型与 ML 系统分析并融合多个气象模型，以提升预报准确度。免费额度包含每月 10,000 次 API 调用。 ✅
  * [Webhooker](https://webhooker.eu/) - 托管在德国的 Webhook 网关。提供签名验证、重试、死信队列与重放功能。免费计划：每月 10,000 个事件。 ✅
  * [WebScraping.AI](https://webscraping.ai) - 简单的 Web Scraping API，内置解析、Chrome 渲染与代理。每月 2,000 次免费 API 调用。 ✅
  * [Weights & Biases](https://wandb.ai) - 面向开发者的 MLOps 平台。通过实验跟踪、数据集版本管理与模型管理，更快构建更好的模型。免费额度仅限个人项目，包含 100 GB 存储空间。 ✅
  * [What Is My IP](https://whatismyip.help) - 一项免费服务，可通过 API 查询你的公网 IPv4 和 IPv6 地址及相关请求数据，支持多种输出格式，适用于自动化、脚本和网络故障排查。 ✅
  * [What The Diff](https://whatthediff.ai) - AI 驱动的代码审查助手。免费套餐每月限额 25,000 tokens（约 10 个 PR）。 ❓
  * [XFlux](https://www.xfluxapi.com) - X/Twitter 读取 REST API（个人资料、搜索、时间线）及账号监控。免费额度：每月 1,000 次 API 调用、1 个监控器、即时发放 API key。付费计划提供 HTTP webhooks，$19/月起。 🔴
  * [wolfram.com](https://wolfram.com/language/) - 云端内置的基于知识的算法。 ❓
  * [wrapapi.com](https://wrapapi.com/) - 将任意网站转换为可参数化的 API。每月 30k 次 API 调用。 ✅
  * [Zipcodebase](https://zipcodebase.com) - 免费 Zip Code API，可访问全球邮政编码数据。每月 5,000 次免费请求。 ❓
  * [Zuplo](https://zuplo.com/) - 免费的 API 管理平台，可用于设计、构建 API 并将其部署到 Edge。几分钟内即可为任何 API 添加 API Key 认证、速率限制、开发者文档和货币化能力。原生支持 OpenAPI，并可使用 web 标准 API 与 TypeScript 进行完全编程。免费计划提供最多 10 个项目、不限量的生产 Edge 环境、每月 1M 次请求和 10GB 出口流量。 🟡
  * [Metashot](https://metashot.io) - Open Graph (OG) 社交预览图生成 API。通过 URL 参数为 Twitter、LinkedIn 和 Facebook 动态生成 1200×630 图片，边缘缓存于 Cloudflare Workers。免费额度：每月 1,000 次渲染；付费方案 $12/月起。 ✅
  * [Tinyfish](https://www.tinyfish.ai) - 免费的网页搜索与抓取 API，有速率限制。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-4"></a>
## 制品仓库

  * [Gemfury](https://gemfury.com) - 面向 Maven、PyPi、NPM、Go Module、Nuget、APT 和 RPM 仓库的私有与公共制品仓库，公共项目免费。 ✅
  * [jitpack.io](https://jitpack.io/) - GitHub 上面向 JVM 和 Android 项目的 Maven 仓库，公共项目免费。 🟡
  * [paperspace](https://www.paperspace.com/) - 构建与扩展 AI 模型，开发、训练和部署 AI 应用。免费方案：公共项目、5Gb 存储、基础实例。 🔴
  * [RepoFlow](https://repoflow.io) - RepoFlow 简化包管理，支持 npm、PyPI、Docker、Go、Helm 等。云端版可免费试用：10GB 存储、10GB 带宽、100 个包、不限用户数；也提供仅限个人使用的自托管。 ✅
  * [RepoForge](https://repoforge.io) - 面向 Python、Debian、NPM 包和 Docker registry 的私有云托管仓库，开源/公共项目有免费方案。 ✅
  * [repsy.io](https://repsy.io) - 1 GB 免费私有/公共 Maven 仓库。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-5"></a>
## 团队与协作工具

  * [3Cols](https://3cols.com/) - 一款免费的云端代码片段管理器，支持个人使用与协作场景。 ❓
  * [BookmarkOS.com](https://bookmarkos.com) - 免费的集书签管理器、标签页管理器与任务管理器于一体的工具，内置于可自定义的在线桌面中，并支持文件夹协作。 ❓
  * [Braid](https://www.braidchat.com/) - 面向团队的聊天应用。对公开访问的群组免费，提供不限用户数、不限历史记录和不限集成。此外还提供可自托管的开源版本。 ✅
  * [Calendly](https://calendly.com) - Calendly 是用于连接日程并安排会议的工具。免费计划为每位用户提供 1 个日历连接和无限次会话。同时提供桌面端和移动端应用。 ✅
  * [cally.com](https://cally.com/) - 为会议找到最合适的时间和日期。简单易用，无论小型还是大型团体都能很好使用。 ✅
  * [cDox](https://cdox.ca) - 托管于加拿大的私有文档编辑器。支持撰写、排版、协作，并可通过简洁的公开链接发布文档。数据绝不会被用于 AI 训练。免费版包含 50 MB 存储空间、最多 3 个公开链接，以及导出为 PDF、Word 和 Markdown。 ✅
  * [Chanty.com](https://chanty.com/) - Chanty 是另一款 Slack 替代品。它为小型团队（最多 10 人）提供永久免费计划，包含不限量的公开和私人会话、可搜索的历史记录、不限量的 1:1 语音通话、不限量的语音消息、十个集成，以及每团队 20 GB 存储空间。 ✅
  * [DevToolLab](https://devtoollab.com) - 在线开发者工具，免费使用全部基础工具，每个工具可自动保存一条记录，处理速度为标准速度，并提供社区支持。 ✅
  * [Discord](https://discord.com/) - 支持公开/私密房间聊天。提供 Markdown 文本、语音、视频及屏幕共享功能。不限用户数免费使用。 ✅
  * [Dubble](https://dubble.so/) - 免费的分步操作指南创建工具。可截取屏幕截图、记录流程并与团队协作，另支持异步屏幕录制。 🟡
  * [Duckly](https://duckly.com/) - 与团队实时交流协作。支持 IDE 结对编程、终端共享、语音、视频与屏幕共享。小团队可免费使用。 ✅
  * [element.io](https://element.io/) - 基于 Matrix 协议的去中心化开源通讯工具。支持群聊、私聊、加密文件传输、语音与视频通话，并可轻松与其他服务集成。 🟡
  * [evernote.com](https://evernote.com/) - 信息整理工具。支持分享笔记并与他人协作。 ✅
  * [Fibery](https://fibery.io/) - 互联工作区平台。个人用户免费，磁盘空间最高 2 GB。 ✅
  * [Fibo](https://fibo.dev) - 一款面向敏捷团队的免费在线实时 Scrum Poker 工具，支持不限人数的成员共同估算故事点，加快迭代计划。 ✅
  * [Fizzy](https://www.fizzy.do/) - 基于看板（Kanban）的项目管理与问题跟踪平台。可创建公开看板、设置 webhooks、使用卡片盖章（card stamping）功能，支持不限数量的用户——最多 1000 个条目内免费。 ✅
  * [flat.social](https://flat.social) - 为团队会议和线上团建社交提供可交互的自定义空间。会议数量不限，免费版最多支持 8 名并发用户。 🟡
  * [flock.com](https://flock.com) - 让团队沟通更快捷的方式。免费提供不限量的消息、频道、用户、应用与集成 🔴
  * [GhostChat](https://ghostchat.dev) - 面向网站的隐私优先在线客服聊天挂件（约 15KB，无 cookie、无追踪）。免费版包含 1 个站点、不限消息数、内置 AI 聊天机器人（25 条回复/月）、30 天历史记录、Gmail 线程、快捷回复和推送通知。无需信用卡。 ❓
  * [GitBook](https://www.gitbook.com/) - 用于收集和记录技术知识的平台——涵盖产品文档、内部知识库和 API。个人开发者可使用免费套餐。 ✅
  * [GitDailies](https://gitdailies.com) - 每日报告团队的 GitHub Commit 与 Pull Request 活动，包含 Push 可视化工具、同伴认可系统和自定义告警构建器。免费版支持不限用户数、3 个仓库和 3 个告警配置。 ❓
  * [gitter.im](https://gitter.im/) - 面向 GitHub 的聊天工具。公开与私有房间数量不限，25 人及以下的团队可免费使用。 ✅
  * [gokanban.io](https://gokanban.io) - 基于语法、无需注册的看板（Kanban Board），可快速上手使用。免费且无任何限制。 ❓
  * [Hackmd.io](https://hackmd.io/) - 面向 markdown 格式文档/文件的实时协作与写作工具。类似 Google Docs，但专为 markdown 文件设计。免费版可创建数量不限的"笔记"，但私有笔记与模板的协作者（被邀请者）人数[将受到限制](https://hackmd.io/pricing)。 ✅
  * [HeySpace](https://hey.space) - 任务管理工具，集聊天、日历、时间线和视频通话于一体。最多 5 名用户免费。 ✅
  * [Huly](https://huly.io/) - 一体化项目管理平台（Linear、Jira、Slack、Notion、Motion 的替代品）——用户数不限，每个工作区 10GB 存储，10GB 视频（音频）流量。 ❓
  * [Keybase](https://keybase.io/) - Keybase 是 Slack 的 FOSS 开源替代品，可为家庭、社区乃至公司等各类群体保护聊天记录与文件的安全。 ✅
  * [Knocket](https://trtc.io/solutions/knocket) - 面向独立开发者和小团队的永久免费联系层：为网站和移动应用（iOS/Android/Flutter/React Native，通过 WebView 接入）提供在线聊天挂件，提供可分享的联系页面（Linktree 风格，含社交媒体链接、预约链接和博客），以及统一的 Telegram/邮件收件箱。可直接在 Telegram 内回复（无需控制台）。支持会议预约、多语言、浅色/深色主题。配套开源 AI 自动回复智能体。无广告，无席位限制。 🔴
  * [Linkinize](https://linkinize.com) - 面向团队的书签管理工具，支持标签、多工作区与协作。免费版包含 4 个工作区和 10 名团队成员。 ❓
  * [Lockitbot](https://www.lockitbot.com/) - 在 Slack 中预订并锁定共享资源，例如会议室、开发环境、服务器等。最多 2 个资源免费 🔴
  * [meet.jit.si](https://meet.jit.si/) - 一键开启视频通话和屏幕共享，免费 🟡
  * [Miro](https://miro.com/) - 可扩展、安全、跨设备且面向企业级需求的协作白板，适合分布式团队使用。提供免费增值（freemium）方案。 ✅
  * [Notion](https://www.notion.so/) - Notion 是一款支持 markdown 的笔记与协作应用，集任务、wiki 和数据库于一体。该公司将其描述为一个集笔记、项目管理和任务管理于一体的 all-in-one 工作区。除跨平台客户端外，还可以通过大多数网页浏览器访问。 🔴
  * [Nuclino](https://www.nuclino.com) - 一款轻量级的团队协作 wiki，可用于集中管理团队的知识、文档与笔记。免费计划包含全部核心功能，最多 50 个条目，5GB 存储空间。 ✅
  * [OnlineInterview.io](https://onlineinterview.io/) - 免费的代码面试平台，内置视频聊天、画板和在线代码编辑器，可直接在浏览器中编译并运行代码。只需一键即可创建远程面试房间。 ✅
  * [paste.sh](https://paste.sh/) - 这是一个基于 JavaScript 和 Crypto 的简易 Paste（粘贴）站点。 ❓
  * [Pastefy](https://pastefy.app/) - 美观简洁的 Pastebin，支持可选的客户端加密、多标签粘贴、API、带语法高亮的编辑器等。 ✅
  * [Pendulums](https://pendulums.io/) - Pendulums 是一款免费的时间追踪工具，界面简单易用，并提供有价值的统计数据，帮助你更好地管理时间。 ❓
  * [Proton Pass](https://proton.me/pass) - 密码管理器，内置邮箱别名、2FA 验证器、共享和 passkey 功能。提供网页版、浏览器扩展、移动应用和桌面客户端。 🟡
  * [Pullflow](https://pullflow.com) - Pullflow 提供一个 AI 增强型平台，用于跨 GitHub、Slack 和 VS Code 的代码评审协作。 🟡
  * [Pumble](https://pumble.com) - 免费团队聊天应用。用户数与消息历史不限，永久免费。 ✅
  * [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 一款面向团队的简易工时表与时间追踪应用。免费版支持最多 10 名用户使用时间追踪和生成报告功能。 ✅
  * [Raindrop.io](https://raindrop.io) - 适用于 macOS、Windows、Android、iOS 和 Web 的私密安全书签应用。免费提供无限书签与协作功能。 ✅
  * [Reezn.io](https://reezn.io/) - 面向团队的规格驱动开发工作流：将评审左移，在代码尚未编写时就发现问题，而不是把问题堆积到代码评审阶段。在使用过程中为你的业务构建知识图谱，供 AI agents 在后续功能开发中使用。免费版：3 个席位、1 个项目、每月 5 个功能。 ❓
  * [Revolt.chat](https://revolt.chat/) - 一个尊重隐私的开源 [Discord](https://discord.com/) 替代品，还免费提供 Discord 的大部分专有功能。Revolt 是一款安全、快速的一体化应用，100% 免费，所有功能均免费开放。与大多数主流聊天应用不同，它还支持（官方与非官方）插件。 ❓
  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道（Omnichannel）功能、Matrix Federation 联邦互通、与其他应用的 Bridge 桥接、无限消息以及完整消息历史。 ✅
  * [ruttl.com](https://ruttl.com/) - 最好的一体化反馈工具，可用于收集数字化反馈并评审网站、PDF 和图片。 ✅
  * [Screen Sharing via Browser](https://screensharing.net) - 免费屏幕共享工具，直接通过浏览器即可与协作者共享您的屏幕，无需下载或注册，完全免费。 ❓
  * [seafile.com](https://www.seafile.com/) - 私有或云端存储、文件共享、同步与讨论。云端版本仅有 1 GB 空间。 ✅
  * [SiteDots](https://sitedots.com/) - 直接在你的网站上共享网站项目的反馈，无需模拟、canvas 或其他变通手段。免费层功能完整可用。 ✅
  * [Slab](https://slab.com/) - 面向团队的现代知识管理服务。最多 10 名用户免费。 ✅
  * [slack.com](https://slack.com/) - 不限用户数免费使用，部分功能有所限制。 ✅
  * [StatusPile](https://www.statuspile.com/) - 一个“状态页的状态页”。可以用它来追踪你的上游服务商的状态页。 ✅
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作应用。免费版最多 3 个 Walls、不限用户数、1 GB 存储。 ✅
  * [MeetBackdrops](https://meetbackdrops.com) - 为 Zoom、Microsoft Teams 和 Google Meet 视频通话提供免费高清虚拟背景。1,000+ 个工作室设计的环境，无需注册。 ✅
  * [talky.io](https://talky.io/) - 免费群组视频聊天。匿名、点对点（P2P），无需插件、注册或付费。 🔴
  * [Teamcamp](https://www.teamcamp.app) - 面向软件开发公司的一体化项目管理应用。 ✅
  * [Teamhood](https://teamhood.com/) - 免费的项目、任务与 issue 跟踪软件。支持带泳道（Swimlane）的 Kanban 和完整的 Scrum 实施，内置时间跟踪功能。免费版支持 5 名用户和 3 个项目组合。 ✅
  * [Teamplify](https://teamplify.com) - 通过 Team Analytics 和 Smart Daily Standup 改进团队开发流程。包含面向远程优先团队的完整 Time Off（休假）管理功能。最多 5 名用户的小团队可免费使用。 ✅
  * [Telegram](https://telegram.org/) - Telegram 适合所有需要快速、可靠消息传递与通话的用户。商务用户和小团队可能会喜欢它的大群组、用户名、桌面客户端和强大的文件分享功能。 🔴
  * [Tencent RTC](https://trtc.io/) - 腾讯实时音视频（TRTC）提供群组音频/视频通话解决方案。第一年每月免费 10,000 分钟。 ✅
  * [TimeCamp](https://www.timecamp.com/) - 免费的时间跟踪软件，用户数不限。可轻松与 Jira、Trello、Asana 等 PM 工具集成。 ✅
  * [tldraw.com](https://tldraw.com) - 免费开源的白板与图表绘制工具，具备智能箭头、吸附、便签和 SVG 导出等功能。支持多人协作编辑模式，另提供免费的官方 VS Code 扩展。 ✅
  * [transfernow](https://www.transfernow.net/) - 最简单、最快速、最安全的文件传输与分享工具。无需强制订阅即可发送照片、视频和其他大文件。 ✅
  * [Tugboat](https://tugboat.qa) - 自动化、按需地预览每一个 pull request。对所有用户免费，非营利组织可获赠 Nano 套餐。 ✅
  * [twist.com](https://twist.com) - 一款对异步协作友好的团队沟通应用，让对话保持条理、紧扣主题。提供 Free 和 Unlimited 套餐，符合条件的团队可享受折扣。 ✅
  * [userforge.com](https://userforge.com/) - 相互关联的在线用户画像（persona）、用户故事与情境映射，帮助设计与开发保持同步。最多支持 3 个 persona 和 2 名协作者免费使用。 ❓
  * [Visual Debug](https://visualdebug.com) - 一款可视化反馈工具，用于改善客户与开发者之间的沟通。 ❓
  * [Webex](https://www.webex.com/) - 视频会议服务，免费版每次会议最长 40 分钟，最多支持 100 名参会者。 🟡
  * [Webvizio](https://webvizio.com) - 网站反馈工具、网站评审软件和 bug 报告工具，可直接在已上线的网站与 Web 应用、图片、PDF 和设计文件上协作处理任务，简化 Web 开发协作流程。 ❓
  * [whereby.com](https://whereby.com/) - 一键发起视频对话，免费（前身为 appear.in）。 ✅
  * [windmill.dev](https://windmill.dev/) - Windmill 是一个开源开发者平台，可用少量 Python 和 Typescript 脚本快速构建生产级多步骤自动化流程与内部应用。免费用户最多可创建并加入 3 个非付费工作区。 ✅
  * [wistia.com](https://wistia.com/) - 视频托管服务，提供观众分析、高清视频分发和营销工具，帮助你了解访客；免费版包含 25 个视频，并带有 Wistia 品牌播放器。 🟡
  * [wormhol.org](https://www.wormhol.org/) - 简单直接的文件分享服务。可向任意数量的接收者分享不限数量的文件，单个文件最大 5GB。 ✅
  * [Wormhole](https://wormhole.app/) - 分享最大 5GB 的文件，采用端到端加密，有效期最长 24 小时。超过 5GB 的文件则通过点对点（P2P）传输直接发送。 ✅
  * [zoom.us](https://zoom.us/) - 提供安全的视频与网络会议附加功能。免费版会议时长限制为 40 分钟。 🟡
  * [Zulip](https://zulip.com/) - 实时聊天工具，采用类似电子邮件的独特话题串（threading）模式。免费版包含 10,000 条消息的搜索历史和最高 5 GB 的文件存储，另提供可自托管的开源版本。 🔴
  * [RightFeature](https://rightfeature.com/) - 轻松收集客户反馈，将客户反馈转化为产品路线图。收集、排序并交付真正对用户重要的功能。 ✅
  * [Zeitio](https://zeitio.com/) - 面向自由职业者和小团队的时间追踪与开票工具。免费版包含 1 个用户、3 个进行中的项目和每月 3 张发票。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-6"></a>
## CMS

  * [Contentful](https://www.contentful.com/) - Headless CMS，提供云端的内容管理与交付 API。免费附带一个 Community 空间，包含 5 个用户、25K 条记录、48 种 Content Types 和 2 种语言区域。 🟡
  * [Cosmic](https://www.cosmicjs.com/) - Headless CMS 与 API 工具包，为开发者提供免费的个人版计划。 ✅
  * [Crystallize](https://crystallize.com) - 面向电商的 Headless PIM，内置 GraphQL API。免费版包含不限用户数、1000 个目录条目、每月 5 GB 带宽和每月 25k 次 API 调用。 ✅
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层。DatoCMS 是基于 GraphQL 的 CMS，较低档位每月提供 100k 次调用。 ✅
  * [Hygraph](https://hygraph.com/) - 为小型项目提供免费层。GraphQL 优先的 API。从旧式方案迁移到 GraphQL 原生的 Headless CMS，以 API 优先的方式交付全渠道内容。 ✅
  * [Prismic](https://www.prismic.io/) - Headless CMS。提供内容管理界面与完全托管、可扩展的 API。Community 计划面向单个用户提供不限量的 API 调用、文档、自定义类型、资产和语言区域，满足下一个项目所需的一切。Open Content/开源项目可申请更大的免费计划。 ✅
  * [Sanity.io](https://www.sanity.io/) - 结构化内容平台，提供开源编辑环境和实时托管数据存储。不限项目数，每个项目免费包含不限管理员用户、3 个非管理员用户、2 个数据集、500K 次 API CDN 请求、10 GB 带宽和 5 GB 资产。 ✅
  * [Solo](https://soloist.ai) - Mozilla 出品的免费 AI 建站工具，只需几个简单输入即可为你的业务生成漂亮网站。免费自定义域名，无需信用卡。 ❓
  * [Squidex](https://squidex.io/) - 为小型项目提供免费层。API / GraphQL 优先。开源并基于事件溯源（event sourcing），自动为每次变更保存版本。 ✅
  * [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的 Headless CMS，兼容所有现代框架。Community（免费）版提供 Management API、Visual Editor、十个数据源、自定义字段类型、国际化（不限语言/区域设置）、Asset Manager（最多 2500 个资产）、图片优化服务、Search Query、Webhook，并包含每月 250GB 流量。 ✅
  * [TinaCMS](https://tina.io/) - Forestry.io 的替代品。开源的基于 Git 的 headless CMS，支持 Markdown、MDX 和 JSON。基础版免费，可供两名用户使用。 ✅
  * [WPJack](https://wpjack.com) - 在任意云上 5 分钟内搭好 WordPress！免费版包含 1 台服务器、2 个站点、免费 SSL 证书和不限量的 cron 任务。没有时间限制或到期——你的网站，由你做主。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-7"></a>
## 代码生成

* [Appinvento](https://appinvento.io/) - 免费的 no-code 应用构建器。可完整访问自动生成的后端源代码，并允许创建不限量的 API 和路由。免费计划包含 3 个项目和 5 张表。 ✅
* [DhiWise](https://www.dhiwise.com/) - 将 Figma 设计稿转换为动态的 Flutter 和 React 应用。其代码生成技术旨在优化构建可用于生产环境的移动端与 Web 体验的工作流程。 ✅
* [Karbon Sites](https://www.karbonsites.space) - AI 驱动的网站构建器与编辑器，可根据文本提示、草图或简历生成可用于生产环境的前端代码。功能包括原生 Android（APK）导出；免费版每月可生成 5 次（配置自定义 Gemini API key 可不限次数）。 🟡
* [Metalama](https://www.postsharp.net/metalama) - 面向 C# 的工具，在编译期间即时生成样板代码，保持源代码整洁。开源项目可免费使用；其商业友好的免费版最多包含 3 个 aspect。 ✅
* [Supermaven](https://www.supermaven.com/) - 适用于 VS Code、JetBrains 和 Neovim 的高速 AI 代码补全插件。免费版提供不限量的行内补全，主打超低延迟。 🟡
* [v0.dev](https://v0.dev/) - 由 Vercel 打造，v0 使用 shadcn/ui 和 Tailwind CSS 生成可直接复制粘贴的 React 代码。采用积分制，注册赠送 1,200 积分，每月免费 200 积分。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-8"></a>
## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) - 提供从编写、审查到部署代码的完整工作流，免费账户限 1 名用户、1 个仓库、100 MB 存储空间。 ✅
  * [codacy.com](https://www.codacy.com/) - 针对 PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript 的自动化代码审查，对不限量的公开和私有仓库免费。 ✅
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向 DevOps 的自动化 Infrastructure as Code 审查工具，可集成 GitHub、Bitbucket 和 GitLab（包括自托管）。除标准语言外，还能分析 Ansible、Terraform、CloudFormation、Kubernetes 等。（开源免费） ✅
  * [codecov.io](https://codecov.io/) - 代码覆盖率工具（SaaS），对开源项目免费，并提供 1 个免费私有仓库。 ✅
  * [CodeFactor](https://www.codefactor.io) - 面向 Git 的自动化代码审查。免费版包含不限用户数、不限公开仓库，以及 1 个私有仓库。 ✅
  * [coderabbit.ai](https://coderabbit.ai) - 与 GitHub/GitLab 集成的 AI 代码审查工具。免费层包含每小时 200 个文件、每小时 3 次审查、每小时 50 次对话。对开源项目永久免费。 ✅
  * [CodSpeed](https://codspeed.io) - 在 CI 流水线中自动进行性能追踪，借助精确且一致的指标，在部署前捕获性能回退。对开源项目永久免费。 ✅
  * [coveralls.io](https://coveralls.io/) - 展示测试覆盖率报告，对开源项目免费 ✅
  * [deepscan.io](https://deepscan.io) - 高级静态分析工具，可自动发现 JavaScript 代码中的运行时错误，对开源项目免费 ✅
  * [DeepSource](https://deepsource.io/) - DeepSource 持续分析源代码变更，发现并修复安全、性能、反模式、bug 风险、文档和风格等类别的问题。与 GitHub、GitLab 和 Bitbucket 原生集成。 ✅
  * [DiffText](https://difftext.com) - 即时找出两段代码之间的差异。完全免费使用。 ✅
  * [eversql.com](https://www.eversql.com/) - EverSQL - 排名第一的数据库优化平台。自动深入分析你的数据库与 SQL 查询，获取关键洞察。 ✅
  * [gerrithub.io](https://review.gerrithub.io/) - 为 GitHub 仓库免费提供 Gerrit 代码评审 ✅
  * [goreportcard.com](https://goreportcard.com/) - 面向 Go 项目的代码质量检查，对开源项目免费 ✅
  * [gtmetrix.com](https://gtmetrix.com/) - 提供报告和详尽的优化建议，帮助优化网站 ✅
  * [holistic.dev](https://holistic.dev/) - PostgreSQL 优化领域排名第一的静态代码分析器，可自动检测性能、安全及数据库架构方面的问题。 ✅
  * [houndci.com](https://houndci.com/) - 在 GitHub commit 上对代码质量进行评论，开源项目免费。 ✅
  * [prquorum.com](https://prquorum.com) - AI 代码审查 GitHub App，2 个仓库每月免费 50 次审查。 ✅
  * [reviewable.io](https://reviewable.io/) - 为 GitHub 仓库提供代码审查，公开仓库或个人仓库免费。 ✅
  * [scan.coverity.com](https://scan.coverity.com/) - 支持 Java、C/C++、C# 和 JavaScript 的静态代码分析，开源项目免费。 ✅
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) - 持续代码检查平台，开源项目免费。 ✅
  * [semanticdiff.com](https://app.semanticdiff.com/) - 为 GitHub pull request 和 commit 提供理解编程语言语义的 diff，公开仓库免费。 ✅
  * [shields.io](https://shields.io) - 面向开源项目的质量元数据徽章（badges）服务。 ✅
  * [sonarcloud.io](https://sonarcloud.io) - 为 Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy 等更多语言提供自动化源代码分析，开源项目免费 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-9"></a>
## 代码搜索与浏览

  * [CodeKeep](https://codekeep.io) - 代码片段版的 Google Keep。整理、发现并分享代码片段，附带强大的代码截图工具，内置预设模板和链接功能。 ✅
  * [libraries.io](https://libraries.io/) - 支持搜索 32 种不同的包管理器并提供依赖更新通知，开源项目免费 ✅
  * [Namae](https://namae.dev/) - 在 GitHub、Gitlab、Heroku、Netlify 等众多网站上搜索你的项目名是否可用。 ✅
  * [tickgit.com](https://www.tickgit.com/) - 将 `TODO` 注释（及其他标记）集中呈现，帮助定位值得回头改进的代码区域。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-10"></a>
## CI 与 CD

  * [appcircle.io](https://appcircle.io) - 企业级移动 DevOps 平台，自动化移动应用的构建、测试与发布上架，加快发布周期。免费版提供单次构建最长 30 分钟、每月 20 次构建和 1 个并发构建。 ✅
  * [appveyor.com](https://www.appveyor.com/) - 面向 Windows 的 CD 服务，开源项目免费 ✅
  * [bitrise.io](https://www.bitrise.io/) - 面向移动应用（原生或混合）的 CI/CD。免费版提供每月 200 次构建、10 分钟构建时长和 2 名团队成员；开源项目可获得 45 分钟构建时长、+1 并发和无限团队成员。 ✅
  * [buddy.works](https://buddy.works/) - 一款 CI/CD 服务，免费提供 5 个项目、1 个并发运行（每月 120 次执行） ✅
  * [Buildkite](https://buildkite.com) - CI Pipelines 对 3 名用户免费，每月 5k 任务分钟；Test Analytics 免费 ✅
开发者套餐每月包含 10 万次测试执行，开源项目还可获得更多免费额度。
  * [bytebase.com](https://www.bytebase.com/) - 数据库 CI/CD 与 DevOps 平台，20 名用户和 10 个数据库实例以内免费 ✅
  * [CircleCI](https://circleci.com/) - 面向 GitHub、GitLab 和 Bitbucket 仓库的托管式 CI/CD 服务，免费计划包含全部功能：多种资源规格、Docker、Windows、Mac OS、ARM 执行器、本地 runner、测试拆分、Docker Layer Caching 等高级 CI/CD 功能。私有项目每月 6000 分钟执行时长、协作者人数不限、30 个并行作业；开源项目最多 80,000 分钟免费构建时长。 ✅
  * [cirun.io](https://cirun.io) - 对公开 GitHub 仓库免费 ✅
  * [codemagic.io](https://codemagic.io/) - 每月免费 500 构建分钟 ✅
  * [deployhq.com](https://www.deployhq.com/) - 1 个项目，每天 10 次部署（每月 30 构建分钟） ✅
  * [LocalOps](https://localops.co/) - 30 分钟内在 AWS/GCP/Azure 上部署你的应用。可在任意云上搭建标准化应用环境，内置持续部署自动化与高级可观测性。免费计划支持 1 名用户和 1 个应用环境。 ✅
  * [Make](https://www.make.com/en) - 该工作流自动化工具可通过 UI 连接各类应用并自动化工作流，支持大量应用和最流行的 API。对公开的 GitHub 仓库免费；免费档包含 100 Mb、1000 次操作（Operations）以及 15 分钟的最小执行间隔。 ✅
  * [Mergify](https://mergify.com) - 面向 GitHub 的工作流自动化与合并队列（merge queue）服务，公开 GitHub 仓库可免费使用 ✅
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud 可加速 monorepo 在 CI 上的运行，提供远程缓存、跨机器分发任务，甚至自动拆分 e2e 测试运行等功能。其免费计划最多支持 30 名贡献者，并附带 150k credits 的充足额度。 ✅
  * [RunMyJob](https://runmyjob.io) - 借助可实时扩缩容的 Spike Instances，更智能地运行 GitHub Actions 和 GitLab CI 流水线。免费额度包含 400 vCPU-minutes、800 GB-minutes 和 10 个并发任务，配备高性能 runner（每个任务 12 vCPU 和 32 GB RAM）。 ❓
  * [Shipfox](https://www.shipfox.io/) - 以 2 倍速度运行你的 GitHub Actions，每月免费提供 3.000 构建分钟。 🟡
  * [Spacelift](https://spacelift.io/) - Infrastructure as Code 管理平台。免费计划功能：IaC 协作、Terraform module registry、ChatOps 集成、基于 Open Policy Agent 的持续资源合规、SAML 2.0 SSO，以及公共 worker pool 使用额度：每月最多 200 分钟 ✅
  * [Squash Labs](https://www.squash.io/) - 为每个分支创建一台 VM，并通过唯一的 URL 让你的应用可访问；公开与私有仓库数量不限；VM 规格最高 2 GB。 ❓
  * [Terramate](https://terramate.io/) - Terramate 是一个面向 Infrastructure as Code（IaC）工具的编排与管理平台，支持 Terraform、OpenTofu、Terragrunt 等。最多 2 个用户可免费使用，包含全部功能。 ✅
  * [Terrateam](https://terrateam.io) - GitOps 优先的 Terraform 自动化平台，提供由 pull request 驱动的工作流、通过 self-hosted runner 实现项目隔离，以及用于按顺序执行操作的 layered runs。最多 3 名用户可免费使用。 ✅
  * [Trigger.dev](https://trigger.dev) - 开源的后台任务与 AI agent 平台，提供持久化任务（durable tasks）、无超时限制和 realtime 能力。免费计划包含每月 $5 计算额度、20 个并发运行、不限任务数、5 名团队成员、10 个 schedule 和 1 天的日志保留。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-11"></a>
## 测试

  * [Appetize](https://appetize.io) - 在浏览器中直接使用这款基于云端的 Android 手机/平板模拟器与 iPhone/iPad 模拟器来测试你的 Android 和 iOS 应用。免费层包含 2 个并发会话，每月 30 分钟使用时长。应用大小无限制。 ✅
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试（visual testing）工具。项目数量不限，每月 5,000 张截图。开源项目可免费使用。 ✅
  * [Bencher](https://bencher.dev/) - 一套持续基准测试（benchmarking）工具套件，用于发现 CI 中的性能回退。对所有公开项目免费。 ✅
  * [BugBug](https://bugbug.io/) - 面向 Web 应用的轻量级测试自动化工具，易于上手且无需编写代码。可在自己的电脑上免费运行不限量的测试；云监控与 CI/CD 集成需额外支付月费。 ✅
  * [checkbot.io](https://www.checkbot.io/) - 浏览器扩展，用于检测你的网站是否符合 50 多项 SEO、速度与安全最佳实践。较小的网站可使用免费层。 🟡
  * [Checkly](https://checklyhq.com) - 面向现代 DevOps 的 code-first 合成监控（synthetic monitoring）服务，以远低于传统厂商的价格监控你的 API 和应用。基于 Monitoring as Code 工作流与 Playwright 构建。为开发者提供慷慨的免费额度。 ✅
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 一款面向开发者和 API 测试人员的免费工具，可检查某个域名的 API 是否启用了 CORS，并找出缺失之处，提供可操作的洞察。 ✅
  * [cypress.io](https://www.cypress.io/) - 为任何在浏览器中运行的东西提供快速、简单且可靠的测试。Cypress Test Runner 永久免费且开源，无任何限制。Cypress Dashboard 对开源项目免费，最多支持 5 名用户。 ✅
  * [everystep-automation.com](https://www.everystep-automation.com/) - 录制并回放在网页浏览器中执行的所有步骤并生成脚本，免费版功能选项较少。 ✅
  * [gridlastic.com](https://www.gridlastic.com/) - 提供 Selenium Grid 测试，免费计划包含最多 4 个并行 selenium 节点/10 次 grid 启动/每月 4,000 测试分钟。 ✅
  * [katalon.com](https://katalon.com) - 提供一个可帮助各种规模、处于不同测试成熟度阶段的团队的测试平台，包括 Katalon Studio、TestOps（含免费的 Visual Testing）、TestCloud 和 Katalon Recorder。 ✅
  * [Keploy](https://keploy.io/) - Keploy 是面向开发者的功能测试工具包。通过录制 API 调用生成 API 的 E2E 测试（KTests）以及 mock 或 stub（KMocks）。对开源项目免费。 ✅
  * [Lastest](https://lastest.cloud) - 快速发布，别搞坏东西。AI 支持的视觉验证与真正可信的测试。永久免费计划：1 个项目、每月 500 runner-minutes、1 个并发运行，无需信用卡。 ✅
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建 API 测试和负载测试。免费额度为每月最多可模拟 50 个并发用户、最长 60 分钟。 ✅
  * [lost-pixel.com](https://lost-pixel.com) - 为你的 Storybook、Ladle、Histoire story 和 Web 应用提供整体视觉回归测试。团队成员数量不限，开源项目完全免费，每月 7,000 张快照。 ✅
  * [OpenWebhook](https://openwebhook.co) - 临时 webhook URL 与实时检查器。无需注册。事件历史保存在浏览器中。自定义 slug 与远程转发为付费功能。 ✅
  * [pagegym.com](https://pagegym.com) - 加载行为与页面速度分析及优化工具。免费计划提供每天 10 次测试、每周 5 个实验、每月最多摄取 15 GB 数据。 ✅
  * [percy.io](https://percy.io) - 为任何 Web 应用、静态站点、样式指南或组件库添加视觉测试。团队成员数量不限，提供 Demo 应用，项目数量不限，每月 5,000 张快照。 ✅
  * [qase.io](https://qase.io) - 面向开发与 QA 团队的测试管理系统。管理测试用例、编排测试运行、执行测试、跟踪缺陷并衡量影响。免费层包含所有核心功能，提供 500MB 附件空间，最多支持 3 个用户。 ✅
  * [Repeato](https://repeato.app/) - 基于计算机视觉与 AI 构建的无代码移动应用测试自动化工具。 ✅
支持原生应用、Flutter、React Native、Web、Ionic 等多种应用框架。免费套餐仅限 iOS 10 个测试和 Android 10 个测试，但包含付费套餐的大部分功能，包括不限次数的测试运行。
  * [Requestly](https://requestly.com/) - 开源 Chrome 扩展，用于拦截、重定向和 Mock HTTP 请求。 🟡
提供 [Debugger](https://requestly.com/products/web-debugger/)、[Mock Server](https://requestly.com/products/mock-server/)、[API Client](https://requestly.com/products/api-client/) 和 [Session Recording](https://requestly.com/products/session-book/) 等功能。支持重定向 URL、修改 HTTP 头、模拟 API、注入自定义 JS、修改 GraphQL 请求、生成模拟 API 端点、记录包含网络与控制台日志的会话。免费版最多可创建 10 条规则。对开源项目免费。
  * [Sample Files](https://mzeeshan.me/tools/sample-files) - 涵盖视频、音频、文档和归档格式的免费测试文件合集，适用于测试与 QA。 ✅
  * [seotest.me](https://seotest.me/) - 免费的页面 SEO 网站检测工具。每天 10 次免费网站抓取。提供实用的 SEO 学习资源，并针对任何网站给出改进页面 SEO 效果的建议，不限技术栈。 ✅
  * [Sherlo](https://sherlo.io) - 面向 React Native 应用的视觉回归测试。免费计划：每月 1,000 张快照，支持 iOS 与 Android 模拟器。 ✅
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似 CodePen 的跨浏览器测试工具。UI-licious 让你像编写用户故事一样编写测试，并提供免费平台 UI-licious Snippets——无需注册即可在 Chrome 上运行不限次数的测试，每次运行最长 3 分钟。发现了 bug？可以复制该测试的唯一 URL 发给开发者，精确展示如何复现这个 bug。 ✅
  * [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过将页面的服务端渲染版本与常规版本进行可视化对比，检查任意 URL 的 SSR（服务端渲染）情况。 ✅
  * [testingbot.com](https://testingbot.com/) - Selenium 浏览器与设备测试，[开源项目免费](https://testingbot.com/open-source) ✅
  * [Testspace.com](https://testspace.com/) - 一个用于发布自动化测试结果的 Dashboard，以及一个借助 GitHub 把手工测试实现为代码的 Framework。该服务[对开源项目免费](https://github.com/marketplace/testspace-com)，账户每月可包含 450 条测试结果。 ✅
  * [tesults.com](https://www.tesults.com) - 测试结果报告与测试用例管理。可与主流测试框架集成。开源软件开发者、个人、教育工作者以及刚起步的小团队，可以在基础免费项目之外申请折扣和免费方案。 ✅
  * [UseWebhook.com](https://usewebhook.com) - 在浏览器中捕获并检查 webhook。可转发到 localhost，或从历史记录中重放。免费使用。 ✅
  * [Vaadin](https://vaadin.com) - 使用 Java 或 TypeScript 构建可扩展的 UI，借助集成的工具链、组件与设计系统更快迭代、更好地设计并简化开发流程。项目数量不限，并提供五年免费维护。 ✅
  * [VibeView](https://vibeview.io) - 基于浏览器的 iOS、Android、Apple TV 和 Android TV 模拟器，支持通过录制的操作流程或自然语言指令进行 AI 驱动的测试自动化。免费额度包含 2 个并发会话和每月 30 分钟的串流时长。自带 API key 可绕过内置的 AI 用量额度。 🟡
  * [webhook.site](https://webhook.site) - 通过自定义 URL 验证 webhook、出站 HTTP 请求或电子邮件。临时 URL 和电子邮件地址始终免费。 ✅
  * [websitepulse.com](https://www.websitepulse.com/tools/) - 提供多种免费的网络与服务器工具。 ❓
  * [kogiQA](https://kogiqa.com) - 一款无需选择器即可运行的 Web UI 自动化工具。每位开发者每月可免费获得 500 次 action。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-12"></a>
## 安全与 PKI

  * [aikido.dev](https://www.aikido.dev) - 一体化应用安全（AppSec）平台，涵盖 SCA、SAST、CSPM、DAST、Secrets、IaC、恶意软件检测、容器扫描、EOL 等。免费计划包含 2 个用户、10 个仓库、1 个云、2 个容器与 1 个域名的扫描。 ❓
  * [CertKit](https://www.certkit.io/certificate-management) - 管理 SSL 证书的签发、续期与监控。可搜索 Certificate Transparency（证书透明度）日志。Beta 结束后免费提供 3 张证书和 1 个用户。 ❓
  * [CertObserver CT Search](https://certobserver.com/ct-search) - 查找记录在 Certificate Transparency 日志中的公开 SSL/TLS 证书。CT 搜索免费，但 CT 监控为付费功能。 ✅
  * [CertPost](https://www.certpost.ai) - 对 443 端口或自定义端口（SMTP/IMAP）上的 SSL/TLS 证书进行实时监控。直接读取线上返回的证书，进行完整证书链校验，并在证书到期前通过 email 或 webhook 发出告警。免费版可永久监控 3 张证书。 ✅
  * [Corgea](https://corgea.com/) - 免费的自主安全平台，可在 20 多种语言和框架中查找、验证并修复不安全的代码和依赖包。免费计划包含 1 个用户和 2 个仓库。 ✅
  * [crypteron.com](https://www.crypteron.com/) - 云优先、对开发者友好的安全平台，防止 .NET 和 Java 应用中的数据泄露。 ✅
  * [CyberChef](https://gchq.github.io/CyberChef/) - 一款简单直观的 Web 应用，无需复杂工具或编程语言即可分析和解码/编码数据，堪称密码学与加密领域的瑞士军刀。所有功能免费使用，无任何限制。开源，可自行部署。 🟡
  * [Datree](https://www.datree.io/) - 开源 CLI 工具，通过确保 manifests 和 Helm charts 遵循最佳实践以及你所在组织的策略，来防止 Kubernetes 配置错误。 ✅
  * [Dependabot](https://dependabot.com/) - 为 Ruby、JavaScript、Python、PHP、Elixir 等语言自动更新依赖。 ✅
Rust、Java（Maven 和 Gradle）、.NET、Go、Elm、Docker、Terraform、Git 子模块和 GitHub Actions。
  * [DJ Checkup](https://djcheckup.com) - 使用这款免费的自动化体检工具扫描你的 Django 站点是否存在安全缺陷。由 Pony Checkup 网站 fork 而来。 ✅
  * [Doppler](https://doppler.com/) - 面向应用密钥和配置的通用 Secrets Manager，支持同步到多种云服务商。免费版支持 5 个用户，并提供基础访问控制。 ✅
  * [Dotenv](https://dotenv.org/) - 快速、安全地同步你的 .env 文件。不要再通过 Slack、电子邮件等不安全的渠道分享 .env 文件，再也不用担心丢失重要的 .env 文件。最多 3 名团队成员可免费使用。 ✅
  * [GitGuardian](https://www.gitguardian.com) - 通过自动化的 secrets 检测与修复，让密钥远离你的源代码。扫描你的 git 仓库，识别 350+ 种 secrets 及敏感文件——对个人及不超过 25 名开发者的团队免费。 ✅
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费在公开的 GitHub 仓库、gists、issues 及评论中搜索 2000 万条已泄露的密钥 🟡
  * [Have I been pwned?](https://haveibeenpwned.com) - 用于获取数据泄露信息的 REST API。 ✅
  * [HimitsuShell](https://himitsushell.com) - 一款 shell 脚本 DRM 编译器，通过内嵌的 shell 解释器和反调试技术将 shell 脚本转换为混淆的二进制文件（shc 的替代品）。提供免费无限制的网页版。 ❓
  * [hostedscan.com](https://hostedscan.com) - 面向 Web 应用、服务器与网络的在线漏洞扫描器。每月免费 10 次扫描。 ❓
  * [Infisical](https://infisical.com/) - 开源平台，用于在团队和基础设施范围内统一管理开发者的 secrets（敏感凭据）：覆盖从本地开发到预发布/生产环境所用的第三方服务。最多支持 5 名开发者免费使用。 ❓
  * [inspect.software](https://inspect.software/) - 自动化开源仓库审计的公开记录：涵盖安全态势、可维护性、依赖健康状况及恶意软件包检查，并提供版本化方法论与评级徽章。免费层：可完整访问所有已发布的报告，自动覆盖高于公共利益门槛的仓库（≥500 stars、≥50 forks，或组织所有且 ≥250 stars），提供可嵌入的徽章，并为低于门槛的仓库提供 100 点起始积分（5 次检查）。 ❓
  * [Internet.nl](https://internet.nl) - 测试 IPv6、DNSSEC、HTTPS、DMARC、STARTTLS、DANE 等现代互联网标准的合规性 ✅
  * [IntoDNS.ai](https://intodns.ai) - DNS 与邮件安全分析工具，可检测 SPF、DKIM、DMARC、DNSSEC、BIMI、MTA-STS 及 40+ 个黑名单，并提供 AI 生成的解释与修复建议。100% 免费，无需注册。 ✅
  * [letsencrypt.org](https://letsencrypt.org/) - 免费的 SSL 证书颁发机构（CA），签发的证书受所有主流浏览器信任 ✅
  * [meterian.io](https://www.meterian.io/) - 监控 Java、JavaScript、.NET、Scala、Ruby 和 NodeJS 项目依赖中的安全漏洞。1 个私有项目免费，开源项目数量不限。 ✅
  * [Mozilla Observatory](https://observatory.mozilla.org/) - 发现并修复你网站中的安全漏洞。 ✅
  * [Otterwatch](https://otterwatch.dev/) - 每日 SSL/TLS 证书监控：到期提醒（提前 30/7/1 天）、证书链与 OCSP 吊销检查，以及证书透明度（CT）签发历史。5 个域名永久免费，无需信用卡。 ✅
  * [Protectumus](https://protectumus.com) - 免费的网站安全检查、站点杀毒与面向 PHP 的服务器防火墙（WAF）。免费档注册用户可接收邮件通知。 ✅
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) - 针对公有云基础设施的高置信度失陷指标（IOC），部分内容发布在 GitHub（https://github.com/unknownhad/AWSAttacks）上，完整列表可通过 API 获取。 ✅
  * [pyup.io](https://pyup.io) - 监控 Python 依赖的安全漏洞并自动更新。1 个私有项目免费，开源项目不限数量。 ✅
  * [qualys.com](https://www.qualys.com/community-edition) - 查找 Web 应用漏洞，按 OWASP 风险进行审计 ❓
  * [SikkerKey](https://sikkerkey.com) - 支持机器认证的 secrets 管理器，免费额度包含 2 个项目、2 台已引导（bootstrapped）的机器、20 个 secrets 以及 7 天的审计日志保留。 ❓
  * [Smart Grow Vault](https://vault.smart-grow.app/) - 安全的企业级环境变量与机密（secrets）管理平台。免费层包含每个项目最多 3 个应用和 150 个机密。 ❓
  * [Socket](https://socket.dev) - 面向个人开发者、小团队和开源项目的免费供应链安全服务。提供免费应用和 firewall CLI 工具，保护你的代码免受存在漏洞或恶意的依赖项侵害。可检测 70+ 项供应链风险指标。 ❓
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) - 对任意 SSL Web 服务器的配置进行深入分析 ✅
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查与恶意软件扫描工具 ❓
  * [TestTLS.com](https://testtls.com) - 测试 SSL/TLS 服务的安全服务器配置、证书、证书链等，不限于 HTTPS。 ✅
  * [Virgil Security](https://virgilsecurity.com/) - 为数字解决方案提供实现端到端加密、数据库保护、IoT 安全等功能的工具与服务。面向最多 250 名用户的应用免费。 ❓
  * [semgrep](https://semgrep.dev) - 使用 SAST 和 SCA 扫描代码中的安全问题及存在漏洞的依赖。免费额度最多支持 10 名贡献者和 10 个私有仓库（公有仓库不限数量）。 ✅
  * [SnapEnv](https://snapenv.io/) - 面向开发团队的安全环境变量管理工具。静态数据采用 AES-256-GCM 加密，提供 CLI、Kubernetes operator 和审计日志。免费版永久包含 3 个项目、3 名成员，以及每个项目 3 个环境。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-13"></a>
## 身份验证、授权与用户管理

  * [360username](https://360username.com/) - 免费工具，可在 90+ 个社交平台上搜索某个用户名，找出匹配的个人资料。 🟡
  * [Aserto](https://www.aserto.com) - 面向应用和 API 的细粒度授权即服务。免费额度最高支持 1000 MAUs（月活用户）和 100 个 authorizer 实例。 ❓
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成 SSO、MFA、无密码认证等功能。提供面向前端和后端应用的 SDK。免费额度最多支持 1000 MAU 和 5 个身份提供商。 🟡
  * [Auth0](https://auth0.com/) - 托管式 SSO 服务。免费计划包含 25,000 MAU、不限量的 Social Connections、自定义域名等。 ✅
  * [Authgear](https://www.authgear.com) - 几分钟内即可为应用接入 Passwordless、OTP、2FA、SSO，前端组件全部内置。免费额度最高 5000 MAU。 ❓
  * [Authress](https://authress.io/) - 为任何项目提供认证登录与访问控制，可接入不限数量的身份提供方（Identity Provider），如 Facebook、Google、Twitter 等。前 1000 次 API 调用免费。 ✅
  * [Authy](https://authy.com) - 在多台设备上进行两步验证（2FA）并支持备份，可直接替代 Google Authenticator。最多 100 次成功认证免费。 ✅
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一套完整的授权管理系统，可用于编写、测试和部署访问策略，提供细粒度授权与访问控制。每月最多 100 个活跃 principal（月活跃主体）内免费。 ❓
  * [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，并提供登录、注册、用户资料等预构建 UI 组件。免费套餐包含不限数量的应用、每个应用 50,000 MRU 上限、3 个控制台席位等。 ✅
  * [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak 身份与访问管理（IAM）托管服务。免费额度为最多 100 个用户和 1 个 realm。 ✅
  * [Descope](https://www.descope.com/) - 高度可定制的 AuthN 流程，同时提供 no-code 与 API/SDK 两种接入方式。免费额度为每月 7,500 个活跃用户、50 个 tenant（其中最多 5 个 SAML/SSO tenant）。 ✅
  * [duo.com](https://duo.com/) - 为网站或应用提供两步验证（2FA）。10 个用户以内免费，涵盖所有认证方式、不限量集成及硬件令牌。 ✅
  * [Kinde](https://kinde.com/) - 简单、可靠的身份认证，几分钟即可集成到你的产品中，起步所需功能一应俱全，含 7,500 个免费 MAU。 ✅
  * [logintc.com](https://www.logintc.com/) - 通过推送通知实现双因素认证（2FA），最多 10 名用户免费，可用于 VPN、网站和 SSH。 ✅
  * [Logto](https://logto.io/) - 为你的产品开发、保护并管理用户身份，同时覆盖认证与授权。最多 5,000 MAU 免费，并提供开源自托管方案。 ✅
  * [MojoAuth](https://mojoauth.com/) - MojoAuth 让你在几分钟内即可在 Web、移动端或任何应用中轻松实现无密码（Passwordless）认证。 ✅
  * [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权。月活跃用户最多 100 名免费。 ✅
  * [Ory](https://ory.sh/) - AuthN/AuthZ/OAuth2.0/零信任（Zero Trust）托管安全平台。开发者账户永久免费，包含全部安全功能、不限团队成员数、200 日活跃用户，以及每月 25k 次权限检查。 ✅
  * [Permit.io](https://permit.io) - 授权即服务（Authorization-as-a-Service）平台，为可扩展的微服务提供 RBAC、ABAC 与 ReBAC，支持实时更新和无代码策略 UI。免费额度为 1,000 月活跃用户。 ✅
  * [Phase Two](https://phasetwo.io) - Keycloak 开源身份与访问管理。免费 realm 最多支持 1000 用户、10 个 SSO 连接，基于 Phase Two 的 Keycloak 增强容器，包含 [Organization](https://phasetwo.io/product/organizations/) 扩展。 ✅
  * [PropelAuth](https://propelauth.com) - 只需几行代码即可立即向任意规模的公司销售，最多 200 用户和 10k 封事务性邮件（Transactional Emails）免费（带水印标识："Powered by PropelAuth"）。 ✅
  * [Scalekit](https://scalekit.com) - 面向 B2B SaaS 的企业级 SSO（SAML、OIDC）、SCIM 用户开通及社交账号登录。免费额度包含 100 万 MAU、100 个组织、1 个 SSO 连接和 1 个 SCIM 连接。 ❓
  * [Stack Auth](https://stack-auth.com) - 开源身份认证，告别糟糕体验。对开发者最友好的解决方案，五分钟即可上手。可免费自托管，也提供托管 SaaS 版本，每月 10k 免费月活跃用户（MAU）。 🟡
  * [Stytch](https://www.stytch.com/) - 一站式平台，提供用于身份认证与欺诈防护的 API 和 SDK。免费计划包含 10,000 个月活跃用户、不限数量的组织、5 个 SSO 或 SCIM 连接，以及 1,000 个 M2M token。 🟡
  * [SuperTokens](https://supertokens.com/) - 开源用户身份认证服务，可原生集成到你的应用中——助你快速上手，同时掌控用户与开发者体验。最多 5000 MAUs 免费。 ✅
  * [Unkey](https://www.unkey.com/) - 开源的 API key 管理与限流平台。每月 100,000 次请求及 100 个活跃 API key 以内免费，可完整使用 key 创建、吊销与限流等全部功能。 ❓
  * [WorkOS](https://workos.com/) - 免费的用户管理与身份验证服务，最多支持 1 Million MAUs。支持邮箱 + 密码、社交登录、Magic Auth、MFA 等。 ✅
  * [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理服务，为你托管运维，支持多租户（B2B）场景。最多 25,000 次认证请求免费，且包含全部安全功能（OTP、Passwordless、Policies 等均不设付费墙）。 ✅


**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-14"></a>
## 移动应用分发与反馈

  * [Appho.st](https://appho.st) - 移动应用托管平台。免费套餐包含 5 个应用、每月 50 次下载，单个文件最大 100 MB。 ✅
  * [Diawi](https://www.diawi.com) - 将 iOS 和 Android 应用直接部署到设备。免费计划：可上传应用、密码保护链接、1 天有效期、10 次安装。 ✅
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用供测试。免费计划包含 1 个应用项目、3 个应用版本、500 MB 存储空间，以及每月 100 次应用安装。 ✅
  * [InstallOnAir](https://www.installonair.com) - 以 OTA（空中下载）方式分发 iOS 和 Android 应用。免费计划：上传不限量、私有链接，访客链接 2 天有效期，注册用户 60 天。 ✅
  * [Loadly](https://loadly.io) - iOS 和 Android 测试版应用分发服务，完全免费，下载不限量、高速下载、上传不限量。 ✅
  * [DistApp](https://distapp.app) - 管理和分发 Android、iOS 及桌面应用，适合测试人员或自行分发。可免费试用：2 个应用、1 个组织、100 MB 存储空间且下载不限量，也支持自行托管（self-hosted）。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-15"></a>
## 管理系统

  * [bitnami.com](https://bitnami.com/) - 在 IaaS 上部署已构建好的应用。免费管理 1 台 AWS micro 实例。 ✅
  * [Esper](https://esper.io) - 面向 Android 设备、带 DevOps 能力的 MDM 和 MAM。免费支持 100 台设备，含 1 个用户许可和 25 MB 应用存储空间。 ✅
  * [jamf.com](https://www.jamf.com/) - 面向 iPad、iPhone 和 Mac 的设备管理，3 台设备免费。 ✅
  * [Miradore](https://miradore.com) - 设备管理服务。随时掌握设备集群的最新状态，免费保护不限数量的设备。免费计划提供基础功能。 ✅
  * [ploi.io](https://ploi.io/) - 服务器管理工具，可轻松管理和部署你的服务器与网站。单台服务器免费。 ✅
  * [runcloud.io](https://runcloud.io/) - 主要面向 PHP 项目的服务器管理。最多 1 台服务器免费。 ✅
  * [serveravatar.com](https://serveravatar.com) - 通过自动化配置管理和监控基于 PHP 的 Web 服务器。单台服务器免费。 ✅
  * [xcloud.host](https://xcloud.host) - 界面友好的服务器管理与部署平台。提供支持单台服务器的免费套餐。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-16"></a>
## 消息传递与流处理

  * [Ably](https://www.ably.com/) - 实时消息服务，具备在线状态、消息持久化与可靠送达保证。免费计划包含每月 3m 条消息、100 个峰值连接和 100 个峰值频道。 ✅
  * [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ as a Service（RabbitMQ 托管服务）。Little Lemur 套餐：每月最多 100 万条消息、最多 20 个并发连接、最多 100 个队列、最多 10,000 条排队消息，跨不同 AZ 的多节点。 ✅
  * [courier.com](https://www.courier.com/) - 通过单一 API 接入推送、应用内消息、邮件、聊天、SMS 等多种消息渠道，并提供模板管理等功能。免费计划包含每月 10,000 条消息。 ✅
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可在数秒内开通的可扩展且安全的 serverless MQTT broker。每月 1M 会话分钟永久免费（无需信用卡）。 ✅
  * [Engage](https://engage.so/) - 面向 SaaS 的一体化客户互动与自动化工具（涵盖邮件、推送、SMS、产品引导、横幅等）。每月最多 1,000 名活跃用户可免费使用。 ✅
  * [engagespot.co](https://engagespot.co/) - 面向开发者的多渠道通知基础设施，提供预构建的应用内收件箱与无代码模板编辑器。免费套餐每月含 10,000 条消息。 ✅
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将您的 MQTT 设备接入云原生 IoT 消息代理。最多可免费接入 100 台设备（无需信用卡），永久有效。 ✅
  * [httpSMS](https://httpsms.com) - 将 Android 手机用作 SMS 网关来收发短信。每月可免费收发最多 200 条短信。 ❓
  * [knock.app](https://knock.app) - 面向开发者的通知基础设施。通过单次 API 调用即可发送到应用内、邮件、SMS、Slack 和推送等多个渠道。免费套餐包含每月 10,000 条消息。 ✅
  * [Novu.co](https://novu.co) - 面向开发者的开源通知基础设施。提供简单的组件和 API，可在同一处管理所有通信渠道：Email、SMS、Direct、In-App 和 Push。免费套餐包含每月 30,000 条通知，数据保留 90 天。 ❓
  * [Pingram.io](https://www.pingram.io/) - 5 分钟搭建通信基础设施。免费额度包括：100 条短信和通话、3000 封邮件、Push、Slack、MS Teams、WhatsApp 等。 🟡
  * [Pocket Alert](https://pocketalert.app) - 向你的 iOS 和 Android 设备发送推送通知。通过 API 或 Webhooks 即可轻松集成，并完全掌控你的提醒。免费计划：每天 50 条消息，限 1 台设备和 1 个应用。 ✅
  * [pubnub.com](https://www.pubnub.com/) - 面向 Swift、Kotlin 和 React 的消息服务，每月 100 万次事务（transaction），一次事务可包含多条消息。 ✅
  * [pusher.com](https://pusher.com/) - 实时消息服务。最多 100 个并发连接、每天 200,000 条消息以内免费。 ✅
  * [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。最多 20 个并发连接、每天 100,000 个事件以内免费。 ✅
  * [SMSGate](https://sms-gate.app) - SMS Gateway for Android™ 可通过云路由在你的设备上收发短信。云服务完全免费（日发送量超过 10,000 条消息时建议告知官方，以维持所有用户的服务质量）。 ✅
  * [SuprSend](https://www.suprsend.com/) - SuprSend 是一套通知基础设施，以 API-first 方式简化产品通知。只需一个通知 API，即可在多个渠道创建并投递事务性、定时任务（crons）和用户运营类通知。免费计划每月 10,000 条通知，支持摘要（digest）、批量（batch）、多渠道、偏好设置、租户（tenant）、广播（broadcast）等多种工作流节点。 ✅
  * [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io) 托管服务。全球部署，可选 AWS、GCP 和 Azure。永久免费：单条消息最大 4k、50 个活跃连接、每月 5GB 数据。 ✅
  * [webpushr](https://www.webpushr.com/) - Web Push 通知——最多 10k 订阅者免费，推送通知不限量，支持浏览器内消息。 ✅
  * [vask](https://vask.dev) - 实时消息服务，兼容 Pusher。Dev 档免费，但仅限本地开发使用，包含 100 个并发连接、每月 1,000,000 次广播、不限量的客户端事件、32kb 消息大小上限。 ❓

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-17"></a>
## 日志管理

  * [bugfender.com](https://bugfender.com/) - 免费额度：每天最多 100k 条日志，保留 24 小时 ❓
  * [log.dog](https://log.dog/) - LogDog 是一款远程调试/日志 SDK（支持 iOS 和 Android），带有 Web UI。可实时捕获所有日志、请求和事件，并允许对其进行拦截。每月 100MB 日志量以内免费。 ❓
  * [logflare.app](https://logflare.app/) - 免费额度：每个应用每月最多 12,960,000 条条目，保留 3 天。 ✅
  * [logtail.com](https://logtail.com/) - 基于 ClickHouse 的 SQL 兼容日志管理。每月免费 1 GB，日志保留三天。 ✅
  * [logzab.com](https://logzab.com/) - 审计跟踪管理系统。每月免费 1,000 条用户活动日志，保留 1 个月，最多支持 5 个项目。 ❓
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) - 由 Manage Engine 提供的日志管理服务。免费计划提供 50 GB 存储空间，存储保留 15 天，搜索保留 7 天。 ✅
  * [openobserve.ai](https://openobserve.ai/) - 每月 200 GB 免费摄取量（Ingestion），数据保留 15 天 🟡
  * [Smart Grow Logs](https://logs.smart-grow.app/) - 集中式日志管理平台，提供端到端加密、实时告警和多平台 SDK。免费额度为每天最多 3.000 条日志。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-18"></a>
## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) - 无需管理翻译文件，即可即时完成本地化。免费额度为每月最多 10,000 字符，语言数量不限。 ✅
  * [crowdin.com](https://crowdin.com/) - 开源项目可享不限数量的项目、字符串与协作者。 ✅
  * [Free PO editor](https://pofile.net/free-po-editor) - 对所有人免费。 ✅
  * [Lingo.dev](https://lingo.dev) - 开源的 AI 驱动 CLI，用于 Web 与移动应用本地化。可自带 LLM，或通过 Lingo.dev 托管的本地化引擎每月免费使用 10,000 个单词。 ✅
  * [lingohub.com](https://lingohub.com/) - 最多 3 名用户免费，开源项目永久免费。 ✅
  * [Localhero.ai](https://localhero.ai) - 在每次 pull request 时自动完成符合品牌风格的翻译，附带术语表和翻译记忆。免费额度为 1 个项目、每月 250 个翻译积分（约 4,000 词）。 ✅
  * [localazy.com](https://localazy.com) - 免费支持 1000 条源语言字符串，语言与贡献者数量不限，另面向初创企业和开源项目提供优惠。 ✅
  * [Localit](https://localit.io) - 快速、对开发者友好的本地化平台，提供无缝且免费的 GitHub/GitLab 集成、AI 辅助翻译与人工翻译，免费计划相当慷慨（含 2 个用户、500 个 key、项目数量不限）。 ✅
  * [localizely.com](https://localizely.com/) - 开源项目免费。 ✅
  * [Loco](https://localise.biz/) - 免费额度最高 2000 条翻译，翻译者人数不限，每个项目 10 种语言，每个项目 1000 个可翻译资源。 ❓
  * [POEditor](https://poeditor.com/) - 免费额度最高 1000 条字符串。 ✅
  * [SimpleLocalize](https://simplelocalize.io/) - 免费额度最高 100 个翻译 key，字符串数量不限，语言数量不限，另提供初创公司优惠。 ✅
  * [Texterify](https://texterify.com/) - 单个用户免费。 ✅
  * [Tolgee](https://tolgee.io) - 提供翻译额度有限的免费 SaaS 版本，自托管版本永久免费。 ✅
  * [transifex.com](https://www.transifex.com/) - 开源项目免费。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-19"></a>
## 监控

  * [Pingzo](https://www.pingzoapp.com) - 免费版提供 1 个 uptime/API 监控项，检查间隔为 15 分钟，并支持即时邮件告警。 ✅
  * [Accesserty Pulse](https://accesserty.com/en/pulse) - Accesserty Pulse 监控在线网站的交互信号与可检测到的无障碍（accessibility）风险。面向所有人提供免费套餐，并附带 14 天 Pro 试用。 ❓
  * [AlertKick](https://www.alertkick.com) - 集服务器安全（面向 Linux 的 eBPF agent）、uptime 监控、on-call 告警与状态页于一体的产品。免费版包含 10 个 uptime 监控与 heartbeat，检查间隔 5 分钟，数据保留 7 天。 ✅
  * [assertible.com](https://assertible.com) - 自动化 API 测试与监控。为团队和个人提供免费套餐。 ❓
  * [Better Stack](https://betterstack.com/better-uptime) - 将 uptime 监控、事件管理、on-call 排班/告警与状态页整合在单一产品中。免费计划包含 10 个监控项，检查频率为 3 分钟，并提供状态页。 ✅
  * [bleemeo.com](https://bleemeo.com) - 免费版支持 3 台服务器、5 个 uptime 监控项，用户数、仪表盘数量与告警规则均不设上限。 ✅
  * [checklyhq.com](https://checklyhq.com) - 面向开发者的开源 E2E / 拨测（Synthetic monitoring）与深度 API 监控服务。免费版包含 1 个用户，以及 10k 次 API 与网络检查 / 1.5k 次浏览器检查运行额度。 🟡
  * [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询某个 URL 或网站的 Core Web Vitals 历史数据。 ❓
  * [cronalive.com](https://cronalive.com) - 为 cron 任务提供 Heartbeat（心跳）监控，另含 HTTP 在线状态与 TLS 证书到期检查，并提供一个可根据你的 scheduler 自动创建检查项的 Laravel 包。免费额度：10 个检查项，HTTP 检查间隔最短 5 分钟，30 天历史记录，每月 50k 次 ping。 ✅
  * [cronitor.io](https://cronitor.io/) - 为 cron 任务、网站、API 等提供性能洞察与 uptime 监控。免费版包含 5 个监控项。 ✅
  * [watchcron.com](https://watchcron.com) - Cron 任务监控，通过心跳 ping 检测并支持告警。免费版最多可创建 5 个监控项，并提供邮件通知。 ✅
  * [datadoghq.com](https://www.datadoghq.com/) - 最多 5 个节点免费 ❓
  * [DeadBro](https://www.deadbro.com) - 按请求量计费的 Rails APM：提供实时 Trace、慢 SQL 检测、N+1 查询检测和错误追踪。每月 50k 请求以内永久免费，含 7 天数据保留、1 个应用、1 个 uptime 检查和邮件告警。无需信用卡。 ✅
  * [deadmanssnitch.com](https://deadmanssnitch.com/) - 监控 cron 任务的运行状态。免费提供 1 个 snitch（监控项），邀请他人注册可获得更多。 ✅
  * [downtimemonkey.com](https://downtimemonkey.com/) - 60 个 uptime 监控，5 分钟间隔。支持 Email、Slack 告警。 ✅
  * [drumbeats.io](https://drumbeats.io/) - 提供 Cron 定时任务、心跳（heartbeat）与在线率（uptime）监控，附带事件管理和状态页功能。免费额度为最多 50 个监控项，检测间隔 1 分钟，团队成员席位不限。 ✅
  * [economize.cloud](https://economize.cloud) - Economize 通过整理云资源，帮助用户理清云基础设施成本，从而进行优化并生成报告。每月在 Google Cloud Platform 上消费不超过 $5,000 的部分可免费使用。 🟡
  * [fivenines.io](https://fivenines.io/) - Linux 服务器监控服务，提供实时仪表盘与告警功能——最多可永久免费监控 5 台服务器，数据采集间隔 60 秒。无需绑定信用卡。 ❓
  * [FlareWarden](https://flarewarden.com) - 提供正常运行时间（Uptime）、内容、依赖项与 SSL 监控，支持多地区验证和状态页。免费套餐包含 15 个监控项、5 分钟检查间隔和 90 天历史记录。 ✅
  * [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud 是一个可组合的可观测性平台，将指标与日志同 Grafana 集成。免费额度：3 个用户、10 个仪表盘、100 条告警，指标存储使用 Prometheus 和 Graphite（10,000 条时间序列，保留 14 天），日志存储使用 Loki（50 GB 日志，保留 14 天） 🟡
  * [healthchecks.io](https://healthchecks.io) - 监控你的 cron 任务和后台任务。最多 20 个检查项免费。 ✅
  * [incidenthub.cloud](https://incidenthub.cloud/) - 云与 SaaS 状态页聚合服务 — 20 个监控项和 2 个通知渠道（Slack 和 Discord）永久免费。 ✅
  * [inspector.dev](https://www.inspector.dev) - 不到一分钟即可搭建完整的实时监控仪表盘，提供永久免费套餐。 ✅
  * [instatus.com](https://instatus.com) - 10 秒即可创建一个美观的状态页。永久免费，订阅者与团队成员数量均不限制。 ✅
  * [isitdownstatus.com](https://isitdownstatus.com) - 免费公开 JSON API，返回 500+ 热门服务（GitHub、Stripe、AWS 等）的实时状态。无需身份验证，已启用 CORS。 ✅
  * [LastPing](https://lastping.dev) - 面向 AI agent、cron 任务和 CI 的死人开关（dead man's switch）监控。个人免费，监控项和通知目标数量不限。让 AI agent 为包括它们自身在内的一切搭建监控。 ✅
  * [linkok.com](https://linkok.com) - 在线死链检查工具，最多 100 页的小型网站可免费使用，开源项目完全免费。 ✅
  * [loader.io](https://loader.io/) - 免费的负载测试工具，有一定限制。 ✅
  * [MarionetteOps.com](https://www.marionetteops.com/) - 服务器监控、公开状态页以及服务 uptime 监控。 ✅
  * [Middleware.io](https://middleware.io/) - Middleware 可观测性平台，提供对应用与技术栈的完整可见性，便于大规模监控和诊断问题。面向开发者社区提供永久免费计划：日志监控最多 1M 条日志事件，基础设施监控与 APM 最多支持 2 台主机。 ✅
  * [MonitorMonk](https://monitormonk.com) - 极简的 uptime 监控，配有美观的状态页。Forever Free 计划支持对 10 个网站或 API endpoint 进行 HTTPS、关键词、SSL 和响应时间监控，并提供 2 个仪表盘/状态页。 ✅
  * [netdata.cloud](https://www.netdata.cloud/) - Netdata 是一款收集实时指标的开源工具。产品仍在不断成长，也可以在 GitHub 上找到它！ ✅
  * [newrelic.com](https://www.newrelic.com) - New Relic 是一个可观测性平台，旨在帮助工程师打造更完善的软件。从单体架构到 serverless，你可以对一切进行插桩监控，然后分析、排查并优化整个软件栈。免费层提供每月 100GB 的免费数据摄入、1 个免费的全权限用户，以及不限量的免费基础用户。 🟡
  * [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot 提供网站与 API 的可用性（uptime）监控，以及 cron 任务和定时任务的监控，还提供状态页。前 5 个检查项以 3 分钟间隔检测免费。免费档通过 Slack、Discord 和 Email 发送告警。 ✅
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) - 检测网站是否被中国的防火长城（Great Firewall）屏蔽。通过对比中国服务器与美国服务器所检测到的 DNS 解析结果和 ASN 信息，识别 DNS 污染。 🔴
  * [pagecrawl.io](https://pagecrawl.io/) - 监控网站变化，最多可免费创建 6 个监控项，每日检查一次。 ❓
  * [pagertree.com](https://pagertree.com/) - 界面简洁的告警与值班（on-call）管理工具。免费版最多支持 5 名用户。 ✅
  * [phare.io](https://phare.io/) - Uptime Monitoring 免费，额度最高 100,000 个事件，支持不限数量的项目和不限数量的状态页。 ✅
  * [pingbreak.com](https://pingbreak.com/) - 现代化的 uptime 监控服务。可检测不限数量的 URL，并通过 Discord、Slack 或电子邮件接收宕机通知。 ✅
  * [Pingmeter.com](https://pingmeter.com/) - 提供 5 个可用性（uptime）监控项，检查间隔为 10 分钟。可监控 SSH、HTTP、HTTPS 及任意自定义 TCP 端口。 ✅
  * [pingpong.one](https://pingpong.one/) - 高级状态页平台，附带监控功能。免费版包含 1 个可自定义的公开状态页，并提供 SSL 子域名。开源项目和非营利组织可免费获得 Pro 计划。 ✅
  * [Prismix](https://prismix.dev) - 免费 REST API（GET /api/v1/statuses），返回 75+ 个 AI 服务（包括 OpenAI、Anthropic、Gemini、Mistral 等）的实时运行状态。无需身份验证。[提供免费额度，Pro 计划 $10/月] ✅
  * [Pulsetic](https://pulsetic.com) - 包含 10 个监控项、6 个月的历史 Uptime/日志、不限量的状态页以及自定义域名！永久免费，并提供不限量的邮件告警。无需信用卡。 ✅
  * [robusta.dev](https://home.robusta.dev/) - 基于 Prometheus 的强大 Kubernetes 监控。可接入自有的 Prometheus，或安装一体化套件。免费版支持最多 20 个 Kubernetes 节点。可通过 Slack、Microsoft Teams、Discord 等发送告警。可与 PagerDuty、OpsGenie、VictorOps、DataDog 等众多工具集成。 ✅
  * [Runframe](https://runframe.io/) - 值班告警、事件管理以及公开/私有状态页。免费计划包含最多 5 个用户、1 个团队、1 个值班排班、基础状态页、事件生命周期管理，以及 Slack 原生的事件响应。 ✅
  * [Servervana](https://servervana.com) - 面向大型项目和团队的高级 uptime 监控。提供 HTTP 监控、基于浏览器的监控、DNS 监控、域名监控、状态页等。免费版包含 10 个 HTTP 监控项、1 个 DNS 监控项和 1 个状态页。 ✅
  * [Simple Observability](https://simpleobservability.com) - 在统一平台上提供强大的服务器监控，整合指标与日志，无需复杂的设置。1 台服务器免费。 ✅
  * [sitesure.net](https://sitesure.net) - 网站与 cron 监控 - 2 个监控项免费。 ✅
  * [skylight.io](https://www.skylight.io/) - 前 100,000 次请求免费（仅支持 Rails） ❓
  * [statuscake.com](https://www.statuscake.com/) - 网站监控，免费提供不限次数的测试（有部分限制） ❓
  * [statusgator.com](https://statusgator.com/) - 状态页监控，免费提供 3 个监控项 ❓
  * [supaguard.app](https://supaguard.app/) - 从 20+ 个全球区域提供拨测（synthetic monitoring）。免费额度包含每月 1,000 次 browser checks，并附带 AI 驱动的自愈（self-healing）与自动化测试生成功能。 ❓
  * [superlog.sh](https://superlog.sh/) - 开源的 OpenTelemetry 可观测性平台（涵盖 traces、logs、metrics），并支持 AI agent 事故调查。免费额度为每月 1M spans、5M logs、10M metric points，数据保留 30 天，无需信用卡。完全开源，可自行托管。 🟡
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) - 服务器监控、uptime 监控、DNS 与域名监控。免费额度可监控 10 台服务器、10 个 uptime 监控项和 10 个域名。 ❓
  * [syagent.com](https://syagent.com/) - 非商业免费服务器监控服务，提供告警与指标。 ❓
  * [UptimeObserver.com](https://uptimeobserver.com) - 获取 20 个 uptime 监控项，检查间隔 5 分钟，并附带可自定义的状态页——即使用于商业用途。可通过 email 和 Telegram 接收无限制的实时通知。开始使用无需信用卡。 ✅
  * [uptimetoolbox.com](https://uptimetoolbox.com/) - 免费监控 5 个网站，检查间隔 3 分钟，提供公开状态页。 ✅
  * [Wachete](https://www.wachete.com) - 监控 5 个页面，每 24 小时检查一次。 ✅
  * [Watchgoose](https://watchgoose.com) - 面向定时任务、备份与后台作业的 Cron 任务与心跳（heartbeat）监控及状态页，支持 MCP server。免费额度：10 个检查项、200 条 ping 日志记录，提供邮件/聊天/webhook 告警，无需信用卡。符合条件的开源（OS）项目可申请 Open Source 支持计划。 ✅
  * [Xitoring.com](https://xitoring.com/) - Uptime 监控免费 20 个，Linux 和 Windows Server 监控免费 5 个，Status page 免费 1 个——另提供移动应用、多种通知渠道等更多功能！ ✅
  * [UptimeRobot](https://uptimerobot.com/) - 面向个人爱好项目的免费 uptime 监控服务。包含 50 个监控项，检查间隔为 5 分钟，支持 HTTP、ping、端口及关键词监控。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-20"></a>
## 崩溃与异常处理

  * [Axiom](https://axiom.co/) - 可存储最多 0.5 TB 的日志，保留期为 30 天。内置与 Vercel 等平台的集成，支持高级数据查询，并可通过 email/Discord 发送通知。 🟡
  * [Bugsink](https://www.bugsink.com/) - 兼容 Sentry-SDK 的错误追踪服务。免费额度为每月 5,000 个错误，自托管则可无限使用。 ❓
  * [bugsnag.com](https://www.bugsnag.com/) - 初始试用结束后，每月最多 2,000 个错误免费 ❓
  * [CatchJS.com](https://catchjs.com/) - JavaScript 错误追踪，附带截图与点击轨迹。开源项目免费。 ✅
  * [elmah.io](https://elmah.io/) - 面向 Web 开发者的错误日志记录与 uptime 监控服务。开源项目可免费获得 Small Business 订阅。 ✅
  * [Embrace](https://embrace.io/) - 移动应用监控。对每年最多 100 万用户会话的小团队免费。 ❓
  * [exceptionless](https://exceptionless.com) - 实时错误、功能、日志上报等服务。每月 3k 事件/1 用户免费。开源，可轻松自托管以无限量使用。 ❓
  * [GlitchTip](https://glitchtip.com/) - 简洁的开源错误追踪服务。兼容开源版 Sentry SDK。每月免费 1000 个事件，也可自托管且无数量限制。 ✅
  * [honeybadger.io](https://www.honeybadger.io) - 异常、uptime 与 cron 任务监控。对小团队和开源项目免费（每月 12,000 个错误）。 ✅
  * [Jam](https://jam.dev) - 一键生成对开发者友好的 bug 报告。免费计划支持不限量的 jams。 ❓
  * [memfault.com](https://memfault.com) - 云端设备可观测性与调试平台。针对 [Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp) 和 [Laird](https://app.memfault.com/register-laird) 设备提供 100 台设备的免费额度。 ✅
  * [rollbar.com](https://rollbar.com/) - 异常与错误监控服务，免费版每月 5,000 个错误、用户数不限、数据保留 30 天。 ✅
  * [Semaphr](https://semaphr.com) - 面向移动应用的一站式 kill switch（紧急远程开关）免费服务。 ❓
  * [sentry.io](https://sentry.io/) - Sentry 实时跟踪应用异常，提供小规模免费版：每月 5k 个错误/1 个用户；自托管则使用不受限。 ✅
  * [Whitespace](https://whitespace.dev) - 在浏览器中一键提交 bug 报告。免费版供个人使用，录屏数量不限。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-21"></a>
## 搜索

  * [algolia.com](https://www.algolia.com/) - 托管搜索服务，具备 typo 容错、相关性排序与 UI 库，便于快速搭建搜索体验。免费的 Build 计划包含 1M 文档和每月 10K 次搜索。另免费提供[开发者文档搜索](https://docsearch.algolia.com/)。 ✅
  * [bonsai.io](https://bonsai.io/) - 免费提供 1 GB 内存和 1 GB 存储。 ✅
  * [CommandBar](https://www.commandbar.com/) - 统一搜索栏即服务：基于 Web 的 UI 组件/插件，让用户可在产品内搜索内容、导航、功能等，提升可发现性。免费版支持最多 1,000 个月活用户（MAU），命令数不限。 ✅
  * [searchly.com](https://www.searchly.com/) - 免费提供 2 个索引和 20 MB 存储。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-22"></a>
## 教育与职业发展

  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供与认证对齐的免费课程，主题涵盖网络安全、网络技术和 Python。 ✅
  * [CloudCertPrep](https://cloudcertprep.io) - 免费、开源的 AWS 认证模拟考试题库，针对 CLF-C02 提供 1,050+ 道题目。功能包括限时模拟考试、按知识域练习、间隔重复和进度跟踪。 ✅
  * [CodeTrain](https://codetrain.ai) - AI 编程导师，在你自己的代码库上进行教学，绝不替你写代码。免费额度：每月 10 节浏览器内课程，Python/JS 在客户端运行，无需绑定信用卡。 ❓
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 由业界顶尖专家讲授的免费短课程，可在一小时或更短时间内上手最新的生成式 AI 工具与技术。 ✅
  * [DevOpsLesson](https://devopslesson.com/) - 免费 DevOps 教程、速查表（cheatsheets）、故障排查指南、学习路线图、面试准备以及 DevOps 工具：Dockerfile Linter、K8S YAML 文件生成器、Regex Tester。 ✅
  * [DevNet Academy](https://devnet-academy.com/) - 面向 Cisco DevNet Expert / CCIE Automation 认证的免费自学培训，涵盖 Python Click 与 Flask-RESTx。 ✅
  * [Django-tutorial.dev](https://django-tutorial.dev) - 免费的 Django 入门在线指南（适合作为第一个框架来学习），并为用户撰写的文章提供免费 dofollow 外链。 ✅
  * [edX](https://www.edx.org/) - 提供来自 250 家顶尖院校（包括哈佛和 MIT）的 4,000 多门免费在线课程，专注于计算机科学、工程和数据科学。 ✅
  * [Exercism](https://exercism.org) - 免费的开源编程教育平台，涵盖 75 种以上编程语言，并提供真人导师辅导。这是一个非营利组织。 ✅
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，提供大量来自经验丰富的专业人士的简历模板，可完整克隆、编辑并下载，针对 ATS 优化。 ❓
  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web 开发等领域的免费课程与认证。 ✅
  * [Full Stack Open](https://fullstackopen.com/en/) - 免费的大学水平课程，内容涵盖 React、Node.js、GraphQL、TypeScript 等现代 Web 开发技术。完全在线，可按自己的节奏学习。 ✅
  * [Interactive CV](https://interactive-cv.com) - AI 驱动的简历构建工具，支持实时编辑与 ATS 优化。免费层包括自动将 CV 转换为高级模板（Harvard、Europass）、PDF 导出、可查看无限职位发布洞察的职位追踪器，以及带聊天/语音功能的 CV 分享。 ❓
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 免费在线教程，学习基础与进阶的 HTML/CSS、JavaScript 和 SQL。 ✅
  * [LabEx](https://labex.io) - 通过交互式实验和真实项目，学习 Linux、DevOps、网络安全、编程、数据科学等技能。 ✅
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT OpenCourseWare 在线发布超过 2,500 门 MIT 课程的资料，免费与世界各地的学习者和教育者分享知识。YouTube 频道见 [@mitocw](https://www.youtube.com/@mitocw/featured)。 ✅
  * [Reactive Resume](https://rxresu.me) - 免费开源的简历构建工具，内置数十种模板。可导出为 PDF、DOCX，还支持（默认关闭、可自行开启）生成公开可分享的简历链接。 ✅
  * [Roadmap.sh](https://roadmap.sh) - 免费的学习路线图，涵盖从 Blockchain 到 UX Design 等开发领域的方方面面。 ✅
  * [The Odin Project](https://www.theodinproject.com/) - 免费的开源平台，课程内容专注于用于 Web 开发的 JavaScript 和 Ruby。 ✅
  * [W3Schools](https://www.w3schools.com/) - 提供 HTML、CSS、JavaScript 等 Web 开发技术的免费教程。 ✅
  * [WebTerm Learn](https://learn.webterm.app) - 在浏览器内的模拟终端中学习 Linux 终端、Git 和 Vim。全部 129 节课程免费；每门课程的第一节无需账号。 ❓

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-23"></a>
## 邮件

  * [Unitpost](https://www.unitpost.com/) - AI-First Transactional & Marketing Email Service. Free tier: 5,000 emails/mo, 200 emails/day, 10,000 contacts, 5 domains. No credit card required. SDKs, MCP and REST API available. ❓
  * [10minutemail](https://10minutemail.com) - 免费的临时邮箱，用于测试。 ✅
  * [AhaSend](https://ahasend.com) - 事务性邮件（Transactional Email）发送服务，免费额度为每月 1000 封邮件，免费计划中域名、团队成员、Webhook 和消息路由（message routes）数量均不限。 ✅
  * [AnonAddy](https://anonaddy.com) - 开源的匿名邮件转发服务，可免费创建无限个邮件别名 ❓
  * [anon.li Alias](https://anon.li/alias) - 开源的匿名电子邮件别名/转发解决方案，支持 PGP 加密与回复功能，免费套餐提供 10 个随机别名和 1 个自定义别名，并附带开发者 API 与 CLI。 ✅
  * [Antideo](https://www.antideo.com) - 免费套餐提供每小时 10 次 API 请求，可用于邮箱验证、IP 及电话号码校验。无需信用卡。 ✅
  * [Anypost](https://anypost.com) - 事务性与群发邮件 API。每月免费 3,000 封，之后低至每 1k 8¢。 🟡
  * [Atomic Mail](https://atomicmail.ai) - 专为 AI agent 打造的电子邮件服务，完全免费。支持以编程方式创建收件箱、使用自定义域名，并通过开放的 JMAP 标准（RFC 8620/8621）完整收发邮件；提供托管 MCP server。这是真实的邮箱服务，并非一次性/临时邮箱。 ❓
  * [Brevo](https://www.brevo.com/) - 免费额度为每月 9,000 封邮件、每天 300 封。 ✅
  * [Bump](https://bump.email/) - 免费 10 个 Bump email 地址，一个自定义域名 ❓
  * [Burnermail](https://burnermail.io/) - 免费提供 5 个一次性邮箱地址、1 个邮箱、7 天邮箱历史记录 ✅
  * [Buttondown](https://buttondown.email/) - Newsletter（邮件通讯）服务，最多 100 名订阅者免费。 ✅
  * [Canny Pigeons](https://cannypigeons.com/) - DMARC 监控平台，提供 DNS 漂移告警、IP 威胁情报，用户数不限。首个域名免费，无需信用卡。 ✅
  * [Conduit](https://conduit.email/) - 将收到的邮件转换为 webhook，从而通过邮件触发你的 API。该服务完全免费。 ✅
  * [Contact.do](https://contact.do/) - 把联系表单做成一个链接（相当于联系表单领域的 bitly）。 ✅
  * [debugmail.io](https://debugmail.io/) - 面向开发者的易用邮件测试服务器。 ✅
  * [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮箱域名的 DNS/SPF/DKIM/DMARC 设置是否正确，由 roundsphere.com 提供的免费服务。 ✅
  * [DNSExit](https://dnsexit.com/) - 自有域名下最多 2 个邮箱地址免费，含 100MB 存储空间。支持 IMAP、POP3、SMTP 以及 SPF/DKIM。 ✅
  * [Email Spam Tester](https://email-spam-tester.com/) - 检测邮件的技术配置、内容、链接权重与综合评分，并测试邮件最终会落入何处：收件箱、垃圾邮件还是促销标签。可对 Gmail、GMX、Yahoo、AOL 等邮箱服务商进行收件箱测试。免费使用，无需信用卡或注册。也可通过 API 和 MCP 调用。 ✅
  * [EmailGuard](https://emailguard.lazrek.com/) - 通过一个简单的 API 屏蔽一次性邮箱地址、捕捉拼写错误并验证 MX 记录。每月 100 次免费请求。 ✅
  * [EmailJS](https://www.emailjs.com/) - 这不是一个完整的邮件服务器，只是一个邮件客户端，你可以直接从客户端发送邮件而无需暴露自己的凭据。免费层包含：每月 200 次请求、2 个邮件模板、请求大小上限 50Kb、联系人历史记录受限。 ✅
  * [EmailLabs.io](https://emaillabs.io/en) - 每月免费发送最多 9,000 封邮件，每天最多 300 封。 ✅
  * [EmailQo Email Infrastructure Grader](https://emailqo.com/email-grader) - 免费的邮件基础设施评分工具，检查 SPF、DKIM、DMARC 及邮件服务器配置，为任意域名给出满分 100 的评分。无需注册。 ✅
  * [EmailOctopus](https://emailoctopus.com) - 免费版最多支持 2,500 位订阅者，每月可发送 10,000 封邮件 ✅
  * [Emailvalidation.io](https://emailvalidation.io) - 每月 100 次免费邮箱验证 ✅
  * [Emitlo](https://emitlo.com) - 每月免费 12,000 封邮件，提供 Email API 和 SMTP，支持 SPF/DKIM/DMARC，无需信用卡。 ✅
  * [EtherealMail](https://ethereal.email) - Ethereal 是一个假的 SMTP 服务，主要面向 Nodemailer 和 EmailEngine 用户（但不限于此）。它是一个完全免费的“反事务”（anti-transactional）邮件服务，消息永远不会被真正投递。 ✅
  * [forwardemail.net](https://forwardemail.net) - 为自定义域名提供免费邮件转发。可使用你的域名创建并转发不限数量的电子邮件地址（**注意**：因垃圾邮件问题，使用 .casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work 这些 TLD 需付费） ✅
  * [Imitate Email](https://imitate.email) - 用于在构建/测试（build/qa）和 CI/CD 流程中测试邮件功能的沙箱邮件服务器。免费账户永久享有每天 15 封邮件的额度。 ✅
  * [ImprovMX](https://improvmx.com) - 免费邮件转发。 ❓
  * [Inboxes App](https://inboxesapp.com) - 每天最多可创建 3 个临时邮箱，用完后可直接在便捷的 Chrome 扩展中删除。非常适合测试注册流程。 ✅
  * [inboxkitten.com](https://inboxkitten.com/) - 免费的临时/一次性邮箱收件箱，邮件最多保留 3 天后自动删除。开源，可自托管。 ❓
  * [Is It Disposable](https://isitdisposable.com/) - 检测并拦截一次性邮箱地址。免费套餐每月提供 250 次查询，且无需绑定信用卡。 ✅
  * [KaiMail](https://kaimail.net) - 为自定义域名提供邮件转发服务，支持 ARC/DKIM 签名。免费计划包含 1 个域名、1 个邮箱、每月 300 封邮件，单封邮件大小上限 1MB。另提供邮件接收 webhook 功能。针对开源项目设有特别计划。 ✅
  * [mail-tester.com](https://www.mail-tester.com) - 检测邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，每月 20 次免费。 ✅
  * [Maileroo](https://maileroo.com) - 面向开发者的 SMTP relay 与邮件 API。每月 5,000 封邮件，域名数量不限，附免费邮箱验证、黑名单监控、mail tester 等功能。 🟡
  * [mailcatcher.me](https://mailcatcher.me/) - 捕获邮件并通过 Web 界面展示。 ✅
  * [mailchannels.com](https://www.mailchannels.com) - 提供 REST API 与 SMTP 集成方式的 Email API，每月 3,000 封邮件以内免费。 ✅
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，120 次请求/小时（约合每月 86,400 次） ❓
  * [Maildroppa](https://maildroppa.com) - 免费额度：最多 100 位订阅者，邮件发送量不限，并包含自动化功能。 ✅
  * [MailerLite.com](https://www.mailerlite.com) - 免费额度为每月 1,000 名订阅者、每月 12,000 封邮件。 ✅
  * [MailerSend.com](https://www.mailersend.com) - Email API、SMTP 服务，事务性邮件每月 500 封免费额度，每天 100 次 API 请求 ✅
  * [mailinator.com](https://www.mailinator.com/) - 免费的公共邮件系统，可使用任意收件箱 ✅
  * [Mailjet](https://www.mailjet.com/) - 每月免费 6,000 封邮件（每日发送上限 200 封） ✅
  * [mailsac.com](https://mailsac.com) - 提供免费的临时邮箱测试 API、免费公共邮箱托管、外发邮件捕获（outbound capture），以及邮件转发到 slack/websocket/webhook（每月 API 调用上限 1,500 次） ✅
  * [Mailtrap.io](https://mailtrap.io/) - Email API 与 SMTP 服务，每月免费 4,000 封邮件，每日上限 150 封。Email Marketing 包含 500 个联系人和每月 1,500 封邮件。Email Sandbox 包含每月 50 封测试邮件、1 个 sandbox，最多可存储 10 封邮件。 ✅
  * [Mutant Mail](https://www.mutantmail.com/) - 免费提供 10 个 Email ID、1 个域名、1 个邮箱；所有 Email ID 共用同一个邮箱。 ✅
  * [OneSignal](https://onesignal.com/) - 每月 10,000 封邮件，无需信用卡。 ✅
  * [Orbisearch](https://orbisearch.com) - 免费的批量邮箱验证工具，每天 100 次验证，无需注册。 ✅
  * [Parsio.io](https://parsio.io) - 免费的 email 解析器（转发邮件、提取数据并发送到你的服务器） ✅
  * [Plunk](https://useplunk.com) - 每月免费 3,000 封邮件 ✅
  * [Postmark](https://postmarkapp.com/) - 每月 100 封邮件免费，DMARC 周报不限量。 ✅
  * [Proton Mail](https://proton.me/mail) - 提供免费安全邮箱账户服务，内置端到端加密，免费 1GB 存储空间。 ✅
  * [Reloop](https://reloop.sh) - 面向开发者的交易邮件 API 与 SMTP。免费计划：每月 3,000 封邮件、每天 200 封，含 1 个自定义域名和 1 个 agent inbox。 ✅
  * [Resend](https://resend.com) - 面向开发者的交易邮件 API。免费额度：每月 3,000 封、每天 100 封，可绑定 1 个自定义域名。 ✅
  * [SendBridge Mail Tester](https://sendbridge.com/mail-tester) - 免费邮件送达率测试，无需注册。会生成一个唯一的收件地址，然后分析 SPF、DKIM、DMARC、Rspamd 垃圾邮件评分、23+ 个 RBL 黑名单、反向 DNS 以及内容质量。测试次数不限，几秒出结果，报告页面可分享。 ✅
  * [Sender](https://www.sender.net) - 每月最多 15,000 封邮件，最多 2,500 个订阅者。 ✅
  * [Sendpulse](https://sendpulse.com) - 每月 500 个订阅者，每月 15,000 封邮件免费。 ✅
  * [SendRaven](https://sendraven.ai) - SendRaven 提供面向交易邮件和 agent 对话的邮件 API，支持入站回复与会话串。免费层包含每月 3,000 封外发邮件，联系人和入站回复不限量，需要绑定信用卡。 🟡
  * [SendStreak](https://www.sendstreak.com/) - 电子邮件框架即服务（Email framework as a service），在你自己的 SMTP 服务器（例如 AWS、Maileroo、Gmail）之上添加模板、自动化、历史记录等功能。免费额度为每天最多 100 封邮件，无时间限制。 ✅
  * [SimpleLogin](https://simplelogin.io/) - 开源、可自托管的电子邮件别名/转发解决方案。免费提供 10 个别名，带宽不限，回复/发送不限。教育人员（学生、科研人员等）可免费使用。 🔴
  * [SMTPfast](https://smtpfa.st/) - SMTPfast 是一款面向开发者的简洁邮件 API，免费额度包含每月 3,000 封邮件、1 个域名和 1,000 个联系人，无需信用卡。 ❓
  * [Substack](https://substack.com) - 免费的 newsletter 服务，不限数量；当你开始向订阅者收费时才需要付费。 🟡
  * [Suped](https://www.suped.com/) - 一款易于使用的 DMARC 监控平台。免费计划覆盖 1 个域名，每月最多 1,000 封邮件。 ✅
  * [Sweego](https://www.sweego.io/) - 面向开发者的欧洲事务性邮件 API，免费额度为每天 100 封邮件。 ✅
  * [temp-mail.io](https://temp-mail.io) - 免费的一次性临时邮箱服务，可同时使用多个邮箱地址，并支持邮件转发 ✅
  * [Temp-Mail.org](https://temp-mail.org/en/) - 利用多种域名生成临时 / 一次性邮箱的邮箱地址生成器，每次重新加载页面都会刷新出新的邮箱地址。服务完全免费，不设任何付费项目。 ✅
  * [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证最多 200 个邮箱地址，并可判断某个邮箱是否为临时邮箱。 ❓
  * [trashmail.com](https://www.trashmail.com) - 免费的一次性邮箱地址，支持邮件转发和地址自动过期。 ✅
  * [Tuta](https://tuta.com/) - 免费的安全邮箱服务提供商，内置端到端加密，无广告、无跟踪。免费提供 1GB 存储空间和一个日历（Tuta 也提供[付费方案](https://tuta.com/pricing)。）。Tuta 还是部分[开源](https://github.com/tutao/tutanota)的，因此可以自托管。 🔴
  * [Verifalia](https://verifalia.com/email-verification-api) - 实时邮箱验证 API，支持邮箱存在性确认和一次性邮箱地址检测；每天 25 次免费邮箱验证。 ✅
  * [verimail.io](https://verimail.io/) - 批量及 API 邮箱验证服务。每月 100 次免费验证。 ✅
  * [Waitlio](https://waitlio.com/) - 面向产品发布的候补名单（waitlist）管理软件。可创建品牌化候补名单页面，收集并验证邮箱订阅者，通过标签和数据分析管理注册用户。免费计划包含每月 100 名订阅者、1 个候补名单以及 API 访问权限。 ✅
  * [Wraps](https://wraps.dev) - 邮件自动化工作流，免费提供 5k 跟踪事件和无限联系人。 ❓
  * [ZeroSMTP](https://github.com/msgwing/ZeroSMTP) - 基于 msgwing.com 域名的免费 SMTP 中继，每天最多 200 封邮件，无付费套餐。只能从共享的 @msgwing.com 地址发信（不支持自定义域名）。提供 15 种语言的即用代码示例，以及 Windows Server/Linux/网络打印机配置指南。 ❓

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-24"></a>
## 功能开关管理平台

  * [Abby](https://www.tryabby.com) - 开源的 feature flags 与 A/B 测试服务。支持 Configuration as Code 与全类型化的 TypeScript SDK。与 Next.js、React 等框架深度集成。免费额度慷慨，扩容价格低廉。 ✅
  * [ConfigCat](https://configcat.com) - ConfigCat 是一项以开发者为中心的 feature flag 服务，团队规模不限，支持出色，价格合理。免费计划最多 10 个 flag、2 个环境、1 个产品，每月 500 万次请求。 ✅
  * [Flagsmith](https://flagsmith.com) - 放心发布功能；在 Web、移动端和服务器端应用中统一管理 feature flags。可使用我们的托管 API，部署到您自己的私有云，或在本地部署运行。 🟡
  * [GrowthBook](https://growthbook.io) - 开源的功能开关（feature flag）与 A/B 测试服务，内置贝叶斯统计分析引擎。最多 3 名用户可免费使用，feature flag 与实验数量不限。 ❓
  * [Rollgate](https://rollgate.io) - 托管于欧盟的 feature flag 管理服务，支持定时发布、即时回滚和 A/B 测试。内置 12 种 SDK。免费套餐每月最多 500K 次 API 请求，flag 数量不限，支持 3 名团队成员，无需信用卡。 ✅
  * [Hypertune](https://www.hypertune.com) - 类型安全的 feature flags、A/B 测试、数据分析与应用配置，支持 Git 风格的版本控制，flag 可在本地内存中同步求值。最多 5 名团队成员免费，feature flags 和 A/B 测试数量不限。 ❓
  * [Statsig](https://www.statsig.com) - 一个功能强大的平台，涵盖功能管理（feature management）、A/B 测试、数据分析等多种能力。其慷慨的免费计划提供不限席位、不限 feature flags、不限实验和动态配置，每月支持多达 100 万事件。 🟡
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域功能开关（feature toggles）管理平台。免费计划最多支持 10 个 flag、2 个环境、请求数不限。SDK、分析仪表盘、发布日历、Slack 通知以及所有其他功能均包含在永久免费计划中。 ✅


**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-25"></a>
## 字体

  * [Befonts](https://befonts.com/) - 提供多款独特字体，可用于个人或商业用途。 ✅
  * [Bunny](https://fonts.bunny.net) - 注重隐私的 Google Fonts 替代服务。 ✅
  * [dafont](https://www.dafont.com/) - 本站展示的字体版权归其作者所有，类型包括免费字体、共享字体、演示版本或公有领域字体。 ✅
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、Units Converter、Font Hinter 和 Font Submitter。 ✅
  * [Font of web](https://fontofweb.com/) - 识别某个网站上使用的全部字体及其使用方式。 ✅
  * [Font Squirrel](https://www.fontsquirrel.com/) - 提供可授权用于商业作品的免费字体。这些字体经人工精选，以易于使用的形式呈现。 ✅
  * [FontGet](https://www.fontget.com/) - 提供多种可下载的字体，并按标签整齐分类。 ✅
  * [fonts.xz.style](https://fonts.xz.style/) - 通过 CSS 向网站提供字体家族的免费开源服务。 🔴
  * [Fontsensei](https://fontsensei.com/) - 开源的 Google 字体库，由用户添加标签，并提供中日韩（CJK）字体标签。 ✅
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务。它收录了越来越多专业级字体，100% 免费用于个人和商业用途。 ✅
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以通过下载或链接到 Google 的 CDN，轻松快速地安装到网站上。 🔴

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-26"></a>
## 表单

  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费计划每月允许 250 次表单提交。提供友好现代的 GUI。可与 Google Sheets、Airtable、Slack、Email 等服务集成。 ❓
  * [Feathery](https://feathery.io) - 功能强大、对开发者友好的表单构建器。可用于搭建注册与登录、用户引导、支付流程、复杂金融应用等。免费计划每月最多 250 次提交，最多 5 个活跃表单。 ✅
  * [feedback.fish](https://feedback.fish/) - 免费方案总共可收集 25 条反馈提交。提供 React 和 Vue 组件，集成简单。 ❓
  * [FluidForms](https://fluidforms.ai/) - 具备 AI 驱动逻辑的表单构建器与后端服务。免费套餐包含每月 100 条回复、不限数量的表单（含 AI 创建的表单）、webhook 以及嵌入功能。 ✅
  * [Form.taxi](https://form.taxi/) - 用于接收 HTML 表单提交的端点，提供通知、垃圾信息拦截以及符合 GDPR 的数据处理。基础使用可享免费套餐。 ✅
  * [Formboost.app](https://formboost.app) - 面向开发者的表单后端服务，提供简单的 HTTP 端点，每月 500 次免费提交额度，含垃圾信息防护、邮件通知，并内置 Slack、Discord 与 Telegram 集成，无需自建后端。 ✅
  * [Formcarry.com](https://formcarry.com) - HTTP POST 表单端点，免费套餐每月允许 100 次提交。 ❓
  * [Formester.com](https://formester.com) - 在你的网站上分享并嵌入外观独特的表单——创建表单的数量不限，也没有按套餐限制功能。免费额度为每月最多 100 次提交。 ✅
  * [Forminit](https://forminit.com/) - 面向开发者的 Headless 表单后端服务。免费套餐每月允许 100 次表单提交，包含文件上传、服务端字段校验、邮件通知、垃圾信息防护以及 Zapier 集成。 🟡
  * [FormKeep.com](https://www.formkeep.com/) - 提供不限数量的表单，每月 50 次提交额度，包含垃圾信息防护、邮件通知，以及可导出 HTML 的拖拽式设计器。其他功能包括自定义字段规则、团队协作，以及与 Google Sheets、Slack、ActiveCampaign 和 Zapier 的集成。 ✅
  * [Form Plume](https://formplume.com) - Form Plume 是一个面向 HTML 和 JavaScript 表单的表单后端服务。只需一个 endpoint，即可获得垃圾信息过滤、邮件通知、文件上传、webhook 以及一个整洁的收件箱。免费额度为每月 500 次提交。 ❓
  * [formlets.com](https://formlets.com/) - 在线表单，每月不限单页表单数量，每月 100 次提交，支持邮件通知。 ❓
  * [forms.app](https://forms.app/) - 创建在线表单，具备条件逻辑、自动评分计算器和 AI 等强大功能。免费方案最多可收集 100 份回复，可将表单嵌入网站，或通过链接分享使用。 ✅
  * [formspark.io](https://formspark.io/) - 表单转电子邮件服务，免费套餐支持不限数量的表单，每月 250 次提交，由客户协助团队提供支持。 ✅
  * [Formspree.io](https://formspree.io/) - 通过 HTTP POST 请求发送电子邮件。免费层限制每个表单每月 50 次提交。 ✅
  * [Formsubmit.co](https://formsubmit.co/) - 为 HTML 表单提供简单易用的 endpoint。永久免费，无需注册。 ✅
  * [Formware.io](https://formware.io/) - 无需编程知识，几秒钟即可创建全响应式、吸引人的表单，并免费收集不限量的回复！ ✅
  * [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密归档的表单后端。可通过 UI 将提交内容转发至电子邮件、Slack 或 Zapier。可使用自己的前端，无需服务器代码。免费套餐提供不限数量的表单和每月 100 次提交。 ✅
  * [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费层可创建不限数量的表单并收集不限量的提交。附带预置模板、反垃圾功能和 100MB 文件存储。 ✅
  * [Jotform.com](https://jotform.com/) - 免费创建在线表单，收集提交内容、接受付款、自动化工作流，并使用内置电子签名功能签署文档。免费套餐包含 5 个表单、每月 100 次提交、10 份电子签名文档、10 次付款提交等。 ✅
  * [Kwes.io](https://kwes.io/) - 功能丰富的表单 endpoint，非常适合静态网站使用。免费套餐包含最多 1 个网站，每月最多 50 次提交。 ✅
  * [Makeform](https://www.makeform.ai/) - 基于对话的表单构建工具。免费版支持不限数量的表单和提交。99% 的功能免费，包括添加 Logo、条件逻辑、文件上传、支付、集成和 webhook。Pro 计划（$19/月）可移除 Makeform 品牌标识、使用自定义域名和团队功能。Business 计划（$59/月）提供 RBAC、邮箱验证和单点登录（SSO）。 ❓
  * [Pageclip](https://pageclip.co/) - 免费计划支持 1 个站点、1 个表单，每月 1,000 次提交。 ✅
  * [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站上嵌入 PDF 编辑器，将任意 PDF 转换为可填写的表单。免费计划支持不限数量的 PDF，每个 PDF 可提交 3 次。 ❓
  * [smartforms.dev](https://smartforms.dev/) - 功能强大且易于使用的网站表单后端，永久免费套餐每月允许 50 次提交，含 250MB 文件存储、Zapier 集成、CSV/JSON 导出、自定义重定向、自定义响应页面、Telegram 和 Slack 机器人、单一邮箱通知。 ✅
  * [staticforms.xyz](https://www.staticforms.xyz/) - 免费且无需任何服务端代码即可轻松集成 HTML 表单。用户提交表单后，包含表单内容的邮件会发送到你注册时使用的邮箱地址。 ✅
  * [Survicate](https://survicate.com/) - 用一个工具从所有来源汇集反馈并发送后续调查。借助 AI 自动分析反馈并提取洞察。免费提供邮件、网站、应用内或移动端调查、AI 调查创建器，以及每月 25 条回复。 ✅
  * [Tally.so](https://tally.so/) - 99% 的功能均可免费使用。免费版提供：不限数量的表单、不限数量的提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页面等更多功能。 ✅
  * [Typeform.com](https://www.typeform.com/) - 在网站上嵌入设计精美的表单。免费计划每个表单仅限 10 个字段，每月 100 条回复。 ✅
  * [Vidhook](https://vidhook.io/) - 通过体验出色的问卷收集反馈，回收率高。免费计划包含 1 个进行中的问卷、每个问卷 25 份回复，以及可自定义的模板。 ❓
  * [WaiverStevie.com](https://waiverstevie.com) - 提供 REST API 的电子签名平台。可以通过 webhook 接收通知。免费版会对已签署的文档添加水印，但允许不限量的信封（envelope）+ 签名。 ✅
  * [Web3Forms](https://web3forms.com) - 为静态网站与 JAMStack 网站提供联系表单，无需编写后端代码。免费计划包含无限表单、无限域名及每月 250 次提交。 ✅
  * [Wufoo](https://www.wufoo.com/) - 用于网站的快速表单服务。免费套餐每月限 100 次提交。 ✅
  * [FormNX](https://FormNX.com/) - 免费创建不限数量的表单，提交数量同样不限。可使用专业制作的 1000+ 表单模板，也可从零开始创建表单。提供邮件通知、表单逻辑、收款、文件上传、自定义感谢页等诸多功能。 🟡

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-27"></a>
## 生成式 AI

  * [Arize AX](https://arize.com) - 面向 AI 工程师/产品经理的 AI 工程平台，借助内置的 Alyx agent 对 AI 应用与 agent 进行评估和观测。免费版包含每月 25k spans 及 1gb 的数据摄取量。 ❓
  * [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) - 基于 AI 的音频增强 SaaS，可去除噪声与回声，同时保留自然清晰的人声。完全免费：一键增强不限次数，无需登录，支持 MP3/WAV/FLAC。 🟡
  * [Braintrust](https://www.braintrustdata.com/) - 面向 Gen AI 的 Evals、prompt playground 与数据管理。免费计划每周提供最多 1,000 条私有 eval 数据行。 🟡
  * [Clair](https://askclair.ai/) - Clinical AI Reference。学生可免费使用其专业工具套件，包含 Open Search、Clinical Summary、Med Review、Drug Interactions、ICD-10 Codes 和 Stewardship。另提供专业套件的免费试用。 ✅
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发与生产全生命周期中评估、测试并上线 LLM 应用。[#开源](https://github.com/comet-ml/opik/) ✅
  * [Future AGI](https://futureagi.com) - 开源平台，用于评估、观测和改进 LLM 与 AI agent 应用，提供 tracing、evals、模拟和 guardrails。免费层包含 50GB 存储、2K eval credits、每月 100K 次 AI 网关请求、1M token 的文本 agent 模拟和 60 分钟语音模拟，另有不限量的项目/席位，以及平台成本为 $0 的 BYOK LLM-as-judge。[#开源](https://github.com/future-agi/future-agi) ✅
  * [Gonka Broker](https://gonkabroker.com/) - 由去中心化 Gonka.ai GPU 网络提供的 OpenAI 兼容 API，服务开源模型。每月 1M+ 免费 token。可与众多 AI 工具轻松集成。 ✅
  * [Keywords AI](https://keywordsai.co) - 最好的 LLM 监控平台。用统一格式、2 行代码即可调用 200+ 个 LLM。每月 10,000 次免费请求，平台功能 $0！ ✅
  * [Langfuse](https://langfuse.com/) - 开源 LLM 工程平台，帮助团队协作调试、分析和迭代 LLM 应用。永久免费计划包含每月 50k 条 observations 和全部平台功能。[#开源](https://github.com/langfuse/langfuse) ✅
  * [LangWatch](https://langwatch.ai) - LLMOps 平台，帮助 AI 团队衡量、监控并优化 LLM 应用的可靠性、成本效率与性能。借助强大的 DSPy 组件，让工程师与非技术团队无缝协作，微调 GenAI 产品并投入生产。免费计划包含全部平台功能、每月 1k 条 traces 和 1 个 workflow DSPy 优化器。[#开源](https://github.com/langwatch/langwatch) ✅
  * [Latitude](https://latitude.so) - 开源（MIT 协议）LLM 可观测性与评估平台，用于在生产环境中追踪、监控和评估 AI agent。免费 Starter 计划包含每月 20K credits、30 天数据保留和不限席位数。[#开源](https://github.com/latitude-dev/latitude-llm) ✅
  * [Lumenfall.ai](https://lumenfall.ai/) - AI 媒体网关，通过 OpenAI 兼容 API 统一接入多家领先的图像生成模型。平台本身免费使用，零加价、无订阅费。大多数模型的推理费用按提供商原价计费，但 FLUX.1 [schnell] FP8 对注册用户永久免费、用量不限。内置故障转移与多提供商容灾能力。 ❓
  * [Maxim](https://www.getmaxim.ai) - LLM 评估与可观测性平台，提供 agent 模拟和 prompt playground。免费档每月 10k 条日志，可通过 BYOK 使用 prompt playground、模拟与评估功能。 ❓
  * [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai 为 Azure OpenAI、DeepSeek 和 Google Gemini 模型提供 100,000 字免费额度，可用于代码生成、深度研究和图像创作等强大工具。 ❓
  * [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费 AI 模型，包括 DeepSeek R1、V3、Llama 和 Moonshot AI。这些模型在自然语言处理方面表现出色，适合多样化的开发需求。注意这些模型虽可免费使用，但受速率限制。此外，OpenRouter 还提供付费模型以满足更高级的需求，例如 Claude、OpenAI、Grok、Gemini 和 Nova。 🟡
  * [Pollinations.AI](https://pollinations.ai/) - 易用的免费图像生成 AI，并提供免费 API。无需注册或 API key，提供多种集成到网站或工作流的方式。[#开源](https://github.com/pollinations/pollinations) ✅
  * [Portkey](https://portkey.ai/) - 面向 Gen AI 应用的控制面板，包含可观测性套件与 AI 网关。每月可免费发送并记录最多 10,000 个请求。 ❓
  * [ReportGPT](https://ReportGPT.app) - AI 驱动的写作助手。只要自带 API key，整个平台即可免费使用。 ❓
  * [telemetry.dev](https://telemetry.dev) - 基于 OpenTelemetry 的 AI/LLM 应用可观测性服务。追踪模型调用与工具步骤，记录 token、成本、延迟和错误；可用任意语言通过 HTTP 发送 OTLP，或使用 TypeScript SDK。免费计划包含每月 10,000 个 span、7 天保留期、1 个项目和 2 个席位，无需信用卡。 ❓
  * [Transcript LOL](https://transcript.lol/) - 使用 AI 将音频或视频转换为文字，并借助 LLM 生成摘要及其他洞察。免费额度为每天 2 次转录。可以上传文件、录制语音备忘，或使用 YouTube、Instagram 等平台的链接。免费版还支持 WhatsApp、Telegram，以及直接从 Google Drive、Dropbox、Box 和 OneDrive 等云存储导入文件。无需 API key，注册后即可使用。另提供适用于手机、桌面设备和 Chromebook 的应用。 🔴
  * [Zenable](https://zenable.io) - 通过以 Policy as Code 构建的 guardrails，即时自动修复来自 Cursor、Windsurf、Copilot 等工具的输出，使其符合公司的质量与合规标准。免费额度包括每天 100 次 MCP server 工具调用，以及通过 GitHub App 每天进行 25 次免费自动化 pull request 审查。 ❓

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-28"></a>
## CDN 与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) - 为 Bootstrap、Bootswatch 和 fontawesome.io 提供的公共 CDN ✅
  * [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最高 5 TB 免费 CDN 流量，19 个核心 PoP 节点，支持 1 个域名并提供 Universal SSL。 ✅
  * [cdnjs.com](https://cdnjs.com/) - 简单、快速、可靠，卓越的内容分发服务。cdnjs 是一个免费开源的 CDN 服务，由 Cloudflare 提供支持，被超过 11% 的网站所信赖。 ✅
  * [developers.google.com](https://developers.google.com/speed/libraries/) - Google Hosted Libraries 是一个内容分发网络（CDN），托管最流行的开源 JavaScript 库 🔴
  * [Gcore](https://gcorelabs.com/) - 全球内容分发网络（CDN），每月免费 1 TB 流量和 100 万次请求 ✅
免费 DNS 托管
  * [jsdelivr.com](https://www.jsdelivr.com/) - 免费、快速且可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。 🔴
  * [Microsoft Ajax](https://learn.microsoft.com/en-us/aspnet/ajax/cdn/overview) - Microsoft Ajax CDN 托管了 jQuery 等流行的第三方 JavaScript 库，方便你轻松地将它们添加到 Web 应用中 ✅
  * [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) - 免费 DDoS 防护 ✅
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) - 免费 DDoS 防护与 SSL 证书 ✅
  * [PromoProxy](https://promoproxy.net/) - 免费的云端 Secure Web Gateway（安全 Web 网关）。免费套餐最多支持 5 个用户，每天 1 GB。 ✅
  * [raw.githack.com](https://raw.githack.com/) - **rawgit.com** 的现代替代品，直接使用 Cloudflare 托管文件 ✅
  * [Skypack](https://www.skypack.dev/) - 100% 原生 ES Module 的 JavaScript CDN。每个域名每月 100 万次请求免费。 ✅
  * [statically.io](https://statically.io/) - 面向 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资源及图片的 CDN 🔴
  * [Stellate](https://stellate.co/) - Stellate 是一个速度极快、稳定可靠的 GraphQL API CDN，两个服务以内免费。 🟡
  * [toranproxy.com](https://toranproxy.com/) - Packagist 和 GitHub 的代理服务，让 CD 永不失败。个人使用（一名开发者）免费，不提供支持。 ✅
  * [UNPKG](https://unpkg.com/) - 覆盖 npm 上所有包的 CDN。 ✅
  * [weserv](https://images.weserv.nl/) - 图片缓存与缩放服务，借助全球缓存即时处理图片。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-29"></a>
## PaaS

  * [ampt.dev](https://getampt.com/) - Ampt 让团队无需复杂配置或基础设施管理，即可在 AWS 上构建、部署和扩展 JavaScript 应用。免费 Preview 计划包含每小时 500 次调用、每天 2,500 次调用和每月 50,000 次调用。自定义域名仅在付费计划中提供。 🟡
  * [anvil.works](https://anvil.works) - 只用 Python 即可开发 Web 应用。免费层提供不限数量的应用和 30 秒超时。 ✅
  * [Apply.build](https://apply.build/) - 免费构建和部署你的 GitHub 应用，提供 0.5 vCPUs / 512 MiB RAM，服务器位于欧洲，带自动防火墙和实时性能指标。可运行 Node.js、Python、Go、Java、静态站点、微服务等。 ✅
  * [appwrite](https://appwrite.io) - 项目数量不限且项目不会被暂停（支持 websockets），并提供身份验证服务。免费层每个项目含 1 个 Database、3 个 Bucket、5 个 Function。 ✅
  * [Clever Cloud](https://clever.cloud) - 来自欧洲的 PaaS，提供自动化部署、自动扩缩容、托管数据库和基于 Git 的工作流。注册赠送 €20 免费额度，含一个功能受限的 DEV 计划（免费 MySQL 和 PostgreSQL 数据库），以及 Heptapod 和 FS Buckets 等服务的免费额度。 ✅
  * [Choreo](https://wso2.com/choreo/) - AI 原生的内部开发者平台即服务。免费层包含最多 5 个组件，以及每月 $100 的额度。 ❓
  * [codenameone.com](https://www.codenameone.com/) - 面向 Java/Kotlin 开发者的开源跨平台移动应用开发工具链。可免费用于商业用途，项目数量不限 ✅
  * [Cohesivity](https://cohesivity.ai) - 专为 AI agent 打造的 Headless 后端与服务，涵盖托管、数据库、存储、LLM 及第三方 API。支持 agent 注册。免费额度包含 10 个项目、100K 次边缘请求、10 GB 对象存储、100 封邮件，以及每月 5 USD 的 AI 与搜索额度。 🟡
  * [Daestro](https://daestro.com) - Run compute jobs across Cloud Providers & On-Prem. The free tier includes up to 10 concurrent job runs, 2 compute spawns, self-hosted compute, 1 cloud provider, 1 container registry and 1 cron job. ❓
  * [Deno Deploy](https://deno.com/deploy) - 在全球边缘节点运行 JavaScript、TypeScript 和 WebAssembly 的分布式系统。免费额度为每天 100,000 次请求和每月 100 GiB 数据传输。 ✅
  * [Deplexo](https://deplexo.com/) - 面向开发者的 PaaS，用于部署和托管应用，支持基于 Git 的部署、自定义域名、自动 HTTPS 以及 Dockerfile。可运行 Node.js、Python、Go、Java、Rust、PHP、静态站点等。免费额度包含 1 个应用，配置为 0.25 vCPU、128 MB 内存、250 MB 磁盘和 100 GB 带宽。 🟡
  * [domcloud.co](https://domcloud.co) - 提供 GitHub CI/CD、SSH 及 MariaDB/Postgres 数据库的 Linux 托管服务。免费版提供 1 GB 存储空间和每月 1 GB 流量限额，且仅限使用免费域名。 ✅
  * [encore.dev](https://encore.dev/) - 后端框架，通过静态分析自动提供基础设施、免去样板代码等。为个人爱好项目提供免费云托管。 ✅
  * [faable.com](https://faable.com/) - 通过框架自动检测部署 Python 和 Node.js 应用。免费额度为每个项目提供 1 个 0.5 CPU / 1 GB RAM 实例、10 GB 带宽、每天 10 次成功部署，含自动 SSL 与内置 WAF，并支持 OAuth 2.0 / OIDC 认证。应用在无流量 2 小时后会休眠。服务器位于欧洲。 🟡
  * [flightcontrol.dev](https://flightcontrol.dev/) - 在你自己的 AWS 账户上，以类似 Git push 的工作流部署 Web 服务、数据库等。对团队仅 1 名开发者且使用个人 GitHub 仓库的用户提供免费额度。AWS 费用通过 AWS 计费，但可以使用 credits 和 AWS 免费套餐。 🟡
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 为 Elixir/Phoenix 应用提供一个永不休眠的免费实例，以及免费档的 PostgreSQL 数据库，限制为 2 个连接、10,000 行，且不提供备份。 ❓
  * [Northflank](https://northflank.com) - 通过强大的 UI、API 与 CLI 构建和部署微服务、任务与托管数据库。可从版本控制和外部 Docker registry 无缝扩缩容器。免费额度包含两个服务、两个 cron job 和 1 个数据库。 ✅
  * [Ownkube](https://ownkube.io) - 在你自己的 AWS 账户中免费获得单节点 k3s，通过 git push 即可运行应用、数据库和 worker，以最高效率使用你的 AWS credits。 🟡
  * [pipedream.com](https://pipedream.com) - 为开发者打造的集成平台。可基于任意触发器构建任意工作流。工作流即代码，可[免费运行](https://docs.pipedream.com/pricing/)。无需管理任何服务器或云资源。 ✅
  * [pythonanywhere.com](https://www.pythonanywhere.com/) - 云端 Python 应用托管。Beginner（入门）账户免费，提供 1 个 Python web 应用，域名为 your-username.pythonanywhere.com，512 MB 私有文件存储，以及 1 个 MySQL 数据库 ✅
  * [Runsite](https://runsite.app/) - 欧洲 PaaS，支持从 GitHub 自动部署 Web 服务或静态站点（免费 1 个 Web 实例，0.1 vCPU/256 MB），提供托管的 PostgreSQL 与 Valkey(Redis)（免费 30 天）、Transactional Email（每月免费 3,000 封）、S3 兼容存储（免费 5 GB），启动网站所需一应俱全。服务器位于德国。 ✅
  * [Val Town](https://www.val.town) - 面向脚本、HTTP 端点和 cron 定时任务的协作式 TypeScript/JavaScript serverless 平台。免费计划包含不限量的公开 vals、最短 15 分钟的 cron 间隔、每次运行 1 分钟的实际执行时长（wall-clock）上限，以及 3 天的日志保留。免费版不支持自定义域名。 ✅
  * [WunderGraph](https://cloud.wundergraph.com) - 开源平台，帮助你快速构建、发布和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。[免费计划](https://wundergraph.com/pricing)提供最多 3 个项目、1GB 出站流量和每月 300 分钟构建时间。 ✅
  * [YepCode](https://yepcode.io) - 在 serverless 环境中连接各类 API 与服务的一体化平台。既拥有 NoCode 工具的敏捷与优势，又具备使用编程语言的全部能力。免费额度包含 [1.000 yeps](https://yepcode.io/pricing/)。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-30"></a>
## BaaS

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，在你的应用后端把多个应用连接起来。例如，当应用中触发某个事件时发送 Slack 消息，或向 Google Sheet 添加一行。免费额度为每月最多 5,000 个任务。 🟡
  * [back4app.com](https://www.back4app.com) - Back4App 是一个基于 Parse Platform 的易用、灵活且可扩展的后端服务。 ✅
  * [backendless.com](https://backendless.com/) - 面向移动端和 Web 的 BaaS，免费提供 1 GB 文件存储、每月 50,000 条推送通知，以及表中 1000 个数据对象。 ✅
  * [connectycube.com](https://connectycube.com) - 不限量的聊天消息、点对点语音与视频通话、文件附件和推送通知。应用用户数不超过 1000 时免费。 ❓
  * [convex.dev](https://convex.dev/) - 响应式后端即服务（BaaS），托管你的数据（支持关联关系的文档与可序列化的 ACID 事务）、serverless 函数，以及向各类客户端流式推送更新的 WebSocket。小项目免费——最多 1M 条记录、每月 5M 次函数调用。 ❓
  * [ETLR](https://etlr.io) - 使用 YAML 定义、版本管理并部署自动化脚本。面向开发者的拖拽式自动化工具替代方案。可用于定时任务、AI agent 和基础设施监控。免费额度为每月 100 credits。 ✅
  * [Flutter Flow](https://flutterflow.io) - 无需编写一行代码即可构建 Flutter 应用 UI。还提供 Firebase 集成。免费计划包含 UI Builder 的完整访问权限和免费模板。 ✅
  * [getstream.io](https://getstream.io/) - 用几个小时（而非几周）构建可扩展的应用内聊天、消息、音视频和 Feed 流。 ✅
  * [IFTTT](https://ifttt.com) - 自动化你常用的应用和设备。免费 2 个 Applet。 ✅
  * [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费 100 个任务，15 分钟（执行间隔）。 ✅
  * [LeanCloud](https://leancloud.app/) - 移动后端服务。免费提供 1GB 数据存储、256MB 实例、每日 3K API 请求和每日 10K 推送。（API 与 Parse Platform 非常相似） ✅
  * [nhost.io](https://nhost.io) - 面向 Web 和移动应用的 Serverless 后端。免费计划包含 PostgreSQL、GraphQL (Hasura)、身份验证、存储和 Serverless Functions。 ✅
  * [onesignal.com](https://onesignal.com/) - 免费推送通知不限量。每月 10,000 封邮件发送额度，联系人数量不限，并可使用 Auto Warm Up（自动预热）。 ✅
  * [paraio.com](https://paraio.com) - 后端服务 API，提供灵活的身份验证、全文搜索与缓存。单个应用免费，含 1GB 应用数据。 ❓
  * [pubnub.com](https://www.pubnub.com/) - 免费推送通知，每月最多 100 万条消息，日活跃设备最多 100 台 ✅
  * [pusher.com](https://pusher.com/beams) - 为 2000 名月活跃用户免费提供不限量的推送通知。一个 API 即可同时覆盖 iOS 和 Android 设备。 ✅
  * [simperium.com](https://simperium.com/) - 即时自动地将数据移动到任何地方，支持多平台，结构化数据的发送与存储不限量，每月最多 2,500 名用户 ❓
  * [snill.ai](https://snill.ai) - AI 无代码平台，可将自然语言描述转换为完整的业务系统，包含关系型数据库、仪表盘、工作流、REST API 和 webhook。面向个人用户的免费套餐包含 2 个应用、1,000 条记录和每天 10 次 AI 请求。 ❓
  * [Supabase](https://supabase.com) - 开源的 Firebase 替代方案，用于构建后端。免费计划提供身份验证、实时数据库与对象存储。 ✅
  * [tyk.io](https://tyk.io/) - 提供身份验证、配额、监控与分析功能的 API 管理服务，有免费的云端版本。 🟡
  * [zapier.com](https://zapier.com/) - 将你使用的应用连接起来，实现任务自动化。免费额度：每 15 分钟可运行 5 个 Zap，每月 100 次任务。 🟡
更新时间、五个活跃的自动化、Webhook。


**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-31"></a>
## 低代码平台

  * [appsmith](https://www.appsmith.com/) - 低代码项目，用于构建管理后台、内部工具和仪表盘。可集成 15+ 种数据库及任意 API。 ✅
  * [BudiBase](https://budibase.com/) - Budibase 是一个开源低代码平台，可在几分钟内创建内部应用。支持 PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s ✅
  * [Clappia](https://www.clappia.com) - 一个低代码平台，用于构建业务流程应用，支持自定义的移动端和 Web 应用。提供拖拽式界面，具备离线支持、实时位置追踪等功能，并可与多种第三方服务集成。 ❓
  * [lil'bots](https://www.lilbots.io/) - 在线编写并运行脚本，可免费使用内置的 OpenAI、Anthropic、Firecrawl 等 API。适合构建 AI 智能体、内部工具，并可与团队共享。免费层包含完整的 API 访问权限、AI 编程助手，以及每月 10,000 次执行额度。 🟡
  * [manubes](https://www.manubes.com) - 功能强大的无代码云平台，专注于工业生产管理。单个用户免费，每月包含 100 万次工作流活动（[另有德文版](https://www.manubes.de)）。 ❓
  * [Mendix](https://www.mendix.com/) - 面向企业的快速应用开发（RAD）平台，提供不限量的可访问沙箱环境，支持全部用户，每个应用 0.5 GB 存储和 1 GB RAM。免费版还包含 Studio 和 Studio Pro IDE。 ✅
  * [outsystems.com](https://www.outsystems.com/) - 面向本地部署或云端的企业级 web 开发 PaaS，免费的“个人环境”（personal environment）方案提供不限量代码和最多 1 GB 数据库 ✅
  * [ReTool](https://retool.com/) - 用于搭建内部应用的低代码平台。Retool 高度可定制，只要能用 JavaScript 和 API 写出来的东西，就能在 Retool 里做出来。免费版每月最多支持 5 名用户，应用数量和 API 连接数不限。 🟡
  * [ToolJet](https://www.tooljet.com/) - 可扩展的低代码框架，用于构建业务应用。可连接数据库、云存储、GraphQL、API 端点、Airtable 等，并通过拖拽式应用构建器搭建应用。 ✅
  * [UI Bakery](https://uibakery.io) - 低代码平台，帮助更快构建自定义 Web 应用。支持拖拽搭建 UI，并可通过 JavaScript、Python 和 SQL 进行高度定制。提供云端与自托管两种方案。最多 5 名用户免费。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-32"></a>
## 虚拟主机

  * [Alwaysdata](https://www.alwaysdata.com/) - 1 GB 免费网页托管，支持 MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。可自定义 Web 服务器，支持通过 FTP、WebDAV 和 SSH 访问。包含邮箱、邮件列表和应用安装器。免费套餐不支持自定义域名。 ✅
  * [Awardspace.com](https://www.awardspace.com) - 免费网页托管，附赠一个免费短域名，支持 PHP、MySQL、应用安装器、邮件发送，且无广告。 ✅
  * [boomurl](https://boomurl.com) - 无需账号即可将静态站点（HTML/Markdown/图片/PDF 或整个文件夹）发布到即时可用的 HTTPS URL；免费版会显示一个小横幅。支持自定义域名。 ✅
  * [Bubble](https://bubble.io/) - 可视化编程，无需写代码即可构建 Web 和移动应用；免费版带有 Bubble 品牌标识。 ✅
  * [dAppling Network](https://www.dappling.network/) - 面向 Web3 前端的去中心化网页托管平台，专注于提升在线率与安全性，并为用户提供额外的访问入口。 ❓
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在 App Platform Starter 档位可免费构建并部署三个静态站点。 🟡
  * [FreeFlarum](https://freeflarum.com/) - 由社区驱动的免费 Flarum 托管服务，最多支持 250 名用户（捐赠可移除页脚水印）。 ❓
  * [Harvis.dev](https://harvis.dev) - 通过 CLI（`npx harvis`）托管静态站点，无需配置文件或构建步骤。包含免费子域名、免费表单提交收集、GitHub Actions 集成、CloudFlare CDN、免费 SSL。 ❓
  * [Koyeb](https://www.koyeb.com/) - Serverless 平台，提供免费的 Hobby 计划，含每月 550 小时免费计算时长（Free 层为 512 MB RAM）、1 个免费 PostgreSQL 数据库，以及自定义域名 SSL。 🟡
  * [MDB GO](https://mdbgo.com/) - 免费托管一个项目，容器 TTL 为两周，每个项目 500 MB 内存，SFTP 提供 1G 磁盘空间。 ✅
  * [Mirin](https://mirin.com) - 面向开发者所构建 React、Vue 或 Svelte 组件网站的建站平台，提供可视化编辑、表单、数据分析以及全球 CDN 托管。免费额度包含 1 个站点，页面数量与表单提交量不限。 ✅
  * [Neocities](https://neocities.org) - 静态托管，提供 1 GB 免费存储空间和 200 GB 流量。 ❓
  * [Netlify](https://www.netlify.com/) - 构建、部署并托管静态站点/应用，每月免费 300 credits（相当于 30 GB 流量）。 ✅
  * [PandaStack](https://www.pandastack.io/) - 面向开发者的生态系统，提供多种形式的 web 托管（静态网站托管、基于容器的托管、WordPress 以及众多其他托管应用，几次点击即可部署）。免费提供 1 个 web 托管（静态或容器）和 1 个数据库，含 100GB 流量和每月 300 构建分钟。 🟡
  * [pantheon.io](https://pantheon.io/) - 提供 Drupal 与 WordPress 托管、自动化 DevOps 及可弹性扩展的基础设施。对开发者和代理机构免费。不支持自定义域名。 ✅
  * [Qoddi](https://qoddi.com) - 类似于 Heroku 的 PaaS 服务，以开发者为中心，功能一应俱全。免费额度适用于静态资源、预发布（staging）环境和开发者应用。 🟡
  * [readthedocs.org](https://readthedocs.org/) - 免费的文档托管服务，支持版本管理、PDF 生成等更多功能 ✅
  * [render.com](https://render.com) - 统一云平台，可用于构建和运行应用与网站，提供免费 SSL、全球 CDN、私有网络以及从 Git 自动部署，web 服务、数据库和静态网页均有完全免费的套餐。 ✅
  * [Revdoku](https://revdoku.com/) - 直接从 ChatGPT、Claude、Codex 等 AI agent 发布文件、报告和自定义微型站点，可设为公开或密码保护网站。免费额度：2GB 存储、2 个在线站点/应用、1 个数据库（25 MB）、3 个 AI 连接、每个 bucket 1k 个文件（单文件 100 MB）、基础分析。 ❓
  * [ShipStatic](https://shipstatic.com) - AI agent 可自主驱动的静态托管服务：运行 `npx @shipstatic/ship ./dist` 即可上线网站，无需安装、无需注册、无需代码仓库、无需构建。同时提供 MCP、SDK 和 API。免费账户的网站可永久保留，附带自动 HTTPS、全球边缘分发和不限流量带宽；自定义域名为付费功能。 ❓
  * [SourceForge](https://sourceforge.net/) - 免费查找、创建和发布开源软件 ✅
  * [surge.sh](https://surge.sh/) - 面向前端开发者的静态网站发布服务。支持不限数量的站点，可绑定自定义域名 🟡
  * [tilda.cc](https://tilda.cc/) - 一个站点、50 个页面、50 MB 存储空间，170+ 个区块中仅开放主要的预定义区块，不支持自定义字体、favicon 和自定义域名。 ✅
  * [Vercel](https://vercel.com/) - 构建、部署并托管 Web 应用，提供免费 SSL、全球 CDN，并且每次 `git push` 都会生成唯一的 Preview URL。非常适合 Next.js 及其他静态站点生成器。 ✅
  * [Versoly](https://versoly.com/) - 面向 SaaS 的网站构建器——不限网站数量，含 70+ 个区块、五套模板，支持自定义 CSS、favicon、SEO 和表单。不支持自定义域名。 ✅
* [Stormkit](https://www.stormkit.io) - 可自托管的 Vercel 替代品，用于构建、托管和部署现代前端与 JavaScript 应用。免费计划包含 1 个应用、50 GB 带宽、不限数量的自定义域名以及免费 SSL。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-33"></a>
## DNS

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由 Cloudflare 提供的免费公共 DNS Resolver，快速且安全（可加密你的 DNS 查询）。可用于绕过运营商的 DNS 封锁、防止 DNS 查询被窥探，以及[屏蔽成人与恶意软件内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。也可以[通过 API 使用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注意：它只是一个 DNS resolver，不是 DNS hoster。 🔴
  * [1984.is](https://www.1984.is/product/freedns/) - 免费 DNS 服务，提供 API，并附带许多其他免费 DNS 功能。 ✅
  * [cloudns.net](https://www.cloudns.net/) - 免费 DNS 托管，最多支持 1 个域名、50 条记录。 ✅
  * [deSEC](https://desec.io) - 支持 API 的免费 DNS 托管，以安全为核心设计。基于开源软件运行，由 [SSE](https://www.securesystems.de/) 提供支持。 ✅
  * [dns.he.net](https://dns.he.net/) - 免费 DNS 托管服务，支持 Dynamic DNS（动态 DNS）。 ✅
  * [dnspod.com](https://www.dnspod.com/) - 免费 DNS 托管。 ✅
  * [duckdns.org](https://www.duckdns.org/) - 免费 DDNS 服务，免费额度最多支持 5 个域名，并提供多种使用场景的配置指南。 ✅
  * [Dynv6.com](https://dynv6.com/) - 免费 DDNS 服务，[支持 API](https://dynv6.com/docs/apis)，可管理多种 DNS 记录类型（如 CNAME、MX、SPF、SRV、TXT 等）。 ✅
  * [freedns.afraid.org](https://freedns.afraid.org/) - 免费 DNS 托管。还基于大量由用户公开[贡献的域名](https://freedns.afraid.org/domain/registry/)提供免费子域名。注册后可在 "Subdomains" 菜单中领取免费子域名。 ✅
  * [Glauca](https://docs.glauca.digital/hexdns/) - 免费 DNS 托管，最多支持 3 个域名，并支持 DNSSEC。 ✅
  * [Hetzner](https://www.hetzner.com/dns-console) - Hetzner 提供的免费 DNS 托管，支持 API。 ✅
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为提供的免费 DNS 托管。 ✅
  * [LocalCert](https://localcert.net) - 免费提供 `.localcert.net` 子域名，兼容公共 CA，可用于私有网络内部 ✅
  * [luadns.com](https://www.luadns.com/) - 免费 DNS 托管，支持 3 个域名，全部功能均有合理的限制 ✅
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) - 免费 DNS，域名数量不限 ✅
  * [nextdns.io](https://nextdns.io) - 基于 DNS 的防火墙，每月 300K 次免费查询 🟡
  * [noip.at](https://noip.at/) - 免费 DDNS 服务，无需注册，无跟踪、无日志、无广告。域名数量不限 ✅
  * [noip](https://www.noip.com/) - 动态 DNS 服务，免费提供最多 3 个主机名，需每 30 天确认一次 ✅
  * [sslip.io](https://sslip.io/) - 免费 DNS 服务：查询内嵌 IP 地址的主机名时，返回该 IP 地址 ✅
  * [zilore.com](https://zilore.com/en/dns) - 免费 DNS 托管，支持 5 个域名 ✅
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) - 免费 DNS 托管，支持 Dynamic DNS（动态域名解析）。 ✅
  * [Zonomi](https://zonomi.com/) - 免费 DNS 托管服务，DNS 记录即时生效。免费计划：1 个 DNS zone（域名），最多 10 条 DNS 记录。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-34"></a>
## 域名

  * [DigitalPlat](https://domain.digitalplat.org) - 免费子域名。 ✅
  * [DNSHE](https://www.dnshe.com/) - 可在多个域名后缀下免费注册子域名，支持自定义 nameserver。 ✅
  * [isroot.in](https://isroot.in) - 免费 isroot.in 子域名。 ❓
  * [pp.ua](https://nic.ua/) - 免费 pp.ua 子域名。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-35"></a>
## IaaS

  * [4EVERLAND](https://www.4everland.org/) - 兼容 AWS S3——可通过 API、控制台操作、CLI 等多种上传方式，安全、便捷、高效地将文件上传并存储到 IPFS 和 Arweave 网络。注册用户可免费获得 6 GB IPFS 存储和 300MB Arweave 存储；小于 150 KB 的 Arweave 文件上传免费。 ✅
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2 云存储。免费提供 10 GB（类 Amazon S3）对象存储，可无限期使用。 ✅
  * [filebase.com](https://filebase.com/) - 基于区块链的 S3 兼容对象存储。提供 5 GB 免费存储空间，无使用时限。 ❓
  * [Modal](https://modal.com) - AI 驱动的 IaaS，提供充裕的计算与存储资源；每月赠送 $30 免费额度（部分账户可能仅限 $5） 🟡

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-36"></a>
## 托管数据服务

  * [8base.com](https://www.8base.com/) - 8base 是面向 JavaScript 开发者的全栈低代码开发平台，基于 MySQL、GraphQL 与 serverless 后端即服务（BaaS）构建。可通过 UI 应用构建器快速开始搭建 Web 应用并快速扩展。免费层包含：数据行数 2,500、存储 500、Serverless 计算 1Gb/h、客户端应用用户 5。 ❓
  * [airtable.com](https://airtable.com/) - 看起来像电子表格，实则是一个关系型数据库：base 数量不限，每个 base 1,200 行，每月 1,000 次 API 请求 ✅
  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）套餐。单节点，1 CPU、1GB 内存，PostgreSQL 和 MySQL 另有 1GB 存储。可轻松迁移到更大规格的套餐或跨云迁移。 ✅
  * [BackupDrill](https://backupdrill.com) - 将 Supabase 项目备份到你自己的 S3/R2/B2 存储桶，并按计划运行恢复演练，以验证备份确实可以恢复。提供免费计划：为一个项目提供每周备份，并在首次备份时赠送一次恢复演练。 ❓
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) - 免费层每月免费提供 5000 万 RUs 和 10 GiB 存储空间（相当于 15$ 的价值）。([什么是 Request Units](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)) 🟡
  * [codehooks.io](https://codehooks.io/) - 简单易用的 JavaScript serverless API/后端与 NoSQL 数据库服务，提供云函数、类 MongoDB 查询、key/value 查找、任务系统、实时消息、worker 队列、功能强大的 CLI 以及基于 Web 的数据管理器。免费计划包含 5GB 存储和每分钟 60 次 API 调用，含 2 个开发者席位，无需信用卡。 ❓
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 可部署永久免费层的全托管数据库集群，含 1 个节点和 8GB 存储，面向开发者，用于构建从 IoT 到 AI 的下一代应用。 ✅
  * [CrateDB](https://crate.io/) - 面向实时分析的开源分布式 SQL 数据库。[免费层 CRFREE](https://crate.io/lp-crfree)：单节点，2 个 CPU、2 GiB 内存、8 GiB 存储。每个组织限 1 个集群，无需绑定支付方式。 ✅
  * [filess.io](https://filess.io) - filess.io 是一个可免费创建两个数据库的平台，支持以下 DBMS，每个数据库最大 10 MB：MySQL、MariaDB、MongoDB 和 PostgreSQL。 ✅
  * [InfluxDB](https://www.influxdata.com/) - 时序数据库，免费额度为每 5 分钟最多 3MB 写入、每 5 分钟最多 30MB 读取，序列基数上限 10,000。 ✅
  * [Layerbase](https://layerbase.com/) - 2 个免费托管数据库，可选：Postgres、MariaDB、Redis、Valkey、DuckDB、SQLite、libSQL 和 TypeDB。均支持 TLS。Branch 的 8 个引擎中 7 个免费，每个数据库 1 个分支——免费层吞吐量限制为 10 GB/天、50 GB/周、150 GB/月。更高层级另有 10 个引擎可用，且无计量限制。 ✅
  * [MemCachier](https://www.memcachier.com/) - 托管 Memcache 服务。免费额度最高 25MB，含 1 个 Proxy Server 和基础分析功能。 ✅
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 免费层提供 512 MB。 ✅
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) - 托管的原生图 DBMS / 分析平台，采用 Cypher 查询语言并提供 REST API。图规模有限制（200k 节点、400k 关系）。 ✅
  * [Neon](https://neon.tech/) - 托管 PostgreSQL 服务，每个项目 0.5 GB 存储空间，100 个项目，每个项目 10 个分支，数据库数量不限，主分支始终可用（5 分钟后自动暂停），非主分支计算每月（总计）20 小时活跃时间。 🟡
  * [Nile](https://www.thenile.dev/) - 面向 B2B 应用的 Postgres 平台。数据库数量不限，始终可用不停机，1GB 存储空间（总计），5000 万 query tokens，支持自动扩缩容，向量嵌入数量不限。 🟡
  * [Prisma Postgres](https://prisma.io/postgres) - 基于 unikernel 构建、运行在裸金属服务器上的超高速托管 Postgres，500MB 总存储空间，5 个数据库，与 Prisma ORM 集成。 🟡
  * [Qdrant](https://qdrant.tech/) - 用于存储嵌入数据的向量数据库，单节点集群，配备 0.5 vCPU、1GB 内存和 4GB 磁盘。 🟡
  * [restdb.io](https://restdb.io/) - 快捷易用的 NoSQL 云数据库服务。通过 restdb.io 可以获得 schema、关联关系、自动生成的 REST API（支持类 MongoDB 查询），以及高效的多用户数据管理界面。免费计划支持 3 个用户、2500 条记录和每秒 1 次 API 请求。 ✅
  * [SeaTable](https://seatable.io/) - 由 Seafile 团队打造的灵活的类电子表格数据库。表格数量不限，2,000 行，1 个月版本历史，最多 25 名团队成员。 ✅
  * [skyvia.com](https://skyvia.com/) - 云数据平台提供免费层，beta 期间所有计划完全免费。 🟡
  * [StackBy](https://stackby.com/) - 一个兼具电子表格的灵活性与数据库的强大能力、并与常用业务应用内置集成的工具。免费计划包含不限用户数、10 个 stack，以及每个 stack 2GB 附件空间。 ✅
  * [Tinybird](https://tinybird.co) - 无服务器的托管 ClickHouse，支持通过 HTTP 进行无连接的数据写入，并可将 SQL 查询发布为托管的 HTTP API。免费层无时间限制，提供 10GB 存储 + 每天 1000 次 API 请求。 🟡
  * [Turso by ChiselStrike](https://turso.tech/) - Turso 将 SQLite 的开发者体验带入边缘数据库。Turso 提供 Free Forever 入门计划：总存储 9 GB、最多 500 个数据库、最多 3 个位置、每月 10 亿次行读取，并支持基于 SQLite 的本地开发。 🟡
  * [Upstash](https://upstash.com/) - Serverless Redis 服务，免费层每月最多 500K 条命令，数据库大小上限 256MB，支持 20 个并发连接。 🟡

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-37"></a>
## 隧道、WebRTC、Web Socket 服务器及其他路由器

  * [cname.dev](https://cname.dev/) - 免费且安全的动态反向代理服务。 ❓
  * [conveyor.cloud](https://conveyor.cloud/) - 一款 Visual Studio 扩展，可将 IIS Express 暴露到本地局域网，或通过隧道暴露到公网 URL。 ✅
  * [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费计划包含一台 EU 服务器、随机子域名和单用户。 ✅
  * [Hamachi](https://www.vpn.net/) - LogMeIn Hamachi 是一项托管 VPN 服务，可安全地将类局域网网络扩展给分布式团队；免费计划允许创建不限数量的网络，每个网络最多 5 人。 🟡
  * [Hookdeck](https://hookdeck.com/pricing) - 在任何地方开发、测试和监控你的 webhook。每月 100K 次请求和 100K 次投递尝试，数据保留 3 天。 🟡
  * [localhost.run](https://localhost.run/) - 通过隧道将本地运行的服务器暴露到公网 URL。 ✅
  * [localtonet](https://localtonet.com/) - 多协议隧道：支持 HTTP、TLS、TCP、UDP、文件服务器（默认、SFTP、WebDAV）以及代理隧道（HTTP、SOCKS5、Shadowsocks、VLESS）。免费计划：1 条隧道，1GB/月带宽，30 分钟超时（HTTP 隧道除外）。 ✅
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) - 通过隧道将本地运行的服务器暴露到公网 URL。提供免费托管版本，并且[开源](https://github.com/localtunnel/localtunnel)。 ✅
  * [LocalXpose](https://localxpose.io) - 反向代理，可将 localhost 上的服务器暴露到互联网。免费计划的隧道存活时间为 15 分钟。 ❓
  * [ngrok.com](https://ngrok.com/) - 通过隧道将本地运行的服务器暴露到公网 URL。 ✅
  * [Pinggy](https://pinggy.io) - 一条命令即可为 localhost 获得公网 URL，无需下载。支持 HTTPS / TCP / TLS 隧道。免费计划的隧道存活时间为 60 分钟。 ✅
  * [Radmin VPN](https://www.radmin-vpn.com/) - 通过提供 VPN 的类局域网（LAN）网络将多台电脑连接在一起。节点数不限。（Hamachi 替代品） ✅
  * [serveo](https://serveo.net/) - 将本地服务器暴露到互联网。无需安装，无需注册。免费子域名，无使用限制。 ✅
  - [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp) - Twilio STUN
  - [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) - Google STUN
  * [Tailscale](https://tailscale.com/) - 零配置 VPN，基于开源的 WireGuard 协议。可安装在 MacOS、iOS、Windows、Linux 和 Android 设备上。免费套餐供个人使用，支持 100 台设备和 3 个用户。 🟡
  * [webhookrelay.com](https://webhookrelay.com) - 管理、调试、扇出（fan-out）并将你的所有 webhook 代理到公共或内部（即 localhost）目标。还可以通过获取一个公共 HTTP 端点，把运行在私有网络中的服务器经隧道暴露出去（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。 ✅
  * [Xirsys](https://www.xirsys.com/pricing/) - STUN 用量不限 + 每月 500 MB 的 TURN 带宽，带宽有上限，仅限单一地理区域。 ❓
  * [ZeroTier](https://www.zerotier.com) - 开源（FOSS）的托管虚拟以太网即服务。免费套餐可创建不限数量的端到端加密网络，每个网络最多 25 个客户端。提供桌面/移动/NA 客户端；另有 Web 界面，可用于配置自定义路由规则和审批私有网络中的新客户端节点。 🟡

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-38"></a>
## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) - 最多支持 5 名团队成员的免费项目管理与 SCRUM 软件。 ❓
  * [asana.com](https://asana.com/) - 私有项目可与协作者协作，免费使用。 ✅
  * [Backlog](https://backlog.com) - 一个平台集齐团队发布优秀项目所需的一切。免费套餐提供 1 个项目、10 名用户和 100MB 存储。 ✅
  * [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间跟踪。最多 3 个项目、20 名用户和 1GB 存储空间。 ✅
  * [bitrix24.com](https://www.bitrix24.com/) - 内网与项目管理工具。免费版提供 5GB 存储空间，用户数不限。 ✅
  * [cacoo.com](https://cacoo.com/) - 在线实时绘图工具：流程图、UML、网络拓扑图。免费版每张图最多 15 名协作用户、25 张图。 ✅
  * [clickup.com](https://clickup.com/) - 项目管理工具。免费使用，付费版提供云存储。提供移动应用和 Git 集成。 ✅
  * [Clockify](https://clockify.me) - 时间跟踪与工时表应用，可跨项目记录工作时长。用户数不限，永久免费。 ✅
  * [Cloudcraft](https://cloudcraft.co/) - 使用 Cloudcraft 可视化设计器，几分钟内即可设计专业架构图，针对 AWS 优化，智能组件还能显示实时数据。免费版供单用户创建不限量的私有图表。 ✅
  * [Confluence](https://www.atlassian.com/software/confluence) - Atlassian 的内容协作工具，帮助团队高效协作与共享知识。免费版最多支持 10 名用户。 ✅
  * [Crosswork](https://crosswork.app/) - 功能多样的项目管理平台。免费版最多 3 个项目，用户数不限，1GB 存储空间。 ✅
  * [diagrams.net](https://app.diagrams.net/) - 在线绘图工具，图表可存储在 Google Drive、OneDrive 或 Dropbox 中。所有功能与存储容量均免费。 🟡
  * [easyretro.io](https://www.easyretro.io/) - 简洁直观的 Sprint 回顾工具。免费版提供 3 个公开看板，每个看板每月可发起 1 次调查。 ❓
  * [freedcamp.com](https://freedcamp.com/) - 任务、讨论、里程碑、时间跟踪、日历、文件和密码管理器。免费计划提供不限数量的项目、用户和文件存储。 ✅
  * [GForge](https://gforge.com) - 面向复杂项目的项目管理与 issue 跟踪工具集，提供自托管（本地部署）与 SaaS 两种选项。SaaS 免费计划前 5 名用户免费，并对开源项目免费。 ✅
  * [gleek.io](https://www.gleek.io) - 面向开发者的免费描述转图表工具。使用关键词即可创建非正式的 UML 类图、对象图或实体关系（ER）图。 ✅
  * [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL Inspector 可输出两个 GraphQL schema 之间的变更列表。每一处差异都会被精确说明，并标记为 breaking（破坏性）、non-breaking（非破坏性）或 dangerous（危险）。 ✅
  * [Helploom](https://helploom.com) - 客户支持软件，永久免费套餐即提供 live chat（在线聊天）功能。简洁、轻量且美观。安装只需复制粘贴一段脚本。由一位开发者打造。 ✅
  * [HeyRetro](https://heyretro.io/) - 实时冲刺回顾（sprint retrospective）平台，提供投票、计时器、调查问卷、访客协作和破冰游戏。永久免费套餐包含每月 1 个看板、匿名调查和访客链接分享。 ✅
  * [Hygger](https://hygger.io) - 项目管理平台。免费计划提供不限用户数、项目数与看板数，并附带 100 MB 存储空间。 ❓
  * [Ilograph](https://www.ilograph.com/) - 交互式图表工具，让用户从多个视角和不同细节层级查看自己的基础设施。图表可以用代码表达。免费版提供不限量的私有图表，最多支持 3 名查看者。 ✅
  * [Jira](https://www.atlassian.com/software/jira) - 在企业环境中广泛使用的高级软件开发项目管理工具。免费计划最多支持 10 名用户。 ✅
  * [kan.bn](https://kan.bn/) - 一款强大而灵活的看板应用，帮助你组织工作、跟踪进度并交付成果——全部集中在一处。免费计划限 1 名用户，可创建不限量的看板、列表和卡片。 ✅
  * [kanbanflow.com](https://kanbanflow.com/) - 基于看板的项目管理。免费提供，另有功能更多的付费版本。 ✅
  * [kanbantool.com](https://kanbantool.com/) - 基于看板的项目管理。免费计划包含 2 个看板和 2 名用户，不支持附件或文件。 ✅
  * [Kitemaker.co](https://kitemaker.co) - 在产品开发流程的各个阶段进行协作，并跨 Slack、Discord、Figma 和 GitHub 跟踪工作。用户数不限、空间数不限。免费计划最多 250 个工作项。 ✅
  * [Kiter.app](https://www.kiter.app/) - 让任何人都能整理自己的求职过程，跟踪面试、机会和人脉。提供功能强大的 Web 应用和 Chrome 扩展。完全免费。 ✅
  * [Kumu.io](https://kumu.io/) - 关系图谱工具，支持动画、装饰、筛选、聚类、电子表格导入等。免费版可创建不限量的公开项目，图谱规模不限。学生可免费使用私有项目。如果不想把文件公开在网上，可使用沙盒模式（上传、编辑、下载、丢弃）。 ✅
  * [leiga.com](https://www.leiga.com/) - Leiga 是一款利用 AI 自动管理项目的 SaaS 产品，帮助团队保持专注、释放巨大潜力，确保项目按计划推进。免费版支持最多 10 名用户、20 个自定义字段、2GB 存储空间，AI 视频录制每段限 5 分钟，自动化执行次数为每用户每月 20 次。 ✅
  * [Linear](https://linear.app/) - 界面简洁的 issue 跟踪工具。免费版支持不限成员数，文件上传上限 10MB，250 个 issue（不含归档）。 🟡
  * [Lucidchart](https://www.lucidchart.com/) - 带协作功能的在线图表绘制工具。免费版包含 3 份可编辑文档、100 个专业模板和基础协作功能。 🟡
  * [MeisterTask](https://www.meistertask.com/) - 面向团队的在线任务管理工具。免费版支持最多 3 个项目，项目成员数量不限。 🟡
  * [MeuScrum](https://www.meuscrum.com/en) - 免费的在线 Scrum 工具，带看板（kanban board）。 ❓
  * [myspec.dev](https://myspec.dev/) - Spec-Driven Development（SDD）架构师工具，通过访谈开发者生成结构化的 4 文件 spec 包，并集成 MCP server。免费版覆盖 20 个项目和 100 个 spec 文件。 ❓
  * [nTask](https://www.ntaskmanager.com/) - 项目管理软件，帮助团队协作、规划、分析和管理日常任务。Essential 套餐永久免费，含 100 MB 存储空间和 5 个用户/团队。工作区、会议、任务分配、工时表和 issue 跟踪均不限量。 🟡
  * [Plane](https://plane.so/) - Plane 是一款简洁、可扩展的开源项目与产品管理工具。免费版支持不限成员数，文件上传上限 5MB，1000 个 issue。 🟡
  * [planitpoker.com](https://www.planitpoker.com/) - 免费在线规划扑克（Planning Poker，估算工具） ✅
  * [point.poker](https://www.point.poker/) - 在线规划扑克（基于共识的估算工具）。用户数、团队数、场次、轮次和投票数均不限，全部免费。无需注册。 ✅
  * [Pulse.red](https://pulse.red) - 面向项目的免费极简时间跟踪与工时表应用。 ✅
  * [ScrumFast](https://www.scrumfast.com) - 界面非常直观的 Scrum 看板，最多 5 名用户免费。 ✅
  * [Sflow](https://sflow.io) - sflow.io 是一款面向敏捷软件开发、市场营销、销售和客户支持的项目管理工具，尤其适合外包和跨组织协作项目。免费计划最多支持 3 个项目和 5 名成员。 ✅
  * [Shake](https://www.shakebugs.com/) - 面向移动应用的应用内 bug 报告与反馈工具。免费计划为每个应用每月 10 条 bug 报告。 ✅
  * [Shortcut](https://shortcut.com/) - 项目管理平台。最多 10 名用户永久免费。 ✅
  * [taiga.io](https://taiga.io/) - 面向初创公司和敏捷开发者的项目管理平台，对开源项目免费。 ✅
  * [taskade.com](https://www.taskade.com/) - 实时协作的任务清单与团队大纲工具。免费计划包含 1 个工作区，任务和项目数量不限；1GB 文件存储；1 周项目历史；每次视频会议最多 5 人参加。 ✅
  * [Teaminal](https://www.teaminal.com) - 面向远程团队的站会、回顾与 Sprint 规划工具。最多 15 名用户可免费使用。 ✅
  * [teamwork.com](https://teamwork.com/) - 项目管理与团队聊天（Team Chat）。5 名用户和 2 个项目以内免费。提供付费 Premium 计划。 ✅
  * [teleretro.com](https://www.teleretro.com/) - 简单有趣的回顾（retrospective）工具，带有破冰环节、GIF 和表情符号。免费计划包含 3 次回顾，成员数量不限。 ✅
  * [Tenzu](https://tenzu.net/) - 面向敏捷团队的轻量级项目管理工具。该 SaaS 依靠免费捐赠维持，用户可以随时选择支付 0 元，没有任何功能付费墙 {[更多详情](https://tenzu.net/pricing/)} ✅
  * [titanapps.io](https://titanapps.io/) - 面向 Jira 和 monday.com 的效率工具，在 issue/任务内提供结构化清单、模板与审批功能。小团队可使用免费计划。 ✅
  * [todoist.com](https://todoist.com/) - 协作与个人任务管理工具。免费计划包含：5 个活跃项目、每个项目 5 名用户、文件上传最大 5MB、3 个筛选器以及 1 周活动历史。 ✅
  * [Toggl](https://toggl.com/) - 提供两款免费效率工具。[Toggl Track](https://toggl.com/track/) 是时间管理与追踪应用，免费计划提供流畅的时间追踪与报告，专为自由职业者设计，追踪记录、项目、客户、标签、报告等数量不限；[Toggl Plan](https://toggl.com/plan/) 是任务规划工具，免费计划面向独立开发者，任务、里程碑和时间线数量不限。 ✅
  * [trello.com](https://trello.com/) - 基于看板的项目管理。个人看板数量不限，团队看板 10 个。 ✅
  * [Tweek](https://tweek.so/) - 简洁的每周待办日历与任务管理。 ❓
  * [Wikifactory](https://wikifactory.com/) - Product designing Service with Projects, VCS & Issues. The free plan offers unlimited projects & collaborators and 3GB storage. ❓
  * [Yodiz](https://www.yodiz.com/) - 敏捷开发与问题跟踪。免费版最多支持 3 名用户，项目数量不限。 ✅
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) - 面向 FOSS 项目与私有项目的免费托管版 YouTrack（InCloud）（3 名用户免费）。包含时间跟踪与敏捷看板 ✅
  * [zenhub.com](https://www.zenhub.com) - 唯一内置于 GitHub 的项目管理解决方案。对公开仓库、开源项目（OSS）及非营利组织免费 ✅
  * [zenkit.com](https://zenkit.com) - 项目管理和协作工具。最多 5 名成员免费，含 5 GB 附件存储。 ❓
  * [Zube](https://zube.io) - 项目管理工具，免费套餐支持 4 个项目与 4 名用户。提供 GitHub 集成。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-39"></a>
## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件分享平台，速度、带宽、文件数量、下载次数等均不设限制。主要面向 Android 开发相关文件，如 APK 构建包、自定义 ROM 及各类修改文件等，但似乎也接受其他任意文件。 ✅
  * [anon.li Drop](https://anon.li/drop) - 零知识端到端加密（E2EE）文件共享服务，采用客户端 AES-256-GCM 加密，服务器端完全不接触数据。通过网站、CLI 或 API 免费上传最大 5GB 的文件，最长有效期 3 天。 ❓
  * [borgbase.com](https://www.borgbase.com/) - 为 Borg Backup 提供简单安全的异地备份托管服务。提供 10 GB 免费备份空间和两个仓库。 ❓
  * [cloudinary.com](https://cloudinary.com/) - 为网站和应用提供图片上传、强大的图像处理、存储与分发服务，提供 Ruby、Python、Java、PHP、Objective-C 等多种语言的 SDK。免费额度为每月 25 个 credit。1 个 credit 等于 1,000 次图片转换、1 GB 存储或 1 GB CDN 流量。 ✅
  * [degoo.com](https://degoo.com/) - 基于 AI 的云存储服务，免费额度最高 20 GB，支持 3 台设备，邀请好友可获 5 GB 奖励（账号 90 天不活跃即失效）。 🟡
  * [dlvr.sh](https://dlvr.sh/) - 面向 agent 与自动化的临时文件投递服务。免费额度为每 24 小时 10 次投递，支持 API、MCP 和 CLI 访问。 ❓
  * [Dropshare](https://dropsha.re) - 零知识文件共享。端到端加密的文件共享服务，采用 AES-256-GCM 加密，处理全部在客户端完成，服务器端完全不接触数据。免费上传最大 1GB 的文件，不收集任何数据。 ❓
  * [embed.ly](https://embed.ly/) - 提供用于在网页中嵌入媒体、响应式图片缩放以及从网页中提取元素的 API。每月最多 5,000 个 URL、每秒 15 次请求以内免费 ❓
  * [Ente](https://ente.io/) - Ente 是一个端到端加密的云服务，用于存储照片、视频和 2FA 密钥。也支持自行托管（self-hosted），并提供慷慨的永久免费额度 10GB。免费版用户的数据仅保留单一副本。 ✅
  * [FileShot.io](https://fileshot.io) - 零知识加密文件共享。AES-256-GCM 浏览器端加密，确保文件在上传前已在浏览器内完成加密。发送方与接收方均无需注册账号。支持自托管（MIT 开源）。免费额度为不限上传次数、不限文件大小。 ❓
  * [file.io](https://www.file.io) - 提供 2 GB 的文件存储空间。文件在被下载一次后会自动删除。提供 REST API 用于操作存储。速率限制为每分钟 1 次请求。 ❓
  * [freetools.site](https://freetools.site/) - 免费在线工具。可转换或编辑文档、图像、音频、视频等多种文件。 ✅
  * [getpantry.cloud](https://getpantry.cloud/) - 一个简单的 JSON 数据存储 API，非常适合个人项目、黑客松和移动应用！ ✅
  * [GoFile.io](https://gofile.io/) - 免费的文件分享与存储平台，可通过网页界面和 API 使用。文件大小、带宽、下载次数等均无限制。但文件一旦不活跃（超过十天无下载）就会被删除。 ✅
  * [gumlet.com](https://www.gumlet.com/) - 通过 CDN 提供图片与视频的托管、处理与流媒体播放服务。免费额度较为慷慨：视频 250 GB / 月，图片 30 GB / 月。 🟡
  * [hyperserve.io](https://hyperserve.io/) - 面向开发者的视频后端 API：接受用户上传的任意格式视频，转码为 MP4，并通过 CDN 全球分发。免费额度包含 50 个视频、单文件 1 GB、每月 250 GB 带宽。 🟡
  * [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。提供 10 GB 免费存储空间 ❓
  * [image-charts.com](https://www.image-charts.com/) - 无限量生成图表图片，带水印 ❓
  * [ImageEngine](https://imageengine.io/) - ImageEngine 是一个易于使用的全球图片 CDN，60 秒内即可完成配置。支持 AVIF 与 JPEGXL，提供 WordPress、Magento、React、Vue 等插件。可[在此](https://imageengine.io/developer-program/)申领免费开发者账户。 ✅
  * [imagekit.io](https://imagekit.io) - 提供自动优化、实时转换与存储功能的图片 CDN，可在几分钟内集成到现有环境中。免费套餐每月包含最高 20GB 带宽。 🟡
  * [ImgBB](https://imgbb.com/) - ImgBB 是一项无限制的图片托管服务。将图片拖放到屏幕任意位置即可上传，单张图片上限 32 MB。上传后可获得图片直链、BBCode 和 HTML 缩略图。登录后可查看上传历史。 ✅
  * [Imgbot](https://github.com/marketplace/imgbot) - Imgbot 是一个友好的机器人，可自动优化你的图片并节省时间。优化后的图片文件体积更小，且不牺牲画质。对开源项目免费。 ✅
  * [imgen](https://www.jitbit.com/imgen/) - 即时图像生成 API（在背景图上叠加文字、logo），用于生成 opengraph 图片，免费、无水印、带 CDN ❓
  * [imgix](https://www.imgix.com/) - 图片缓存、管理与 CDN。免费计划包含 1000 张源图、无限次转换和 100 GB 带宽 ✅
  * [internxt.com](https://internxt.com) - Internxt Drive 是一项基于绝对隐私与极致安全的零知识（zero-knowledge）文件存储服务。注册即可永久免费获得 10 GB 空间！ ✅
  * [kraken.io](https://kraken.io/) - 面向网站性能的图片优化即服务（SaaS），免费套餐支持最大 1 MB 的文件。 ✅
  * [LibreQR](https://libreqr.com) - 注重隐私、无追踪的免费二维码生成器。免费使用，不收集任何数据。 ✅
  * [MConverter](https://mconverter.eu/) - 批量转换文件，支持多种格式，包括 [AVIF](https://mconverter.eu/convert/to/avif/) 和 JXL。可从视频中提取图像帧、压缩 PDF。每 24 小时免费处理 15 个文件，单个最大 100 MB，每批处理 8 个。 ✅
  * [nitropack.io](https://nitropack.io/) - 以全自动（autopilot）方式加速你的网站，提供完整的前端优化（缓存、图片与代码优化、CDN）。每月最多 5,000 次页面浏览量免费。 ✅
  * [npoint.io](https://www.npoint.io/) - 支持协作编辑 schema 的 JSON 存储。 ✅
  * [MantleDB](https://mantledb.sh) - 面向脚本和小型应用的匿名 JSON 存储，无需注册；使用 Master AID 进行更新、Read-Only RID 进行公开读取。免费层包含 1 个 bucket（上限 1 MB），并采用 72 小时不活跃即清除（scavenger）的策略。 ✅
  * [otixo.com](https://www.otixo.com/) - 在一个地方加密、分享、复制和移动你所有云存储中的文件。基础套餐提供不限量的文件传输（单文件最大 250 MB），并允许 5 个加密文件。 ✅
  * [packagecloud.io](https://packagecloud.io/) - 提供 YUM、APT、RubyGem 和 PyPI 的托管软件包仓库。提供有限的免费套餐，开源套餐可通过申请获得。 ✅
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。提供最高 10 GB 的免费存储空间。 ✅
  * [Pinata IPFS](https://pinata.cloud) - Pinata 是在 IPFS 上上传和管理文件的最简单方式。友好的用户界面加上 IPFS API，让 Pinata 成为面向平台、创作者和收藏者的最易用的 IPFS pinning 服务。免费提供 1 GB 存储空间以及 API 访问。 🟡
  * [plot.ly](https://plot.ly/) - 绘制图表并分享你的数据。免费层包含不限量的公开文件和 10 个私有文件。 ✅
  * [podio.com](https://podio.com/) - 你可以与最多 5 人的团队一起使用 Podio，并试用 Basic Plan 的各项功能（用户管理除外）。 ✅
  * [Proton Drive](https://proton.me/drive) - 面向文件和重要文档的超安全云存储。免费套餐提供 5 GB 存储空间。 ✅
  * [QRtracer](https://qrtracer.io) - 免费二维码生成器，内置扫描分析、批量生成与品牌定制功能，主打可靠性且没有任何广告。 ✅
  * [QuickChart](https://quickchart.io) - 生成可嵌入的图片式图表、图形和二维码。 ✅
  * [redbooth.com](https://redbooth.com) - P2P 文件同步服务，最多 2 名用户可免费使用。 🔴
  * [resmush.it](https://resmush.it) - reSmush.it 是一个免费的图片优化 API，已集成到 WordPress、Drupal、Magento 等常见 CMS 中。reSmush.it 是使用量最大的图片优化 API，已处理超过 70 亿张图片，且至今仍然免费。 ✅
  * [sirv.com](https://sirv.com/) - 智能图片 CDN，支持实时图片优化与缩放。免费额度包含 500 MB 存储空间和 2 GB 流量。 ✅
  * [SlingSite](https://slingsite.github.io) - 免费批量生成图片和视频的所有优化版本。每张图片可获得以下格式：AVIF、WEBP 和 JPG，分别对应三种选定分辨率（桌面端、平板、移动端）；视频则可获得：WebM（VP9 编码）、MP4（HEVC，即 H.265 编码）和 MP4（AVC，即 H.264 编码），外加取自首帧的封面图。 ✅
  * [sync.com](https://www.sync.com/) - 端到端云存储服务，提供 5 GB 免费存储空间。 ✅
  * [tinypng.com](https://tinypng.com/) - 用于压缩和缩放 PNG 与 JPEG 图片的 API，每月免费提供 500 次压缩。 ✅
  * [transloadit.com](https://transloadit.com/) - 处理文件上传以及视频、音频、图片、文档的编码。通过 GitHub Student Developer Pack 面向开源项目、慈善机构和学生免费；商业应用可免费获得 2 GB 额度试用。 ✅
  * [twicpics.com](https://www.twicpics.com) - 响应式图片即服务。提供图片 CDN、媒体处理 API 以及用于自动化图片优化的前端库。每月流量在 3 GB 以内可免费使用。 ✅
  * [uploadcare.com](https://uploadcare.com/hub/developers/) - Uploadcare 提供基于前沿算法打造的媒体处理流水线与全套工具。所有功能对开发者完全免费：文件上传 API 与 UI、图片 CDN 与源站服务（Origin Services）、自适应分发（Adaptive Delivery）以及智能压缩。免费额度为 3000 次上传、3 GB 流量和 3 GB 存储。 ✅
  * [VaocherApp QR Code Generator](https://www.vaocherapp.com/qr-code-generator) - 轻松为礼品卡、礼品券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo…… ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-40"></a>
## 设计与 UI

  * [Beste](https://beste.co) - 基于 shadcn/ui 区块、以组合优先（composition-first）为理念的网站构建器。免费计划支持绑定自己的自定义域名，并包含不限数量的页面、多语言支持、博客、表单和托管。 ✅
  * [BoxySVG](https://boxy-svg.com) - 一款可安装的免费 Web 应用，用于绘制 SVG，并可导出为 SVG、PNG、JPEG 等格式。 ✅
  * [BrandIcons](https://brandicons.dev) - Favicon API。基于 AI 的图标发现能力，即使域名没有图标、甚至没有网站服务器也能找到图标。免费额度为每月 500,000 次请求，需附带署名（attribution）。 ✅
  * [Calendar Icons Generator](https://calendariconsgenerator.app/) - 一键生成一整年都用不完的独特图标，完全免费。 ❓
  * [Canva](https://canva.com) - 免费的在线设计工具，用于创建视觉内容。 ✅
  * [CodedThemes](https://codedthemes.com/) - 提供精心打磨的 admin dashboard 与 UI kits，旨在简化并加速现代 Web 开发。 ✅
  * [Excalidraw](https://excalidraw.com/) - 免费的在线绘图文档网页，支持免费保存到本地及导出。 ✅
  * [figma.com](https://www.figma.com) - 面向团队的在线协作设计工具；免费版包含不限数量的文件和查看者，最多 2 名编辑者和 3 个项目。 ✅
  * [Flows](https://flows.sh/) - 一个可高度定制的产品采用（product adoption）平台，用于构建新手引导与用户参与体验。每月追踪用户数不超过 250 可免费使用。 ✅
  * [JoyDemo](https://joydemo.com) - 为你的网站或应用创建可交互、可点击的演示。免费，演示数量与浏览次数均无限制。 ❓
  * [landen.co](https://www.landen.co) - 为你的初创公司生成、编辑并发布精美的网站和落地页，全程无需代码。免费版允许你拥有一个网站，可完全自定义并发布到网络上。 ✅
  * [lensdump.com](https://lensdump.com/) - 免费云图床服务。 ❓
  * [Logo.dev](https://www.logo.dev) - 公司 Logo API，收录 44M+ 个品牌，调用方式简单到只需请求一个 URL。前 10,000 次 API 调用免费。 ✅
  * [marvelapp.com](https://marvelapp.com/) - 设计、原型制作与协作，免费版仅限 1 个用户和 1 个项目。 🟡
  * [Mindmup.com](https://www.mindmup.com/) - 免费创建不限量的思维导图并存储在云端。你的思维导图随处可用，可即时从任何设备访问。 🟡
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc 是一款强大的设计协作与设计交付（handoff）工具。免费版包含 3 个用户和 5 个项目，且所有功能均可用。 ✅
  * [photopea.com](https://www.photopea.com) - 一款免费、高级的在线设计编辑器，采用 Adobe Photoshop 风格界面，支持 PSD、XCF 和 Sketch 格式（对应 Adobe Photoshop、Gimp 和 Sketch App）。 ✅
  * [Plasmic](https://www.plasmic.app/) - 一款快速、易用且强大的网页设计工具和页面构建器，可集成到你的代码库中。构建响应式页面或复杂组件；可选择用代码扩展；并发布到生产环境的网站和应用。 ✅
  * [Proto.io](https://www.proto.io) - 无需编码即可创建完全可交互的 UI 原型。免费版在免费试用结束后可用。免费版包含 1 个用户、1 个项目、5 个原型、100MB 在线存储空间，以及 proto.io 应用的预览。 ✅
  * [Quant Ux](https://quant-ux.com/) - Quant Ux 是一款原型设计与设计工具。完全免费且开源。 ✅
  * [Shadcn Studio](https://shadcnstudio.com/theme-editor) - 跨不同组件和布局预览主题的更改。 ✅
  * [smartmockups.com](https://smartmockups.com/) - 创建产品样机（mockup），提供 200 个免费样机。 ✅
  * [SVGicons.com](https://svgicons.com/) - 免费搜索引擎，收录 312K+ 个开源 SVG 图标，提供开箱即用的 SVG、React、Vue、HTML 和 CSS 代码。 ✅
  * [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ 是一个协作式前端平台，可即时创建并发布 headless 静态网站。免费提供三个项目、不限协作者数量，并支持免费导出代码。 ✅
  * [Unicorn Platform](https://unicornplatform.com/) - 省心的落地页搭建工具，附带托管服务。免费提供一个网站。 ✅
  * [Updrafts.app](https://updrafts.app) - 面向基于 tailwindcss 设计的所见即所得（WYSIWYG）建站工具。非商业用途免费。 ✅
  * [Webflow](https://webflow.com) - 带动画效果与网站托管的所见即所得（WYSIWYG）建站工具。免费提供两个项目。 ✅
  * [Webstudio](https://webstudio.is/) - Webflow 的开源替代品。免费计划提供：在其域名上不限数量的网站、五个自定义域名网站、每月 10000 次页面浏览量、2 GB 资源存储。 ✅
  * [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便签与思维导图工具。最多可免费创建 4 个看板。 ✅
  * [Zeplin](https://zeplin.io/) - 设计师与开发者的协作平台，可展示设计稿、资源和样式规范。免费提供一个项目。 ✅
  * [WrapPixel](https://www.wrappixel.com/) - 下载使用 Angular、React、VueJs、NextJS 和 NuxtJS 打造的高质量免费与付费 Admin dashboard 模板！另有 HTML 主题和 UI Kit，助你更快构建应用！ ✅
  * [Themeselection](https://themeselection.com/) - 精选高质量、现代设计、专业且易用的免费 Admin Dashboard 模板。 ✅
  * [AdminMart](https://adminmart.com/) - 使用 Angular、Bootstrap、React、VueJs、NextJS 和 NuxtJS 打造的高质量免费与付费 Admin Dashboard 及网站模板！ ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-41"></a>
## 地图数据可视化

  * [Clockwork Micro](https://clockworkmicro.com/) - 像钟表一样精准运转的地图工具。每月 50,000 次免费查询（地图瓦片、db2vector、高程）。 ✅
  * [Foursquare](https://developer.foursquare.com/) - 通过 Places API 和 Pilgrim SDK 提供地点发现、场所搜索与情境感知内容。 ✅
  * [geoapify.com](https://www.geoapify.com/) - 提供矢量与栅格地图瓦片、地理编码、地点、路线规划、等时线等 API。每日 3,000 次免费请求。 ✅
  * [geocod.io](https://www.geocod.io/) - 通过 API 或上传 CSV 进行地理编码。每日 2,500 次免费查询。 ✅
  * [geocodify.com](https://geocodify.com/) - 通过 API 或上传 CSV 进行地理编码与地名解析（geoparsing）。每月 10k 次免费查询。 ✅
  * [geojs.io](https://www.geojs.io/) - 高可用的 REST/JSON/JSONP IP 地理位置查询 API。 ✅
  * [Geokeo api](https://geokeo.com) - 带语言纠错等功能的地理编码 API，覆盖全球，每天 2,500 次免费查询。 ✅
  * [graphhopper.com](https://www.graphhopper.com/) - 为 Routing、Route Optimization、Distance Matrix、Geocoding 和 Map Matching 提供免费的开发者套餐。 ✅
  * [here](https://developer.here.com/) - 面向地图和位置感知类应用的 API 与 SDK，每月 250k 次事务免费。 ✅
  * [IP Geolocation](https://ipgeolocation.io/) - 提供免费的 DEVELOPER 套餐，每月 30K 次请求。 ✅
  * [ipstack](https://ipstack.com/) - 通过 IP 地址定位并识别网站访客。 ✅
  * [LatLng](https://www.latlng.work) - 地理编码、逆地理编码、地点、静态地图和矢量地图瓦片 API。免费层包含每天 3,000 次地理编码请求、300 次逆地理编码请求和 100 张静态地图图片。 ✅
  * [locationiq.com](https://locationiq.com/) - 地理编码、地图和 Routing API。每天 5,000 次请求免费。 ✅
  * [mapbox.com](https://www.mapbox.com/) - 地图、地理空间服务及用于展示地图数据的 SDK。 🔴
  * [maps.stamen.com](https://maps.stamen.com/) - 免费的地图瓦片与瓦片托管服务。 ✅
  * [maptiler.com](https://www.maptiler.com/cloud/) - 矢量地图、地图服务及用于地图可视化的 SDK。提供每周更新的免费矢量瓦片和四种地图样式。 ✅
  * [nominatim.org](https://nominatim.org/) - OpenStreetMap 的免费地理编码服务，提供全球地址搜索功能和逆地理编码能力。 ✅
  * [opencagedata.com](https://opencagedata.com) - 聚合 OpenStreetMap 及其他开放地理数据源的地理编码 API。每天 2,500 次免费查询。 ✅
  * [osmnames](https://osmnames.org/) - 地理编码服务，搜索结果按相关 Wikipedia 页面的热度排序。 ✅
  * [positionstack](https://positionstack.com/) - 为全球地点和坐标提供免费地理编码。个人使用每月 25,000 次请求。 ✅
  * [stadiamaps.com](https://stadiamaps.com/) - 地图瓦片、路径规划、导航及其他地理空间 API。非商业用途和测试每天 2,500 次免费地图浏览和 API 请求。 ✅
  * [SqlInt](https://sqlint.com) - 浏览器内 SQL 工作区，附带多种免费工具，包括 JOIN 可视化、SQL 格式化器、CSV/JSON 转 SQL 转换器以及练习题，无需账号或信用卡。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-42"></a>
## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) - 面向多种发行版（SUSE、EL、Fedora、Debian 等）的软件包构建服务。 ✅
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) - 基于 Mock 的 RPM 构建服务，支持 Fedora 和 EL。 ✅
  * [help.launchpad.net](https://help.launchpad.net/Packaging) - Ubuntu 和 Debian 构建服务。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-43"></a>
## IDE 与代码编辑


  * [Android Studio](https://developer.android.com/studio) - Android Studio 提供最快的工具，用于在各类 Android 设备上构建应用。开源 IDE 对所有人免费，是最佳的 Android 应用开发工具。支持 Windows、Mac、Linux 甚至 ChromeOS！ 🔴
  * [Apache Netbeans](https://netbeans.apache.org/) - 开发环境、工具平台与应用框架。 ✅
  * [apiary.io](https://apiary.io/) - 协作式 API 设计服务，提供即时 API mock 和自动生成的文档（免费版支持不限量的 API blueprint、不限用户数，含一个管理员账号和托管文档）。 ✅
  * [BBEdit](https://www.barebones.com/) - BBEdit 是 macOS 上一款流行且可扩展的编辑器。Free Mode 提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可付费升级解锁高级功能。 ✅
  * [Binder](https://mybinder.org/) - Binder：把一个 Git 仓库变成一组可交互的 Notebook。这是一项免费的公共服务。 🟡
  * [BlueJ](https://bluej.org) - BlueJ：一款专为初学者设计的免费 Java 开发环境，全球有数百万用户。由 Oracle 提供支持，并配有简单的 GUI 帮助初学者入门。 ✅
  * [Brackets](https://brackets.io/) - Brackets：一款专为 Web 开发设计的开源文本编辑器，轻量、易用且高度可定制。 ✅
  * [cacher.io](https://www.cacher.io) - Cacher：带标签功能的代码片段整理工具，支持 100+ 种编程语言。 ✅
  * [cocalc.com](https://cocalc.com/) - CoCalc：云端协同计算平台。在浏览器中即可使用完整的 Ubuntu 环境，内置协作功能，并预装大量用于数学、科学与数据科学的免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikit-learn 等。 🟡
  * [Code::Blocks](https://codeblocks.org) - Code::Blocks：免费的 Fortran 与 C/C++ IDE。开源，可运行于 Windows、macOS 和 Linux。 ✅
  * [Codeground](https://codeground.ai/) - CoderPad：免费的浏览器 IDE 与 playground，支持 15+ 种语言，外加 Postgres、MySQL、MongoDB 和 Redis。支持分享代码片段、编程面试和云端工作区。免费 playground 无需安装。 ✅
  * [codiga.io](https://codiga.io/) - Codiga：编程助手，可直接在 IDE 中搜索、定义和复用代码片段。对个人和小型组织免费。 ✅
  * [Components.studio](https://webcomponents.dev/) - 以隔离方式开发组件，通过 story 进行可视化展示与测试，并发布到 npm。 ✅
  * [Eclipse Che](https://www.eclipse.org/che/) - 面向开发者团队的基于 Web 的 Kubernetes 原生 IDE，支持多语言开发。开源且由社区驱动。Red Hat 托管的在线实例可通过 [workspaces.openshift.com](https://workspaces.openshift.com/) 访问。 ✅
  * [ForgeCode](https://forgecode.dev/) - 支持 Claude、GPT4 系列、Grok、Deepseek、Gemini 及所有前沿模型的 AI 结对编程工具。原生适配你的 CLI，并可与任何 IDE 无缝集成。免费额度包含基础 AI 模型访问与本地处理。 🟡
  * [GetVM](https://getvm.io) - Chrome 侧边栏，可即时获取免费 Linux 环境与 IDE。免费额度为每天 5 台 VM。 ❓
  * [JDoodle](https://www.jdoodle.com) - 支持 60 多种编程语言的在线编译器与编辑器，REST API 代码编译提供免费套餐，每天最多 200 credits。 ✅
  * [jetbrains.com](https://jetbrains.com/products.html) - 生产力工具、IDE 与部署工具（如 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) 等）。为学生、教师、开源项目及用户组提供免费许可证。 ✅
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - 提供一些 REST API 端点，返回 JSON 格式的模拟数据。源代码也已开放，如需在本地运行服务器可以使用。 ✅
  * [Lazarus](https://www.lazarus-ide.org/) - Lazarus 是一款与 Delphi 兼容的跨平台 IDE，用于快速应用程序开发（RAD）。 ✅
  * [LiveCodes](https://livecodes.io) - 开源的客户端代码 playground，支持 90+ 种语言/框架。项目可保存、导出、分享、同步、部署（到 GitHub Pages）并嵌入网页。适配移动端。可自行托管。免费且不限使用量。无需账号。 ✅
  * [MarsCode](https://www.marscode.com/) - 一款免费的 AI 驱动云端 IDE。 ❓
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成假 JSON 数据的轻量级 API mock 微服务。 ❓
  * [mockaroo](https://mockaroo.com/) - Mockaroo 可生成 CSV、JSON、SQL 和 Excel 格式的逼真测试数据，也可为后端 API 创建 mock。 ✅
  * [Mocklets](https://mocklets.com) - 基于 HTTP 的 mock API 模拟器，可帮助模拟 API，从而加快并行开发并进行更全面的测试，提供终身免费额度。 ✅
  * [OneCompiler](https://onecompiler.com/) - 免费在线编译器，支持 70+ 种语言，包括 Java、Python、C++、JavaScript。 ✅
  * [OnlineGDB](https://onlinegdb.com) - 一款免费的在线 IDE，支持 40+ 种语言，预装了大量库；还提供调试功能、编译 flags、教程以及 Q&A 问答页面。 ✅
  * [pterocos](https://pterocos.eu.org) - 一个免费开源的面向前端开发者的浏览器端编码环境。使用 VS Code 级别的编辑器（Monaco）编写 HTML、CSS 和 JS，支持实时预览、SCSS/TypeScript/Babel，并配有用于调试和建议的 AI 聊天助手。所有项目保存到本地存储。永久免费——无需注册账号。 ✅
  * [Paiza](https://paiza.cloud/en/) - 在浏览器中开发 Web 应用，无需任何本地环境配置。免费版提供一台服务器，生命周期为 24 小时，每天可运行 4 小时，配备 2 个 CPU 核心、2 GB 内存和 1 GB 存储。 ✅
  * [PHPSandbox](https://phpsandbox.io/) - PHP 在线开发环境。 ❓
  * [Replit](https://replit.com/) - 支持多种编程语言的云端编码环境。 ✅
  * [RunMat](https://runmat.com/sandbox) - 浏览器中的 GPU 加速数值计算 IDE。可编写并运行 MATLAB 语法的 .m 文件，通过 WebAssembly 和 WebGPU 自动获得 GPU 加速。无需安装、无需账号、无许可费用。开源运行时，支持 CLI、NPM 包和 Jupyter kernel。 ❓
  * [SoloLearn](https://code.sololearn.com) - 适合运行代码片段的云端编程演练场，支持多种编程语言。运行代码无需注册，但在平台上保存代码则需要注册。还为初中级学习者提供免费课程。 ✅
  * [stackblitz.com](https://stackblitz.com/) - 在线/云端代码 IDE，用于创建、编辑和部署全栈应用。支持各种流行的基于 NodeJs 的前端与后端框架。创建新项目的短链接：[https://node.new](https://node.new)。 ✅
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一款流行、用途广泛且高度可定制的文本编辑器，适用于编码和文本编辑任务。 ✅
  * [Visual Studio Code](https://code.visualstudio.com/) - 重新定义并优化的代码编辑器，面向现代 Web 与云应用的构建和调试。由 Microsoft 开发。 ✅
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) - 功能齐全的 IDE，拥有数千个扩展，支持跨平台应用开发（可下载适用于 iOS 和 Android 的 Microsoft 扩展）、桌面、Web 和云开发，支持多语言（C#、C++、JavaScript、Python、PHP 等）。 ✅
  * [VSCodium](https://vscodium.com/) - 微软编辑器 VSCode 的社区驱动发行版，不含遥测/追踪，二进制文件以自由许可证分发 ✅
  * [wakatime.com](https://wakatime.com/) - 通过文本编辑器插件量化统计你的编码活动，提供功能有限的免费套餐。 ✅
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一个开源、跨平台的终端，助力无缝工作流。可在终端内内联渲染任意内容，并保存会话与历史记录。基于开放的 Web 标准构建。支持 MacOS 和 Linux。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-44"></a>
## 分析、事件与统计

  * [amplitude.com](https://amplitude.com/) - 每月 100 万事件，最多 2 个应用 ❓
  * [AppFit](https://appfit.io) - AppFit 是一款综合性的分析与产品管理工具，旨在实现跨平台的分析数据与产品更新的无缝管理。免费计划包含每月 10,000 个事件、产品日志与每周洞察。 ❓
  * [Aptabase](https://aptabase.com) - 开源、注重隐私且简洁的移动与桌面应用分析工具。提供 Swift、Kotlin、React Native、Flutter、Electron 等多种 SDK。每月最多 20,000 个事件免费。 ❓
  * [Avo](https://avo.app/) - 简化分析发布工作流。提供单一事实来源的埋点方案、类型安全的分析埋点库、应用内调试器以及数据可观测性，在发布前捕获所有数据问题。免费版支持两名工作区成员和 1 小时的数据可观测性回溯。 ❓
  * [Beampipe.io](https://beampipe.io) - Beampipe 是一款简洁、注重隐私的网站分析服务，免费额度支持最多 5 个域名与每月 10k 次页面浏览。 ❓
  * [Census](https://www.getcensus.com/) - Reverse ETL 与运营分析平台。可将数据仓库中的 10 个字段同步到 Salesforce、Zendesk、Amplitude 等 60+ SaaS。 🟡
  * [Clicky](https://clicky.com) - 网站分析平台。免费版支持 1 个网站，提供 3000 次浏览量的分析。 ❓
  * [counter.dev](https://counter.dev) - 简单易用的网站统计分析工具，因此对隐私友好。可免费使用，或按意愿捐赠付费。 ✅
  * [DevDome](https://devdome.com) - 面向 WordPress 的无 Cookie 网站分析服务，可将真人访客与机器人及 AI 爬虫分开统计。免费版：站点数量不限，每月 50,000 次真人页面浏览量，数据保留 90 天。 ✅
  * [DocBeacon](https://docbeacon.io) - 安全的文档共享服务，提供文档追踪与互动分析。免费计划支持最多 20 份 PDF 文档（单份最大 10 MB）、10 个联系人，以及每份文档 2 次分享，并提供浏览量、下载量、阅读时长与互动情况的基础分析。 🟡
  * [Dwh.dev](https://dwh.dev) - Data Cloud 可观测性解决方案（Snowflake）。个人使用免费。 🟡
  * [Expensify](https://www.expensify.com/) - 费用报销，免费的个人报销审批工作流 ❓
  * [getinsights.io](https://getinsights.io) - 注重隐私、不使用 Cookie 的网站分析服务，每月 3k 事件以内免费。 ✅
  * [Gizmo Analytics](https://gizmoanalytics.io/) - 为管理大量网站的用户提供的简单分析工具。可手动安装，也可以让 Claude/Cursor 代劳。免费额度：每月最多 10k events。 ❓
  * [GoatCounter](https://www.goatcounter.com/) - GoatCounter 是一个开源的网站分析平台，既提供托管服务（非商业用途免费），也可自行部署。它致力于提供易用且有实际意义的隐私友好型网站分析，可作为 Google Analytics 或 Matomo 的替代方案。免费额度仅限非商业用途，包含不限数量的站点、六个月的数据保留期，以及每月 100k 次页面浏览。 ✅
  * [Google Analytics](https://analytics.google.com/) - Google 提供的网站流量统计分析服务，用于跟踪和报告网站访问量、用户行为与转化数据，标准版免费使用。 🔴
  * [heap.io](https://heap.io) - 自动捕获 iOS 或 Web 应用中用户的每项操作。免费额度为每月 10K 个会话。 ✅
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个 Reverse ETL 平台，帮助你将客户数据从数据仓库同步到 CRM、营销和客服支持工具。免费额度提供一个同步目的地。 ❓
  * [HitKeep](https://hitkeep.com/) - 注重隐私的开源网站与产品分析平台，提供免费云套餐，包含 3 个网站、3 名团队成员、60 天数据保留，以及 AI 分析、目标、漏斗、事件和 hits（命中数）统计。 ✅
  * [Hotjar](https://hotjar.com) - 网站分析与报告。免费版每天允许 2000 次页面浏览（pageviews）。每天 100 个快照（最大容量：300）。3 个快照热力图可保存 365 天。团队成员数量不限。另提供应用内及独立问卷、带截图的反馈组件。免费层可创建 3 个问卷和 3 个反馈组件，每月收集 20 条回复。 ✅
  * [LogSpot](https://logspot.io) - 功能完整的一体化 Web 与产品分析平台，包含可嵌入的分析组件（widget）与自动化机器人（支持 Slack、Telegram 和 webhook）。免费套餐每月包含 10,000 个事件。 ✅
  * [Mixpanel](https://mixpanel.com/) - 每月追踪用户 100,000 名，数据历史与席位不限量，数据驻留可选美国或欧盟 🟡
  * [Moesif](https://www.moesif.com) - 面向 REST 和 GraphQL 的 API 分析服务。(每月最多 500,000 次 API 调用免费) ✅
  * [PostHog](https://posthog.com) - 完整的产品分析（Product Analytics）套件免费，每月最多 1m（100 万）个跟踪事件。另提供不限量的应用内调查（In-App Surveys），每月 250 条回复。 ✅
  * [Repohistory](https://repohistory.com) - 美观的仪表盘，可追踪 GitHub 仓库超过 14 天的流量历史。免费套餐允许用户监控单个仓库。 ❓
  * [Row Zero](https://rowzero.io) - 极速的互联电子表格。可直接连接数据库、S3 和 API。即时导入、分析、绘制图表并共享数百万行数据。提供 3 个免费（永久）工作簿。 ✅
  * [Rybbit](https://rybbit.io) - 开源且不使用 Cookie 的 Google Analytics 替代品，易用性号称提升 10 倍。免费套餐每月 3,000 个事件。 ✅
  * [Seline](https://seline.so) - Seline 是一款简洁且注重隐私的网站与产品分析工具。无 Cookie、轻量、独立运营。免费套餐每月包含 3,000 个事件，并可使用全部功能，例如仪表盘、用户旅程、漏斗等。 ❓
  * [StatCounter](https://statcounter.com/) - 网站访客分析服务。免费计划可分析最近 500 位访客的数据。 ✅
  * [Statsig](https://statsig.com) - 集分析、feature flag 与 A/B 测试于一体的平台。每月最多 1m 个计量事件免费。 ✅
  * [TraceLog](https://tracelog.io/) - 面向电商的 AI 分析服务。用自然语言就你的分析数据提问，获取可执行的建议，并借助 AI 驱动的洞察提升收入。每月最多 10k 事件免费。 ❓
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据与像素（pixel）方面的问题，维护始终最新的 tracking plan，并促进无缝协作。可将其部署到有真实流量的生产环境，或无需编写代码即可为回归测试添加分析覆盖。 ❓
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的轻量级隐私优先 Google Analytics 替代品。页面浏览量、访客数不限量，页面热力图与目标追踪也不限量。免费版支持最多 3 个域名，每个域名 600 次会话回放。 ❓
  * [Umami](https://umami.is/) - 简单、快速、注重隐私的开源 Google Analytics 替代品。 ✅
  * [usabilityhub.com](https://usabilityhub.com/) - 让真人测试设计稿和原型图，并追踪访客。免费版支持 1 名用户，测试次数不限。 ❓

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-45"></a>
## 访客会话录制

  * [FullStory.com](https://www.fullstory.com) - 每月 1,000 个会话，数据保留一个月，含三个用户席位。更多信息见[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。 ✅
  * [howuku.com](https://howuku.com) - 跟踪用户交互、参与度与事件。免费额度：每月最多 5,000 次访问 ❓
  * [inspectlet.com](https://www.inspectlet.com/) - 单个网站每月 2,500 个会话的免费额度 ❓
  * [LogRocket.com](https://www.logrocket.com) - 每月 1,000 个会话，数据保留 30 天，含错误追踪与实时模式（live mode） ✅
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话录制完全免费，“无流量限制”、不限项目数量、且不进行抽样 ✅
  * [mouseflow.com](https://mouseflow.com/) - 单个网站每月免费 500 次会话 ✅
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放（session replay）工具，配备用于复现 bug 的开发者工具、用于实时支持的 live session 功能，以及产品分析套件。每月 1000 个 session 可使用全部功能，数据保留 7 天。 ✅
  * [Reactflow.com](https://www.reactflow.com/) - 每个站点：1,000 次页面浏览/天，3 个热力图，3 个小组件，免费 bug 跟踪 ✅
  * [smartlook.com](https://www.smartlook.com/) - 为 Web 和移动应用提供免费套餐（每月 1500 个会话）、三张热力图、一个漏斗、1 个月的数据历史 ✅
  * [UXtweak.com](https://www.uxtweak.com/) - 录制并回放访客如何使用你的网站或应用。小型项目可免费不限时长使用。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-46"></a>
## 国际手机号码验证 API 与 SDK

  * [numverify](https://numverify.com/) - 全球电话号码校验与归属查询 JSON API。每月 100 次 API 请求。 ✅
  * [veriphone](https://veriphone.io/) - 免费、快速、可靠的 JSON API，提供全球电话号码验证。每月 1000 次请求。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-47"></a>
## 支付与账单集成

  * [Adapty.io](https://adapty.io/) - 提供开源 SDK 的一站式方案，用于在 iOS、Android、React Native、Flutter、Unity 或 Web 应用中集成移动端应用内订阅。月收入 $10k 以内免费。 ✅
  * [AllRatesToday](https://allratestoday.com) - 提供 150+ 种货币的实时中间市场汇率，附官方 JavaScript、Python 和 PHP SDK。免费层包含每月 300 次 HTTPS 请求。 ✅
  * [Churnkey](https://churnkey.co) - 面向订阅制业务的取消流程（开源）、流失指标与收入分析。永久免费。 ✅
  * [Currencyapi](https://currencyapi.com) - 免费的货币换算与汇率数据 API。私人使用免费：每月 300 次请求、每分钟 10 次。 ✅
  * [CurrencyApi](https://currencyapi.net/) - 以 JSON 和 XML 格式提供法定货币与加密货币的实时汇率。免费层提供每月 1,250 次 API 请求。 ✅
  * [CurrencyFreaks](https://currencyfreaks.com/) - 提供当前与历史货币汇率。提供免费的 DEVELOPER 套餐，每月 1000 次请求。 ✅
  * [currencylayer](https://currencylayer.com/) - 为你的业务提供可靠的汇率与货币转换服务，免费额度为每月 100 次 API 请求。 ✅
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 易于使用的货币转换 JSON API。免费档每天更新一次，每月上限 1,500 次请求。 ✅
  * [Exchange Rate API](https://exchange-rateapi.com) - 提供 160+ 种货币的实时汇率，每 60 秒更新，并附官方 SDK。免费档包含每月 300 次请求。 ✅
  * [FraudLabsPRO](https://www.fraudlabspro.com) - 帮助商家防范支付欺诈与拒付（chargeback）。提供免费的 Micro Plan，每月 500 次查询。 ✅
  * [FxRatesAPI](https://fxratesapi.com) - 提供实时与历史汇率。免费档需注明数据来源（attribution）。 ✅
  * [Moesif API Monetization](https://www.moesif.com/) - 通过按量计费从 API 获得收入。可对接 Stripe、Chargebee 等。免费档提供每月 30,000 个事件。 ✅
  * [ParityVend](https://www.ambeteco.com/ParityVend/) - 根据访客所在地区自动调整定价，拓展全球业务、触达新市场（购买力平价）。免费套餐包含每月 7,500 次 API 请求。 ✅
  * [Qonversion](https://qonversion.io/) - 一体化跨平台订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买与变现。兼容 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和 Web。每月追踪收入 $10k 以内免费。 ✅
  * [RevenueCat](https://www.revenuecat.com/) - 为 iOS 和 Android 的应用内购买与订阅提供托管后端服务。追踪收入在 $2.5k/mo 以内免费。 🟡
  * [vatlayer](https://vatlayer.com/) - 即时 VAT 税号验证与欧盟 VAT 税率 API，每月免费 100 次 API 请求 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-48"></a>
## Docker 相关

  * [Appish](https://appi.sh/) - Host Docker containers for demos with just a docker push. Free tier includes 1 slot with 2-hour sessions. ❓
  * [Container Registry Service](https://container-registry.com/) - 基于 Harbor 的容器管理解决方案。免费层为私有仓库提供 1 GB 存储空间。 ❓
  * [Docker Hub](https://hub.docker.com) - 提供 1 个免费私有仓库及不限数量的公开仓库，可用于构建和存储 Docker 镜像 🔴
  * [quay.io](https://quay.io/) - 构建并存储容器镜像，免费公共仓库数量不限 🔴
  * [ttl.sh](https://ttl.sh/) - 匿名且临时的 Docker 镜像仓库 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-49"></a>
## 开发者博客网站

  * [AyeDot](https://ayedot.com/) - Share your ideas, knowledge, and stories with the world for Free in the form of Modern multimedia short-format Miniblogs. ❓
  * [BearBlog](https://bearblog.dev/) - 极简风格的 Markdown 博客与网站搭建工具。 ❓
  * [Dev.to](https://dev.to/) - 程序员分享想法、互相帮助共同成长的社区。 ✅
  * [Hashnode](https://hashnode.com/) - 面向开发者的省心博客软件！ ✅
  * [Medium](https://medium.com/) - 更用心地对待对你重要的事。 ❓
  * [JustBlogged](https://justblogged.com) - 免费博客平台，支持自定义域名，全球访问速度快。 ❓

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-50"></a>
## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助你将网站的访问者转化为活跃的社区。 ✅
  * [IntenseDebate](https://intensedebate.com/) - 一款功能丰富的评论系统，支持 WordPress、Tumblr、Blogger 及众多其他网站平台。 🔴
  * [Remarkbox](https://www.remarkbox.com/) - 开源的托管评论平台，按能力付费（pay what you can）即可获得“在几个域名上拥有一名版主，并完全掌控评论行为与外观”的方案。 ✅
  * [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。用 GitHub issues 为博客评论、wiki 页面等提供评论功能！ ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-51"></a>
## 截图 API

  * [ApiFlash](https://apiflash.com) - 基于 AWS Lambda 和 Chrome 的截图 API。支持整页截图、捕获计时信息与视口尺寸。 ✅
  * [microlink.io](https://microlink.io/) - 它可将任意网站转化为数据，例如 metatags 规范化、美观的链接预览、网页抓取能力，或截图即服务。每天 50 次请求免费，天天可用。 ✅
  * [PhantomJsCloud](https://PhantomJsCloud.com) - 浏览器自动化与页面渲染。免费层每天最多 500 个页面。免费层自 2017 年起提供。 ✅
  * [Renderwolf](https://ironfang.uk/renderwolf) - 总部位于英国的截图、PDF、图片、二维码及片段渲染 API，提供可复用模板和签名 URL。每月 250 次免费渲染，开始使用无需填写支付信息。 ✅
  * [screenshotbase.com](https://screenshotbase.com) - 每月 300 次免费截图。可对任意 URL 进行截图。快速、免费且可扩展。 ✅
  * [screenshotlayer.com](https://screenshotlayer.com/) - 对任意网站进行高度可定制的快照捕获。每月免费 100 次快照。 ✅
  * [screenshotmachine.com](https://www.screenshotmachine.com/) - 每月免费截取 100 张快照，支持 png、gif 和 jpg 格式，可截取完整长页面，不限于首页。 ✅
  * [Screenshot Scout](https://screenshotscout.com/) - 面向开发者的截图 API。一次请求即可从任意 URL 生成干净、可直接用于生产环境的截图。免费套餐永久提供每月 200 张截图。 ✅
  * [Shotpipe](https://shotpipe.io) - 为静态站点打造的截图与 Open Graph 图片 API。免费档每月包含 100 次渲染，无需绑卡。缓存的渲染免费。 ✅
  * [SnapAPI](https://snapapi.pics) - 提供截图、视频录制、PDF 生成与网页数据提取的 API。免费套餐每月包含 200 张截图。 ✅
  * [thumbnail.ws](https://thumbnail.ws) - 用于生成网站缩略图的 API。每月免费 1,000 次请求。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-52"></a>
## Flutter 相关及无需 Mac 构建 iOS 应用

  * [CodeMagic](https://codemagic.io/) - Codemagic 是面向移动应用的完全托管式 CI/CD。可以通过基于 GUI 的 CI/CD 工具进行构建、测试和部署。免费档提供每月 500 分钟免费时长，以及一台 2.3 GHz、8 GB 内存的 Mac Mini 实例。 ✅
  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代化的 Flutter 在线 IDE，是创建、调试和构建跨平台项目的理想选择。使用 Flutter 构建 iOS（无需 Mac）和 Android 应用。 ✅
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是一个基于浏览器的拖拽式界面工具，可使用 Flutter 构建移动应用。 🟡

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-53"></a>
## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助企业落实隐私设计（privacy by design），以满足 GDPR 及其他法规要求。免费额度仅限较小团队，且仅限 SaaS 版本。 ✅
  * [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包括同意管理、隐私请求处理（DSAR）和数据映射。免费额度包含核心同意管理功能，另外为通过验证的开源项目免费提供更高级的套餐。 ✅
  * [Cookiefirst](https://cookiefirst.com/) - Cookie 横幅、审计与多语言同意管理解决方案。免费额度提供一次性扫描和单个横幅。 ✅
  * [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie 政策与同意管理。免费额度提供功能有限的隐私政策、Cookie 政策以及 Cookie 横幅。 ✅
  * [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费额度提供大部分功能，但访客数量有限。 ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-54"></a>
## 杂项

  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。可生成精美图片分享（例如用于 Twitter / Facebook 帖子），或以链接形式分享（例如用于聊天或论坛）。 ✅
  * [Blynk](https://blynk.io) - 通过 API 控制、构建和评估 IoT 设备的 SaaS。免费 Developer Plan 包含 5 台设备、免费云与数据存储。也提供移动应用。 ✅
  * [cron-job.org](https://cron-job.org) - 在线 cronjobs 服务。不限数量的任务均可免费使用。 ✅
  * [Cronhooks](https://cronhooks.io/) - 支持定时或周期性触发 webhook。免费套餐允许 5 个临时（ad-hoc）调度。 ✅
  * [datelist.io](https://datelist.io) - 在线预约 / 排期系统。每月最多 5 次预约免费，包含 1 个日历。 🟡
  * [FOSSA](https://fossa.com/) - 可扩展的第三方代码端到端管理，涵盖许可证合规与漏洞。 ✅
  * [Hook Relay](https://www.hookrelay.dev/) - 为你的应用添加 webhook 支持，无需操心底层细节：代办的队列管理、带退避机制的重试以及日志记录。免费计划提供每天 100 次投递、14 天保留期和 3 个 hook 端点。 ❓
  * [Hosting Checker](https://hostingchecker.co) - 查询任意域名、网站或 IP 地址的托管信息，例如 ASN、ISP、所在地等。还包含多种托管与 DNS 相关工具。 ✅
  * [newreleases.io](https://newreleases.io/) - 通过电子邮件、Slack、Telegram、Discord 及自定义 webhook 接收来自 GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo 和 Docker Hub 的新版本发布通知。 🟡
  * [PDFMonkey](https://www.pdfmonkey.io/) - 在仪表板中管理 PDF 模板，调用 API 传入动态数据，即可下载生成的 PDF。每月免费提供 300 份文档。 ✅
  * [Pika Code Screenshots](https://pika.style/templates/code-image) - 通过扩展程序，从代码片段和 VSCode 生成美观、可自定义的截图。 ✅
  * [QuickType.io](https://quicktype.io/) - 从 JSON、schema 和 GraphQL 快速自动生成 model/class/type/interface 和 serializer，在任何编程语言中都能快速、安全地处理数据。可将 JSON 转换为任意语言的美观、类型安全的代码。 ✅
  * [readme.com](https://readme.com/) - 轻松创建漂亮的文档，开源项目免费。 ✅
  * [redirect.pizza](https://redirect.pizza/) - 轻松管理重定向，支持 HTTPS。免费套餐包含 10 个源和每月 100,000 次命中。 ✅
  * [redirection.io](https://redirection.io/) - 面向企业、营销和 SEO 的 HTTP 重定向管理 SaaS 工具。 ✅
  * [redirs.com](https://www.redirs.com/) - 轻松实现域名重定向，带自动 SSL、统计分析和 URL 路径转发。基础用途免费（最多 5 个域名）。 ✅
  * [RedirHub](https://www.redirhub.com/) - API 优先的 URL 重定向基础设施，提供自定义 nameserver、边缘网络、HTTPS 和主动链接监控。免费套餐包含 2 个 hostname、每月 100K 请求、自动 SSL、路径转发和 REST API 访问。 ✅
  * [ReqBin](https://reqbin.com/) - 在线发送 HTTP 请求。常用请求方法包括 GET、POST、PUT、DELETE 和 HEAD。支持 Headers 和 Token 认证。内置基础登录系统，可保存你的请求。 ✅
  * [Smartcar API](https://smartcar.com) - 一个面向汽车的 API，可获取车辆位置、油箱油量、电池电量、里程表读数，以及解锁/锁车门等。 ✅
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取指定经纬度的日出和日落时间。 ✅
  * [superfeedr.com](https://superfeedr.com/) - 提供符合 PubSubHubbub 标准的实时 feed、导出与分析功能。免费版自定义功能较少。 ✅
  * [SurveyMonkey.com](https://www.surveymonkey.com) - 在线创建调查问卷，并在线分析结果。免费计划每个问卷仅允许 10 个问题和 100 份回答。 ✅
  * [SYNCDATE](https://syncdate.app) - 双向同步 Google Calendar。免费层支持 2 个账号、事件数量不限。 🟡
  * [UUID Generator](https://newuuid.com/) - 即时生成 UUID v1、UUID v4、UUID v7、GUID、Nil UUID、CUID v1/v2、NanoID 和 ULID，具备企业级品质。 ✅
  * [Versionfeeds](https://versionfeeds.com) - 为你喜爱的软件发布创建自定义 RSS feed，将你的编程语言、库或常用工具的最新版本汇集到一个 feed 中。（前 3 个 feed 免费） ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-55"></a>
## 远程桌面工具

  * [Parsec](https://parsec.app/) - 个人使用可在不限数量的设备上免费安装，且单台设备最多可同时建立 20 个连接。（非常适合游戏/低延迟场景） ✅
  * [AnyDesk](https://anydesk.com) - 3 台设备免费，会话次数和时长均无限制。 ✅
  * [Getscreen.me](https://getscreen.me) - 免费支持 2 台设备，会话次数和时长均无限制 ✅
  * [RemSupp](https://remsupp.com) - 提供按需远程支持和设备的永久访问（每天免费 2 次会话） ✅
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！ ✅

**[⬆️ 返回顶部](#table-of-contents)**

<a id="sec-56"></a>
## 其他免费资源

  * [get.localhost.direct](https://get.localhost.direct) - 为 localhost 开发提供更优的 `*.localhost.direct` 通配符 SSL 证书（由公共 CA 签发），支持子域名 ❓
  * [GitHub Education](https://education.github.com/pack) - 面向学生的免费服务合集。需要注册。 ✅
  * [Glob tester](https://globster.xyz/) - 一个可用于设计和测试 glob 模式的网站，同时提供学习 glob 模式的相关资源。 ❓
  * [Killer Coda](https://killercoda.com/) - 浏览器内的交互式 Playground，可用于学习 Linux、Kubernetes、容器、编程、DevOps、网络 ✅
  * [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) - 获取为 Microsoft 365 平台构建解决方案所需的免费沙盒、工具及其他资源。该订阅为 90 天的 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含 Windows），可续期。只要你保持开发活跃（通过遥测数据和算法衡量），订阅就会自动续期。 🟡
  * [MySQL Visual Explain](https://mysqlexplain.com) - 易于理解且免费的 MySQL EXPLAIN 输出可视化工具，用于优化慢查询。 ✅
  * [RedHat for Developers](https://developers.redhat.com) - 专为开发者提供的 Red Hat 产品免费使用权限，包括 RHEL、OpenShift、CodeReady 等。仅限个人计划。另提供免费电子书供参考。 ✅
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) - 免费发送和接收测试短信。 ❓
  * [SimpleBackups.com](https://simplebackups.com/) - 面向服务器和数据库（MySQL、PostgreSQL、MongoDB）的备份自动化服务，备份直接存储到云存储服务商（AWS、DigitalOcean 和 Backblaze）。提供支持 1 个备份的免费计划。 ✅
  * [SimpleRestore](https://simplerestore.io) - 轻松完成 MySQL 备份恢复。无需代码或服务器，即可将 MySQL 备份恢复到任意远程数据库。 ❓
  * [SnapShooter](https://snapshooter.com/) - 面向 DigitalOcean、AWS、LightSail、Hetzner 和 Exoscale 的备份解决方案，支持将数据库、文件系统和应用直接备份到基于 s3 的存储。提供每日备份 1 个资源的免费计划。 ✅

**[⬆️ 返回顶部](#table-of-contents)**
