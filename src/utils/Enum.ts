export const ROLE = {
	ADMIN: { code: 'ADMIN', name: '최고관리자' },
	STAFF: { code: 'STAFF', name: '관리자' },
	USER: { code: 'USER', name: '사용자' },
} as const;

export const UNIT = {
	CONDITIONER: { code: 'conditioner', name: '냉난방기' },
	SUNSHADE: { code: 'sunshade', name: '차광막' },
	LED: { code: 'led', name: 'LED' },
	VENTILATION_FAN: { code: 'ventilationFan', name: '환기팬' },
	GAS: { code: 'gas', name: '가스제어' },
	FLOATING_FAN: { code: 'floatingFan', name: '유동팬' },
	PUMP: { code: 'pump', name: '펌프' },
} as const;
