import MainLayout from '@/layouts/MainLayout.vue';
import { RouteURLs } from '@/router/url';

export const UserRouter = [
	{
		path: RouteURLs.USER,
		name: 'user',
		meta: { layout: MainLayout, name: '사용자관리', role: ['ADMIN', 'STAFF'] },
		component: () => import('@/views/user/UserView.vue'),
	},
];
