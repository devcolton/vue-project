export interface LoginInfo {
	id: string;
	password: string;
}

export interface LoginData {
	username: string;
	password: string;
}

export interface VueChartjsData {
	label: string;
	backgroundColor: string;
	borderColor: string;
	data: number[];
	fill?: boolean;
	pointRadius?: number;
}

export interface AlertData {
	status: 'success' | 'warning' | 'error';
	message: string;
}

export interface ConfirmData {
	message: string;
	cancelText: string;
	confirmText: string;
}
