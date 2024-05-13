import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/style-cat.css'

const app = createApp(App)
app.use(router)
setTimeout(() => {
    app.mount('#app')
}, 2000)

