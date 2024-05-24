import { createRouter, createWebHistory } from 'vue-router';
import { CommonRouter } from '@/router/common';
import { DashboardRouter } from '@/router/dashboard';
import { UnitRouter } from '@/router/unit';
import { CctvRouter } from '@/router/cctv';
import { StatisticsRouter } from '@/router/statistics';
import { UserRouter } from '@/router/user';
import { SettingRouter } from '@/router/setting';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeView from '@/views/HomeView.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { deleteCookie } from '@/utils/cookie';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			meta: { layout: DefaultLayout },
			component: HomeView,
			children: [],
			redirect: '/login',
		},
		...DashboardRouter,
		...UnitRouter,
		...CctvRouter,
		...StatisticsRouter,
		...UserRouter,
		...SettingRouter,
		...CommonRouter,
	],
});

router.beforeEach(to => {
	const store = useUserStore();
	const { user } = storeToRefs(store);
	const { role } = user.value;
	const metaRole = to.meta.role as string[];

	if (to.path === '/logout') {
		console.log('logout');
		const store = useUserStore();
		const { $reset } = store;
		$reset();
		deleteCookie('autoLogin');
		router.push('/login');
	}
	if (metaRole) {
		if (metaRole.includes(role)) {
			return;
		} else {
			alert('해당 페이지에 권한이 없습니다.');
			router.push('/login');
		}
	}
});

export default router;
