import {createRouter, createWebHistory} from 'vue-router'


const routerPc = [
    {
        path: '/',
        redirect: "/index"
    },
    {
        path: '/index',
        component: () =>
            import('../views/index.vue'),
    },
    {
        path: '/about',
        component: () =>
            import('../views/About.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    {
        path: '/feedback',
        component: () =>
            import('../views/Feedback.vue')
    },
    {
        path: '/404',
        component: () =>
            import('../views/NotFound.vue')
    },
    {
        path: '/csu-awesome',
        component: () =>
            import('../views/CSUAwesome.vue')
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
            import('../views/index.vue')
    },
    {
        path: '/about',
        component: () =>
            import('../views/About.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    {
        path: '/feedback',
        component: () =>
            import('../views/Feedback.vue')
    },
    {
        path: '/404',
        component: () =>
            import('../views/NotFound.vue')
    },
    {
        path: '/csu-awesome',
        component: () =>
            import('../views/CSUAwesome.vue')
    }
]
let routes: any[];
export let device: string
let Adaptive = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
if (navigator.userAgent.match(Adaptive)) {
    routes = routerMobile
    device = "mobile"
} else {
    routes = routerPc
    device = "pc"
}
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
