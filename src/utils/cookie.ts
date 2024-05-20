import type { CookieItem } from '@/interfaces/Common.interface';

export const setCookie = ({ key, value, maxAge }: CookieItem) => {
	// const NOW = new Date();
	// NOW.setTime(NOW.getTime() + 30 * 24 * 60 * 60 * 1000);
	// const EXPIRES = NOW.toUTCString();
	const MAX_AGE = maxAge ? maxAge * 24 * 60 * 60 : -1;
	const PATH = '/';
	// const DOMAIN = '';

	const cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=${PATH}; max-age=${MAX_AGE}`;

	document.cookie = cookie;
};
export const getCookie = (key: string) => {
	const matches = document.cookie.match(
		new RegExp(
			'(?:^|; )' +
				key.replace(/([\\.$?*|{}\\(\\)\\[\]\\\\/\\+^])/g, '\\$1') +
				'=([^;]*)',
		),
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
};
export const deleteCookie = (key: string) => {
	setCookie({ key, value: '' });
};
