// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
    }
  },
  {
    path: '/Picking',
    name: 'Picking',
    component: () => import('@/views/Picker.vue'),
    meta: {
      title: '抽签',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
