# 女性舞蹈地图

**当女性起舞，世界听见了什么**

以舞蹈、仪式、抗议与社区行动为线索的全球女性主义界面。地球是舞台，故事以拼接的方式并置，强调连结而不是单一叙事。

## 技术栈

- [Vite](https://vitejs.dev/) — 构建工具
- [D3.js v7](https://d3js.org/) — 地球渲染与交互
- [topojson-client](https://github.com/topojson/topojson-client) — 地图数据解析
- [world-atlas](https://github.com/topojson/world-atlas) — 国家边界数据（CDN runtime fetch）

## 本地运行

```bash
npm install
npm run dev
```

## 功能

- 全屏 3D 地球，支持拖拽旋转 + 自动匀速旋转
- 6 个全球精选女性主义舞蹈地点，点击跳转聚焦
- 中英文切换
- 拼接风 collage 面板 UI
