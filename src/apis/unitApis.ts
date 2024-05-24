import instance from '@/apis/utils/instance';

export const GET_UNIT_SETTING = (cid: string) => {
	return instance.get(`/api/unit/setting/${cid}`, {});
};

export const GET_UNIT_STATUS = (cid: string) => {
	return instance.get(`/api/unit/statuses/${cid}`, {});
};
