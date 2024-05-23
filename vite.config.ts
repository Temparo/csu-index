// vite.config.ts
import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import {umamiAnalyticsPlugin} from '@vuepress/plugin-umami-analytics'


// https://vitejs.dev/config/
export default defineConfig({
    // ...
    plugins: [
        vue(),
        // ...
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        umamiAnalyticsPlugin(
            {
                id: "f7ba7afc-e25f-413e-ab06-d77e6ed68eb7",
                link: "https://cloud.umami.is/script.js",
                autoTrack: true,
                cache: true
            }),
    ],
    base: '/',
})

