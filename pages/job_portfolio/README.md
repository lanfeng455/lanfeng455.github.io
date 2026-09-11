# 求职作品集网站 Prototype

文件：
- index.html：页面结构
- style.css：视觉与响应式布局
- script.js：读取 JSON 并生成项目卡片
- data.json：个人资料与项目数据，之后主要修改这里即可

## 本地预览
现在可以直接双击 index.html 打开。页面数据同时内嵌在 HTML 中，因此不会受到 file:// 的 fetch 限制；线上部署时仍保留 data.json 作为独立数据文件。

例如：
python -m http.server 8000

然后访问：
http://localhost:8000/

## 下一步建议
1. 把项目封面与头像放进 assets/
2. 将 data.json 的项目数据替换成真实内容
3. 为每个项目建立独立 project.html / project.json
4. 再补充筛选、项目详情页与联系方式
