export interface OptionItem {
	value: string;
	text: string;
}

export interface CookieItem {
	key: string;
	value: string;
	maxAge?: number;
}

export interface LoginInfo {
	id: string;
	password: string;
}

export interface UserInfo {
	userType: string;
	upperUser: string;
	userName: string;
	userPhone: string;
	userEmail: string;
	userPassword: string;
	checkPassword: string;
}
