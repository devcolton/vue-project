import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { userData } from '@/interfaces/Store.interface';

export const useUserStore = defineStore('user', () => {
	const user = ref({} as userData);
	const getUser = computed(() => user);
	const setUser = (userName: string, userId: string, role: string) => {
		user.value.userName = userName;
		user.value.userId = userId;
		user.value.role = role;
	};
	const $reset = () => {
		user.value.userName = '';
		user.value.userId = '';
		user.value.role = '';
	};

	return { user, getUser, setUser, $reset };
});
