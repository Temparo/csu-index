# The [CSU](https://www.csu.edu.cn/) Navigation

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fcsu-index.github.io%2F&up_message=CSU-Index&down_message=Time%20out&style=for-the-badge)](https://csu-index.github.io/)
![GitHub last commit](https://img.shields.io/github/last-commit/Temparo/csu-index?style=for-the-badge)
[![GitHub License](https://img.shields.io/github/license/Temparo/csu-index?style=for-the-badge)](LICENSE)

> Because of the stupid design of the school official site, I would like to create a navigation for school websites and
> other common websites.

[简体中文](README.zh-Hans.md)

---

## Roadmap:

- [x] Create the Basic Layout
- [x] Support the Mobile Devices
- [x] Deploy on GitHub Pages
- [x] Add Loading Cat Animation
- [ ] Design the Logo
- [x] Add Analytics for the Clicks
- [x] Add About Page
- [ ] Add Broken Link list for School Pages
- [ ] Add Issues, Feedback and Contact
- [ ] Allow Users to Change the Background
- [ ] Add detailed introduction for each link
- [ ] Beautify the Layout
- [x] Add Dark Mode Support
- [ ] Allow Users to Change the Layout through Dragging
- [ ] Add E-guide for Newcomers
- [ ] Add Icons for links
- [ ] ~~Global Language Support~~
- [ ] Deploy on Individual Domain and Server
- [ ] Add Search Function(Maybe)

---

## Usage

If you are a student of CSU, just open the official site.

If you want to create a navigation for your own school, just fork this project and change the "
/url-process/origin-urls.md" file, then the python script should be run automatically by GitHub Actions to generate the
ts file.After that, the page will be deployed on GitHub Pages.

---

## Contributing

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

> ### Tips:
> - Contributing is welcome, just fork the project and create a pull request.
> - Make your changes on dev branch, **Rather than main**
> - If you have any questions or suggestions, feel free to open an issue.

---

## Thanks

- The Project is created by [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- The Loading Cat animation is by [TouNeko](https://codepen.io/touneko)
- The dark mode toggle button is by [MarvinRudolph](https://codepen.io/MarvinRudolph)
- This project is inspired by [ZJUers轻首页](https://zjuers.com/)
- Some idea of functions is from [BYR-Navi](https://github.com/BYR-Navi/BYR-Navi)
- All the codes are done by myself

---

## Contributors

- [Temparo](https://github.com/Temparo)

---

## License

This project is under [Apache-2.0 License](LICENSE).

## Stars History

[![Stargazers over time](https://starchart.cc/Temparo/csu-index.svg)](https://starchart.cc/Temparo/csu-index)