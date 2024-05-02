import MainLayout from '@/layouts/MainLayout.vue'

export const UserRouter = [
  {
    path: '/user',
    name: 'user',
    meta: { layout: MainLayout },
    component: () => import('@/views/user/UserView.vue')
  }
]
