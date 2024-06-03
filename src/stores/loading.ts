import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', () => {
	const loading = ref<boolean>(false);
	const getLoading = computed(() => loading);
	const setLoading = (isLoading: boolean) => {
		loading.value = isLoading;
	};
	const $reset = () => {
		loading.value = false;
	};

	return { loading, getLoading, setLoading, $reset };
});
