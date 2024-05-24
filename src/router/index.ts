import {createRouter, createWebHistory} from 'vue-router'


const routerPc = [
    {
        path: '/',
        redirect: "/index"
    },
    {
        path: '/index',
        component: () =>
            import('../views/pc/index.vue'),
    },
    {
        path: '/about',
        component: () =>
            import('../views/about.vue')
    }
]
const routerMobile = [
    {
        path: '/',
        redirect: "/index"
    },
    {
        path: '/index',
        component: () =>
            import('../views/mobile/index.vue')
    },
    {
        path: '/about',
        component: () =>
            import('../views/about.vue')
    }
]
let routes = [];
let Adaptive = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
if (navigator.userAgent.match(Adaptive)) {
    routes = routerMobile
} else {
    routes = routerPc
}
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router