import { RouteURLs } from '@/router/url';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export const NotFoundRouter = [
	{
		path: RouteURLs.NOT_FOUND,
		name: 'notFound',
		meta: { layout: DefaultLayout },
		component: () => import('@/views/common/NotFoundView.vue'),
	},
];
