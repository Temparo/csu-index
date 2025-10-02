import {createApp} from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router'
import './assets/style-cat.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'

// GitHub Pages环境下的加载控制
const loadingEl = document.getElementById('Loading')
const LOADING_TIMEOUT = 10000 // 10秒超时
const MIN_LOADING_TIME = 500 // 最小显示时间，避免闪烁

const hideLoading = () => {
  if (loadingEl) {
    loadingEl.style.transition = 'opacity 0.3s ease-out'
    loadingEl.style.opacity = '0'
    setTimeout(() => {
      if (loadingEl.parentNode) {
        loadingEl.parentNode.removeChild(loadingEl)
      }
    }, 300)
  }
}

const app = createApp(App)
app.use(router)

const loadingTimer = setTimeout(() => {
  console.warn(`加载超时 ${LOADING_TIMEOUT}ms，强制显示页面`)
  hideLoading()
}, LOADING_TIMEOUT)

Promise.all([
  router.isReady(),
  new Promise(resolve => setTimeout(resolve, MIN_LOADING_TIME))
]).then(() => {
  clearTimeout(loadingTimer)
  app.mount('#app')
  // 给Vue渲染一点时间
  setTimeout(hideLoading, 100)
}).catch((error) => {
  console.error('应用加载失败:', error)
  clearTimeout(loadingTimer)
  hideLoading()
})

