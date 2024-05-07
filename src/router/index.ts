import { createRouter, createWebHistory } from 'vue-router'
import { CommonRouter } from '@/router/common'
import { SettingRouter } from '@/router/setting'
import { StatisticsRouter } from '@/router/statistics'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { UnitRouter } from './unit'
import { CctvRouter } from './cctv'
import { DashboardRouter } from './dashboard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: DefaultLayout },
      component: HomeView,
      children: [],
      redirect: '/login'
    },
    ...DashboardRouter,
    ...UnitRouter,
    ...CctvRouter,
    ...StatisticsRouter,
    ...SettingRouter,
    ...CommonRouter
  ]
})

export default router
