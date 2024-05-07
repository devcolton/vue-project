import MainLayout from '@/layouts/MainLayout.vue'
import { RouteURLs } from '../url'

export const UnitRouter = [
  {
    path: RouteURLs.UNIT,
    name: 'unit',
    meta: { layout: MainLayout, name: '장치관리' },
    component: () => import('@/views/unit/UnitView.vue')
  }
]
