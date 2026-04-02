# 📚 浙江初中刷题打卡 - 纯前端版本

> 专为 GitHub Pages 部署优化的纯前端版本，无需后端服务器！

## ✨ 特性

- 🚀 **零后端**：纯 HTML/CSS/JavaScript，无需 Python 服务器
- 📱 **响应式设计**：完美支持手机、平板、电脑
- 💾 **本地存储**：数据保存在浏览器 localStorage
- 👥 **多用户**：支持创建多个用户，独立学习数据
- 📊 **学习统计**：打卡天数、总题数、正确率一目了然
- 📝 **错题本**：自动收集错题，支持按科目筛选
- 📅 **历史记录**：查看每次练习的详细记录
- 🔄 **进度保存**：中途退出也不怕，下次继续

## 🚀 快速部署到 GitHub Pages

### 方法一：使用部署脚本（推荐）

```bash
# 1. 进入项目目录
cd /Users/kuohai/.homiclaw/workspace/zhongkao-web

# 2. 给脚本添加执行权限
chmod +x deploy.sh

# 3. 运行部署脚本
./deploy.sh
```

脚本会自动：
- 初始化 Git 仓库
- 配置远程仓库
- 推送到 main 分支

然后在 GitHub 仓库设置中开启 Pages 即可。

### 方法二：手动部署

```bash
# 1. 初始化 Git
git init
git add .
git commit -m "Initial commit"

# 2. 关联远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/zhongkao-web.git

# 3. 推送到 main 分支
git branch -M main
git push -u origin main
```

### GitHub Pages 设置

1. 打开 GitHub 仓库
2. 进入 **Settings** → **Pages**
3. 在 **Source** 下选择：
   - Branch: `main`
   - Folder: `/ (root)`
4. 点击 **Save**

等待几分钟后，访问地址格式为：
```
https://你的用户名.github.io/zhongkao-web/
```

## 📱 使用方法

### 首次使用

1. 打开应用后，点击右上角用户头像
2. 输入用户名创建用户（如：小明、小红）
3. 创建完成后自动切换到该用户

### 开始练习

1. 在首页选择学期（上册/下册）
2. 点击"直接开始今日练习"
3. 完成 30 道题目后查看答案解析
4. 系统自动记录学习数据

### 查看错题

1. 点击首页"错题本"按钮
2. 可以按科目筛选错题
3. 支持删除单道错题或清空整个错题本

### 查看历史记录

1. 点击首页"历史记录"按钮
2. 查看每次练习的详细数据
3. 包括答题情况、用时、各科表现

## 📁 文件说明

```
zhongkao-web/
├── index.html          # 主页面
├── manifest.json       # PWA 配置
├── css/
│   ├── style.css       # 主要样式
│   └── user.css        # 用户界面样式
├── js/
│   ├── data.js         # 题库数据
│   ├── grade7-lower.js # 七年级下册题目
│   ├── storage.js      # 本地存储逻辑 ⭐
│   └── app.js          # 应用主逻辑
├── deploy.sh           # 部署脚本
└── README.md           # 说明文档
```

## 💾 数据存储说明

### 存储位置

所有数据都保存在浏览器的 **localStorage** 和 **sessionStorage** 中：

- `zhongkao_users` - 用户列表
- `zhongkao_history` - 练习历史
- `zhongkao_wrongs` - 错题本
- `zhongkao_state` - 练习进度
- `zhongkao_current_user` - 当前用户（sessionStorage，关闭页面后清除）

### 注意事项

⚠️ **重要提示**：

1. **数据不出浏览器**：每个浏览器的数据是独立的
2. **切换设备不同步**：手机和电脑的数据不会自动同步
3. **清除缓存会丢失**：清除浏览器缓存会删除所有数据
4. **建议定期导出**：重要数据建议定期截图备份

### 多设备使用

如果你在手机和电脑上使用：
- 数据会分别保存在各自设备上
- 无法自动同步
- 这是正常现象（纯前端版本的特性）

## 🎨 自定义

### 修改题库

题库数据在 `js/data.js` 和 `js/grade7-lower.js` 中，可以自行添加或修改题目。

题目格式：
```javascript
{
    id: 1,
    subject: '语文',
    question: '题目内容',
    options: ['选项 A', '选项 B', '选项 C', '选项 D'],
    answer: 'A',
    explanation: '答案解析'
}
```

### 修改样式

- 整体样式：`css/style.css`
- 用户界面：`css/user.css`

## 📊 与后端版本的区别

| 特性 | 纯前端版本 | 后端版本 |
|------|------------|----------|
| 部署难度 | ⭐ 简单 | ⭐⭐⭐ 复杂 |
| 成本 | 免费 | 需要服务器 |
| 数据同步 | ❌ 不同步 | ✅ 可同步 |
| 数据持久性 | 浏览器本地 | 服务器数据库 |
| 适用场景 | 个人使用 | 多人共享 |

## 🛠️ 本地开发

如果想在本地开发测试：

```bash
# 使用 Python 快速启动静态服务器
python3 -m http.server 8080

# 或使用 Node.js 的 http-server
npx http-server -p 8080

# 访问：http://localhost:8080
```

## 📝 更新日志

- **2026-04-02** - 创建纯前端版本，支持 GitHub Pages 部署
- **2026-04-01** - 优化用户体验，增加设置页面

## 📄 许可证

MIT License - 可自由修改和使用

## 💡 进阶：如果需要数据同步

如果你需要手机和电脑之间数据同步，可以考虑：

1. **Supabase**（推荐）：免费 PostgreSQL 云服务
2. **Firebase**：Google 的 Backend-as-a-Service
3. **Vercel + 云数据库**：前端部署到 Vercel，使用云数据库

这些方案需要修改 `storage.js` 文件，将 localStorage 替换为 API 调用。

---

**祝你学习进步！📚✨**