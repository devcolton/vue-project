import axios from 'axios';
import router from '@/router';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { useLoadingStore } from '@/stores/loading';

const instance = axios.create({
	// baseURL: import.meta.env.VITE_API_URL,
});
const loadingStore = useLoadingStore();
const { setLoading } = loadingStore;

instance.defaults.withCredentials = true;

instance.interceptors.request.use(
	async config => {
		setLoading(true);

		const store = useUserStore();
		const { user } = storeToRefs(store);
		const { accessToken } = user.value;

		config.headers['Content-Type'] = 'application/json';
		config.headers.Authorization = `Bearer ${accessToken}`;

		return config;
	},
	async error => {
		setLoading(false);

		Promise.reject(error);
	},
);

instance.interceptors.response.use(
	async response => {
		setLoading(false);

		if (response.status === 404) {
			router.push({ name: 'notFound' });
		}

		return response;
	},
	async error => {
		setLoading(false);

		Promise.reject(error);
	},
);

export default instance;
