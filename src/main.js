/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from "@/router";

const app = createApp(App)

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '首页'; // 根据路由配置的 meta.title 来设置页面标题
  next();
});

registerPlugins(app)

app.mount('#app')
