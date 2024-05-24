export const isEmpty = (v: unknown) => {
	return v == undefined || v == null;
};

export const stringIsEmpty = (v: string) => {
	return v === '' || v == undefined || v == null;
};
