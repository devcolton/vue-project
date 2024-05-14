export const getLastDate = async (
	year: string,
	month: string,
): Promise<number> => {
	const date = new Date(Number(year), Number(month), 0);
	return date.getDate();
};
