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
	console.log(to);
	if (to.path === '/logout') {
		console.log('logout');
		const store = useUserStore();
		const { $reset } = store;
		$reset();
		router.push('/login');
	}
	// if (to.meta.role) {
	// }
});

export default router;
