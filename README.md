![GitHub last commit](https://img.shields.io/github/last-commit/Temparo/csu-index)
![GitHub License](https://img.shields.io/github/license/Temparo/csu-index)

# The [CSU](https://www.csu.edu.cn/) Navigation

#### Because the stupid design of the school official site, I would like to create a navigation for school websites and other common websites.

This project is inspired by [ZJUers轻首页](https://zjuers.com/).
Some ideas of functions are from [ BYR-Navi
](https://github.com/BYR-Navi/BYR-Navi).
All the code is done by myself.

---

### Roadmap:

- [x] Create the Basic Layout
- [x] Support the Mobile Devices
- [x] Deploy on GitHub Pages
- [x] Add Loading Cat Animation
- [ ] Design the Logo
- [ ] Add Analytics for the Clicks
- [ ] Add About Page
- [ ] Add Issues, Feedback and Contact
- [ ] Allow Users to Change the Background
- [ ] Add detailed introduction for each link
- [ ] Beautify the Layout
- [ ] Add Dark Mode
- [ ] Allow Users to Change the Layout through Dragging
- [ ] Add E-guide for Newcomers
- [ ] Add Icons for links
- [ ] Global Language Support
- [ ] Deploy on Individual Domain and Server
- [ ] Add Search Function(Maybe)

---

### Quick Start

1. Install [Node.js](https://nodejs.org/en/download/)

2. Change source to Chinese-mirror

   ```shell
   npm config set registry https://registry.npm.taobao.org
   ```

3. Install [VS Code](https://code.visualstudio.com/) or [Webstorm](https://www.jetbrains.com/webstorm/)(Paid, Free for
   Students)

4. If you're using VS Code, [Vue-Official-Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.volar) would
   be a good choice

5. Clone the project

   ```shell
   git clone https://github.com/Temparo/csu-index
   ```

6. Download the dependencies

   ```shell
   npm install
   ```

7. Start the project

   ```shell
    npm run dev
   ```
8. Browse to [http://localhost:5173](http://localhost:5173) and start contributing !

### Contribution:

- This Project is create by Vue 3 + TypeScript + Vite + Element Plus.
- Contribution is welcome, just fork the project and make a pull request.
- Make your changes on dev branch, **Rather than main**
- If you have any questions or suggestions, feel free to open an issue.
- If you want to create a navigation for your school, you can fork this project and change the '
  /url-process/origin-urls.md' file, then run the python script to generate the ts file.After that, you can deploy it on
  your server.

### To Do:

#### 新生入学教程及相关信息电子书

- 包括各种各样的初始密码
- 奖学金助学金获取
- 中南的班车和各个校区的分布
- 哪个食堂好吃