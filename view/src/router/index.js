import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/Layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/main',
    children: [
      {
        path: 'main',
        component: () => import('@/views/Main.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router