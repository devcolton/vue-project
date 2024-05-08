import MainLayout from '@/layouts/MainLayout.vue';
import { RouteURLs } from '@/router/url';

export const SettingRouter = [
	{
		path: RouteURLs.SETTING,
		name: 'setting',
		meta: { layout: MainLayout, name: '환경설정' },
		component: () => import('@/views/setting/SettingView.vue'),
	},
];
