export interface UserParams {
	role?: string;
	superior?: string;
}

export interface UserInfo {
	role: string;
	superior: string;
	userId: string;
	name: string;
	phoneNumber: string;
	address: string;
	password: string;
	checkPassword: string;
}

export interface UserItem {
	role: string;
	superior: string;
	userId: string;
	name: string;
	phoneNumber: string;
	address: string;
}
