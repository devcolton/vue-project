import jwt from 'jsonwebtoken';

export const decodedToken = async (token: string) => {
	const decode = await jwt.decode(token);

	return decode;
};
