import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/style-cat.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'


const app = createApp(App)
app.use(router)
setTimeout(() => {
    app.mount('#app')
}, 2000)

