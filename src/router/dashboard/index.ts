import MainLayout from '@/layouts/MainLayout.vue'
import { RouteURLs } from '../url'

export const DashboardRouter = [
  {
    path: RouteURLs.DASHBOARD,
    name: 'dashboard',
    meta: { layout: MainLayout, name: '대시보드' },
    component: () => import('@/views/cctv/CctvView.vue')
  }
]
