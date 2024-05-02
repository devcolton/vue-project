import { RouteURLs } from '@/router/url'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export const LoginRouter = [
  {
    path: RouteURLs.LOGIN,
    name: 'login',
    meta: { layout: DefaultLayout },
    component: () => import('@/views/common/LoginView.vue')
  }
]
