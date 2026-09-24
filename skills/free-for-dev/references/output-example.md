# 输出范例

用户：「我的个人项目要 Postgres 数据库和登录鉴权，想找免费的，最好别太折腾。」

正确流程：读 `data/meta.json`（确认新鲜度）→ 需求映射：「数据库」→ managed-data-services.md，「鉴权」→ authentication-authorization-and-user-management.md，「一次搞定的后端」→ baas.md → 读这三个文件 → 输出：

---

你的需求「数据库 + 鉴权」用后端全家桶一次就能解决，优先看这类：

1. **Supabase** ✅
   开源 Firebase 替代方案：免费计划含身份验证、实时数据库（Postgres）与对象存储，一个服务全包。大陆可直连访问注册。
   https://supabase.com

2. **Neon** 🟡
   只要纯 Postgres 的话选它：每项目 0.5 GB 存储、最多 100 个项目、不限数据库数量，还带数据库分支（主分支常驻，非主分支每月 20 小时活跃计算）。可访问，但注册/控制台部分资源直连不稳，建议自备网络条件。
   https://neon.tech

鉴权想单独做的话，分类里还有支持 SSO/MFA 的托管服务可选，需要我再展开吗？

`⚠️ 数据日期 2026-09-24 · 额度以官网为准 · 完整清单：https://kael-odin.github.io/free-for-dev-zh/`

---

## 反例（不要这样输出）

- ❌ 「推荐 Supabase、Firebase、Appwrite，都是不错的免费 BaaS。」——没有额度数字、没有可用性标注、没有链接，用户还得自己去查。
- ❌ 直接把 baas.md 全部 30 条贴出来——清单不是推荐。
- ❌ 凭记忆推荐「Railway 免费套餐每月 5 美元额度」——数据文件里没有或已变化的额度，一律以文件为准，记忆里的数字禁止出现。
