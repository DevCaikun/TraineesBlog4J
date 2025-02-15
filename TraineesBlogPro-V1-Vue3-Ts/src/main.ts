import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'animate.css';
import 'nprogress/nprogress.css';

// 路由
import router from "@/router/index.ts";
// 路由守卫
import "@/router/guards.ts"

// 引入全局状态管理 Pinia
import pinia from "@/stores/index.ts";

// 导入 Element Plus
import ElementPlus from 'element-plus';
// 导入 Element Plus 样式
import 'element-plus/dist/index.css'
// 导入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入 element-plus 暗黑 css
import 'element-plus/theme-chalk/dark/css-vars.css'

// 图片点击放大
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

const app = createApp(App);

// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.use(VueViewer)

//挂载Vue实例到index.html的id为app的元素上面
app.mount('#app');
