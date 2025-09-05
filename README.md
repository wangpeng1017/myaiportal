# AI平台门户网站

这是一个基于Next.js 14构建的AI平台门户网站，展示了各种AI工具和解决方案。

## 功能特性

- 🎨 **现代化设计**: 使用Tailwind CSS构建的响应式界面
- 🚀 **高性能**: 基于Next.js 14 App Router构建
- 📱 **响应式**: 完美适配桌面端、平板和移动设备
- 🔗 **外链跳转**: 点击卡片可直接跳转到对应的AI平台
- 🎯 **分类展示**: 按功能分类展示不同的AI工具

## 项目结构

```
ai-platform-portal/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # 根布局
│   │   ├── page.tsx         # 首页
│   │   └── globals.css      # 全局样式
│   ├── components/          # React组件
│   │   ├── Header.tsx       # 页面头部
│   │   ├── Section.tsx      # 分区组件
│   │   └── Card.tsx         # 卡片组件
│   └── data/
│       └── platforms.ts     # 平台数据
├── public/                  # 静态资源
├── package.json            # 项目依赖
├── tailwind.config.js      # Tailwind配置
├── next.config.js          # Next.js配置
└── vercel.json             # Vercel部署配置
```

## 本地开发

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm run start
```

## 部署到Vercel

### 方法一：通过Vercel CLI

1. 安装Vercel CLI:
```bash
npm i -g vercel
```

2. 登录Vercel:
```bash
vercel login
```

3. 部署项目:
```bash
vercel
```

### 方法二：通过Git集成

1. 将代码推送到GitHub/GitLab/Bitbucket
2. 在Vercel控制台导入项目
3. Vercel会自动检测Next.js项目并进行部署

### 环境变量

如果需要配置环境变量，可以在Vercel控制台的Settings > Environment Variables中添加。

## 自定义配置

### 添加新的AI平台

编辑 `src/data/platforms.ts` 文件，在对应的分类中添加新的平台信息：

```typescript
{
  id: 'new-platform',
  name: '新平台名称',
  description: '平台描述',
  model: '使用的AI模型',
  link: 'https://example.com'
}
```

### 修改样式

- 全局样式: 编辑 `src/app/globals.css`
- Tailwind配置: 编辑 `tailwind.config.js`
- 组件样式: 直接在组件中使用Tailwind类名

### 添加新功能

1. 在 `src/components/` 中创建新组件
2. 在 `src/app/page.tsx` 中引入并使用
3. 如需新页面，在 `src/app/` 中创建新的路由文件夹

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel
- **包管理**: npm/yarn/pnpm

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。
