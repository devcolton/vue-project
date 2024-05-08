import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
	const user = ref({} as userData);
	const getUser = computed(() => user);
	function setUser() {
		user.value.userName = 'my NAME';
		user.value.userId = 'my ID';
		user.value.userAuth = 'ADMIN';
	}
	function $reset() {
		user.value.userName = '';
		user.value.userId = '';
		user.value.userAuth = '';
	}

	return { user, getUser, setUser, $reset };
});

interface userData {
	userName: string;
	userId: string;
	userAuth: string;
}
