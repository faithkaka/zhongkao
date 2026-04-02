# 📦 部署方案说明

## ⚠️ 重要提示

当前应用使用 **Python + SQLite 后端**，**不能直接部署到 GitHub Pages**！

GitHub Pages 只能托管静态文件（HTML/CSS/JS），无法运行 Python 后端服务。

---

## 🎯 可选部署方案

### 方案 A：GitHub Pages + localStorage 版本（简单）

**适合场景**：个人使用，不需要跨设备同步数据

**步骤**：
1. 切换回 localStorage 版本（修改 `storage-api.js` → `storage.js`）
2. 推送到 GitHub 仓库
3. 开启 GitHub Pages

**访问地址**：
```
https://你的用户名.github.io/仓库名/
```

**优缺点**：
| 优点 | 缺点 |
|------|------|
| ✅ 免费托管 | ❌ 数据存在浏览器本地 |
| ✅ 无需服务器 | ❌ 切换设备数据不同步 |
| ✅ 部署简单 | ❌ 清除缓存会丢失数据 |

---

### 方案 B：Vercel/Netlify + 云数据库（推荐）⭐

**适合场景**：需要跨设备同步，专业部署

**步骤**：
1. 前端部署到 **Vercel** 或 **Netlify**
2. 后端改用 **Supabase**（免费 PostgreSQL）或 **Railway**
3. 修改 API 地址指向云服务

**访问地址**：
```
https://你的应用名.vercel.app
或
https://你的应用名.netlify.app
```

**优缺点**：
| 优点 | 缺点 |
|------|------|
| ✅ 数据云端存储 | ❌ 需要注册账号 |
| ✅ 跨设备同步 | ❌ 配置稍复杂 |
| ✅ 自动 HTTPS | ❌ 有免费额度限制 |

---

### 方案 C：GitHub + Railway/Render（后端托管）

**适合场景**：保留当前 Python 后端架构

**步骤**：
1. 代码推送 GitHub
2. 后端部署到 **Railway** 或 **Render**（支持 Python）
3. 前端可以用 GitHub Pages 或同域名

**访问地址**：
```
https://你的应用名.railway.app
或
https://你的应用名.onrender.com
```

**优缺点**：
| 优点 | 缺点 |
|------|------|
| ✅ 保留现有架构 | ❌ Railway 需付费（$5/月起） |
| ✅ 完整功能 | ❌ Render 免费层有休眠 |
| ✅ 数据持久化 | ❌ 配置环境变量 |

---

### 方案 D：纯前端版本（ localStorage ）

**我可以帮你改成纯前端版本**，直接部署 GitHub Pages：

**步骤**：
1. 我帮你改回 localStorage 版本
2. 创建 `gh-pages` 分支
3. 推送并开启 GitHub Pages

**访问地址**：
```
https://你的用户名.github.io/zhongkao-web/
```

---

## 🤔 你希望用哪个方案？

| 方案 | 难度 | 成本 | 数据同步 | 推荐度 |
|------|------|------|----------|--------|
| A: GitHub Pages + localStorage | ⭐ | 免费 | ❌ | ⭐⭐⭐ |
| B: Vercel + Supabase | ⭐⭐⭐ | 免费额度 | ✅ | ⭐⭐⭐⭐⭐ |
| C: Railway 后端 | ⭐⭐ | $5/月 | ✅ | ⭐⭐⭐⭐ |
| D: 纯前端版本 | ⭐ | 免费 | ❌ | ⭐⭐⭐⭐ |

---

## 🚀 快速部署（方案 D - 纯前端）

如果你希望**立即部署到 GitHub Pages**，我可以：

1. 帮你改回 localStorage 版本（放弃后端数据库）
2. 创建部署脚本
3. 生成 `README.md` 部署说明

**需要我现在开始吗？**

---

## 📝 GitHub Pages 部署步骤（方案 D）

```bash
# 1. 创建仓库
cd /Users/kuohai/.homiclaw/workspace/zhongkao-web
git init
git add .
git commit -m "Initial commit"

# 2. 关联远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 3. 推送到 main 分支
git branch -M main
git push -u origin main

# 4. 在 GitHub 仓库设置中：
# Settings → Pages → Source → 选择 main 分支 → Save

# 5. 等待几分钟后访问：
# https://你的用户名.github.io/你的仓库名/
```

---

**请告诉我你希望用哪个方案，我帮你完成部署！** 🎯