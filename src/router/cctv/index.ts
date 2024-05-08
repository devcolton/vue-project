import MainLayout from '@/layouts/MainLayout.vue';
import { RouteURLs } from '@/router/url';

export const CctvRouter = [
	{
		path: RouteURLs.CCTV,
		name: 'cctv',
		meta: { layout: MainLayout, name: 'CCTV' },
		component: () => import('@/views/cctv/CctvView.vue'),
	},
];
