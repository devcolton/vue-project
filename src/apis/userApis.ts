import instance from '@/apis/utils/instance';
import type { UserInfo, UserParams } from '@/interfaces/User.interface';

export const GET_USER = (id: string) => {
	return instance.get(`/api/users/one/${id}`, {});
};

export const GET_USERS = (id: string, params: UserParams) => {
	return instance.get(`/api/users/all/${id}`, { params });
};

export const REG_USER = (data: UserInfo) => {
	return instance.post('/api/auth/register/id', data);
};

export const MOD_USER = (data: UserInfo) => {
	return instance.patch(`/api/users/${data.userId}`, data);
};

export const DEL_USERS = (id: string, data: string[]) => {
	return instance.delete(`/api/users/${id}`, { data });
};
