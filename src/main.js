import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 載入 css 檔案
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import 'element-plus/theme-chalk/display.css'

// 引入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')

