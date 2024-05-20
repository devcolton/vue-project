import axios from 'axios';
import router from '@/router';

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

instance.defaults.withCredentials = true;

instance.interceptors.request.use(
	async config => config,
	async error => Promise.reject(error),
);

instance.interceptors.response.use(
	async response => {
		if (response.status === 404) {
			router.push({ name: 'notFound' });
		}

		return response;
	},
	async error => {
		router.push({ name: 'notFound' });
		Promise.reject(error);
	},
);

export default instance;
