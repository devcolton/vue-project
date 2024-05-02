import { createRouter, createWebHistory } from 'vue-router'
import { CommonRouter } from '@/router/common'
import { UserRouter } from '@/router/user'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: DefaultLayout },
      component: HomeView,
      redirect: '/login'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { layout: MainLayout },
      component: DashboardView
    },
    ...UserRouter,
    ...CommonRouter
  ]
})

export default router
