# 洪鑫裕 — 关卡策划 Portfolio

纯静态求职作品集网站，无需构建工具。

## 文件结构

- `index.html`：页面结构，所有个人资料与项目内容直接内嵌在此
- `style.css`：视觉系统与响应式布局
- `script.js`：项目卡片展开 / 收起交互（点击，或 Tab 聚焦后 Enter / Space）
- `assets/`
  - 项目封面、头像、`earth.png`（像素地球动画素材）
  - `fonts/press-start-2p.woff2`：自托管像素签名字体
  - `icons/`：Steam / TapTap / Bilibili 等平台图标
  - `*-src.jpg`：图片精修前的原图备份，不被页面引用

## 本地预览

直接双击 `index.html` 即可打开；也可以在本目录启动本地服务器：

```
python -m http.server 8765
```

然后访问 http://localhost:8765/

## 维护说明

- 新增 / 修改项目：直接编辑 `index.html` 中对应的 `<article>`，详情区放在 `.project-detail > .detail-inner` 内即可自动获得展开动画。
- 简历 PDF：放到 `assets/resume.pdf`，然后取消 `index.html` 中 Hero 区简历按钮的注释。
- 尚未上线的商店页 / 视频链接：在 `index.html` 中以 HTML 注释预留，链接可用后取消注释并填入 `href`。
