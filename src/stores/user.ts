import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { UserData } from '@/interfaces/Store.interface';

export const useUserStore = defineStore('user', () => {
	const user = ref<UserData>({} as UserData);
	const getUser = computed(() => user);
	const setUser = ({ userId, role, accessToken, refreshToken }: UserData) => {
		user.value.userId = userId;
		user.value.role = role;
		user.value.accessToken = accessToken;
		user.value.refreshToken = refreshToken;
	};
	const $reset = () => {
		user.value.userId = '';
		user.value.role = '';
		user.value.accessToken = '';
		user.value.refreshToken = '';
	};

	return { user, getUser, setUser, $reset };
});
