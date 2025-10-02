import {createApp} from 'vue'
import './styles/style.css'
import App from './App.vue'
import router, {device} from './router'
import './assets/style-cat.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
import {ElNotification} from 'element-plus'
import 'element-plus/es/components/notification/style/css'

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
  ElNotification({
    title: "网络连接较慢！＠_＠",
    message: "页面加载时间较长，可能是网络连接问题，请耐心等待或刷新页面重试",
    type: 'warning',
    position: device === "pc" ? 'top-right' : undefined,
    zIndex: device === "mobile" ? 3000 : undefined
  })
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

