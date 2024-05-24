import { jwtDecode } from 'jwt-decode';

export const decodedToken = (token: string) => {
	const decoded = jwtDecode(token);

	console.log(decoded);
	return decoded;
};
