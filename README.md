# “四极·灵变”可重构机器人 STEAM 教育平台

> 2026年“挑战杯”全国大学生课外学术科技作品竞赛参赛项目官网

## 📖 项目介绍

本项目是北京交通大学顶尖机构学实验室科研成果的商业化与教育化落地项目官网。我们致力于将硕士研究生层面的前沿机构学知识（如变胞机构、多环闭链结构），转化为面向初/高中生的 STEAM 教育套件。

核心产品是基于“全R副三阶四面体”和“三棱柱”构型的空间多环闭链可重构机器人。项目秉承姚燕安教授提出的 **MSEA (Mathematics, Science, Engineering, Art)** 教育理念，通过几何之美激发青少年的科学探索精神。

## 🛠️ 技术栈

本项目采用现代化的前端技术栈构建，确保高性能、易维护与良好的用户体验：

-   **核心框架**: [React 18](https://react.dev/)
-   **开发语言**: [TypeScript](https://www.typescriptlang.org/)
-   **构建工具**: [Vite](https://vitejs.dev/)
-   **样式方案**: [Tailwind CSS](https://tailwindcss.com/)
-   **路由管理**: [React Router v6](https://reactrouter.com/) (使用 HashRouter 适配 GitHub Pages)
-   **图标库**: [Lucide React](https://lucide.dev/)
-   **动画库**: [Framer Motion](https://www.framer.com/motion/) (可选/预留)

## 📂 项目结构

```
src/
├── components/         # 公共组件
│   └── layout/         # 布局组件 (Navbar, Footer)
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页 (Hero, MSEA优势, 产品快览)
│   ├── Products.tsx    # 产品中心 (详细参数对比, 购买引导)
│   ├── Curriculum.tsx  # 课程体系 (交互式模块详解)
│   ├── Competition.tsx # 科创竞赛 (赛事列表, 获奖案例)
│   └── About.tsx       # 关于我们 (科研溯源, 团队介绍)
├── App.tsx             # 路由配置
└── main.tsx            # 入口文件
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173/` 即可预览网站。

### 3. 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

## 📦 部署 (GitHub Pages)

本项目已针对 GitHub Pages 进行了优化：
1.  使用 `HashRouter` 防止刷新 404 问题。
2.  `vite.config.ts` 中配置了 `base: './'`。

部署步骤：
1.  将代码推送到 GitHub 仓库。
2.  在 GitHub 仓库设置中，进入 **Pages** 选项卡。
3.  选择构建源（通常是 `gh-pages` 分支或使用 GitHub Actions 自动构建）。

## 🌟 核心亮点 (挑战杯)

*   **科研溯源**: 专门设计的“关于我们”页面，展示了北交大实验室的专利墙和顶刊论文，体现学术深度。
*   **MSEA 理念**: 在“课程体系”页面通过交互式设计，深度诠释了 Mathematics, Science, Engineering, Art 的融合。
*   **商业闭环**: “产品中心”和“科创竞赛”页面构建了完整的“硬件+课程+服务”商业模式。

## 📄 版权说明

© 2026 四极·灵变团队 | 北京交通大学现代机构学与机器人学中心
