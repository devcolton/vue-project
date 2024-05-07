import MainLayout from '@/layouts/MainLayout.vue'
import { RouteURLs } from '../url'

export const StatisticsRouter = [
  {
    path: RouteURLs.STATISTICS,
    name: 'statistics',
    meta: { layout: MainLayout, name: '기간별 누적 데이터' },
    component: () => import('@/views/statistics/StatisticsView.vue')
  }
]
