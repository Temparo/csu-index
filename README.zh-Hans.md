# [中南大学](https://www.csu.edu.cn/)导航站

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fcsu-index.github.io%2F&up_message=CSU-Index&down_message=Time%20out&style=for-the-badge)](https://csu-index.github.io/)
![GitHub last commit](https://img.shields.io/github/last-commit/Temparo/csu-index?style=for-the-badge)
[![GitHub License](https://img.shields.io/github/license/Temparo/csu-index?style=for-the-badge)](LICENSE)

> 由于学校官网设计不尽如人意，我决定自己写一个对于校内网站和其他常用网站的导航。

---

## 未来规划:

- [x] 创建网站基本布局
- [x] 支持移动设备
- [x] 在 GitHub Pages 上部署
- [x] 添加猫猫加载动画
- [ ] 设计Logo
- [x] 添加网站点击量分析
- [x] 添加"关于"页
- [ ] 展示网站访问量和点击量等统计数据
- [ ] 添加学校失效链接列表
- [ ] 添加问题反馈和联系方式
- [ ] 允许用户更改背景
- [ ] 为链接添加详细介绍
- [ ] 美化布局
- [x] 添加深色模式
- [ ] 允许用户通过拖拽来更改布局
- [ ] 撰写新生电子指南
- [ ] 为链接添加图标
- [ ] ~~多语言支持~~
- [ ] 部署在独立域名和服务器上
- [ ] 增加搜索功能（也许）

---

## 使用方法

如果你是中南大学学生,打开官网即可使用

如果你想为自己的学校创建一个导航页，只需fork这个项目并更改 "/url-process/origin-urls.json" 文件，push 到 GitHub 后 GitHub
Actions 应自动运行 python 脚本以生成相应 TS 文件。之后，该页面将自动部署在 GitHub Pages 上。

---

## 贡献代码

1. 安装 [Node.js](https://nodejs.org/en/download/)

2. 更换国内镜像

    ```shell
    npm config set registry https://registry.npm.taobao.org
    ```

3. 安装 [VS Code](https://code.visualstudio.com/) 或 [Webstorm](https://www.jetbrains.com/webstorm/)（付费，学生免费）

4. 如果您使用的是 VS Code ，建议使用 [Vue-Official-Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
   插件

5. 克隆项目代码

   ```shell
   git clone https://github.com/Temparo/csu-index
   ```

6. 添加依赖

   ```shell
   npm install
   ```

7. 启动Vite

   ```shell
    npm run dev
   ```

8. 打开 [http://localhost:5173](http://localhost:5173) 并开始工作!

> ### 提示：
> - 欢迎贡献代码，只需 fork 项目并创建 pull request 即可。
> - 在 dev 分支上进行更改，**而不是 main 分支**
> - 如果您有任何问题或建议，欢迎随时提出 issue。

---

## 致谢

- 项目使用 [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/) 构建
- 本项目思路来源于 [ZJUers轻首页](https://zjuers.com/)
- 一些功能思路来源于 [BYR-Navi](https://github.com/BYR-Navi/BYR-Navi)
- 猫猫动画的作者是 [TouNeko](https://codepen.io/touneko)
- 暗黑模式按钮的作者是 [MarvinRudolph](https://codepen.io/MarvinRudolph)
- 标题样式来源于 [YesIcon](https://yesicon.app/)
- 我自己！！！(๑¯ω¯๑)

---

## 贡献者

- [Temparo](https://github.com/Temparo)

---

## 星星历史

[![Stargazers over time](https://starchart.cc/Temparo/csu-index.svg)](https://starchart.cc/Temparo/csu-index)

---

## 许可证

本项目采用 [Apache-2.0](LICENSE) 许可证。
