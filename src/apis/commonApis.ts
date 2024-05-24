import instance from '@/apis/utils/instance';
import type { LoginData } from '@/interfaces/Common.interface';

export const LOGIN = (data: LoginData) => {
	return instance.post('/api/auth/login/id', {}, { auth: data });
};

export const GET_CONTROLLERS = () => {
	return instance.get('/api/controller/list', {});
};
