export const makeCamelName = (spliter: string, target: string) => {
	return target
		.split(spliter)
		.map((str, order) =>
			order !== 0 ? str[0].toUpperCase() + str.slice(1) : str
		);
};
