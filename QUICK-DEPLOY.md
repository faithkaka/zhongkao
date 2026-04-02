# 🚀 GitHub Pages 部署指南

## 快速开始

```bash
# 1. 进入项目目录
cd /Users/kuohai/.homiclaw/workspace/zhongkao-web

# 2. 运行部署脚本
chmod +x deploy.sh
./deploy.sh
```

## 步骤详解

### 步骤 1：创建 GitHub 仓库

1. 打开 <https://github.com/new>
2. 输入仓库名：`zhongkao-web`
3. 选择「Public」（公开）
4. 点击「Create repository」

### 步骤 2：推送代码

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/zhongkao-web.git
git push -u origin main
```

### 步骤 3：开启 GitHub Pages

1. 打开 GitHub 仓库页面
2. 进入 **Settings** → **Pages**
3. **Source**: 选择 `main` 分支
4. **Folder**: 选择 `/(root)`
5. 点击 **Save**

等待 1-2 分钟后，访问：
```
https://你的用户名.github.io/zhongkao-web/
```

## ✅ 已完成的修改

| 文件 | 说明 |
|------|------|
| `js/storage.js` | 纯 localStorage 版本，无需后端 |
| `deploy.sh` | 一键部署脚本 |
| `README-GITHUB-PAGES.md` | 详细说明文档 |
| `index.html` | 切换到 localStorage 版本 |

## 💾 数据说明

⚠️ **重要**：数据保存在浏览器 localStorage 中
- ✅ 不同设备数据不共享（无法自动同步）
- ❌ 清除浏览器缓存会导致数据丢失
- 💡 如需同步数据，请使用后端版本

## 📱 手机使用

无需配置后端 API！直接在手机浏览器打开：
```
https://你的用户名.github.io/zhongkao-web/
```

**推荐操作**：添加到手机桌面（像 APP 一样打开）
- iOS: Safari → 分享 →「添加到主屏幕」
- Android: Chrome → 菜单 →「添加到主屏幕」