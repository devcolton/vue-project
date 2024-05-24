import MainLayout from '@/layouts/MainLayout.vue';
import { RouteURLs } from '@/router/url';

export const DashboardRouter = [
	{
		path: RouteURLs.DASHBOARD,
		name: 'dashboard',
		meta: {
			layout: MainLayout,
			name: '대시보드',
			role: ['ADMIN', 'STAFF', 'USER'],
		},
		component: () => import('@/views/dashboard/DashboardView.vue'),
	},
];
