#!/bin/bash
# GitHub Pages 部署脚本

echo "🚀 开始部署到 GitHub Pages..."

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在 zhongkao-web 目录下运行此脚本"
    exit 1
fi

# 检查 git 是否初始化
if [ ! -d ".git" ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    git add .
    git commit -m "Initial commit"
fi

# 检查远程仓库
echo ""
echo "📍 当前远程仓库配置："
git remote -v

echo ""
read -p "⚙️  请输入 GitHub 仓库地址 (例如：https://github.com/yourusername/zhongkao-web.git): " REPO_URL

if [ -n "$REPO_URL" ]; then
    # 移除旧的 origin
    git remote remove origin 2>/dev/null
    
    # 添加新的 origin
    git remote add origin $REPO_URL
    echo "✅ 远程仓库已配置：$REPO_URL"
fi

# 切换到 main 分支
echo ""
echo "📋 切换到 main 分支..."
git branch -M main

# 推送代码
echo ""
echo "📤 推送到 GitHub..."
git add .
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"
git push -u origin main

# 显示部署信息
echo ""
echo "============================================"
echo "✅ 部署完成！"
echo "============================================"
echo ""
echo "📱 下一步操作："
echo "1. 打开 GitHub 仓库：$REPO_URL"
echo "2. 进入 Settings → Pages"
echo "3. 在 Source 下选择：main 分支 → 根目录 (/)"
echo "4. 点击 Save"
echo ""
echo "🌐 访问地址将在几分钟后生成，格式为："
echo "   https://你的用户名.github.io/仓库名/"
echo ""
echo "💡 提示：如果使用自定义域名，可在 Pages 设置中配置"
echo ""
echo "============================================"