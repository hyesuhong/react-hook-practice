import { ReactNode, createContext, useContext } from 'react';

export type cellAlign = 'left' | 'center' | 'right';
export type cellData = string | number | boolean;
export type tableData = { [key: string]: cellData };
type getHeaderInfoFn = (
	headers: tableHeader[],
	targetName: string
) => { cellAlign: cellAlign };

export type tableHeader = {
	name: string;
	align?: cellAlign;
};

export interface table {
	headers: tableHeader[];
	bodyData: tableData[];
	getHeaderInfo: getHeaderInfoFn;
}

interface tableProvider extends Omit<table, 'getHeaderInfo'> {
	children: ReactNode;
}

const getHeaderInfo: getHeaderInfoFn = (
	headers: tableHeader[],
	targetName: string
) => {
	const regExp = new RegExp(targetName, 'gi');
	const header = headers.find(({ name }) => name.match(regExp));

	if (!header) {
		return { cellAlign: 'left' };
	}

	const cellAlign = header.align || 'left';
	return { cellAlign };
};

const tableDefaultValue = {
	headers: [],
	bodyData: [],
	getHeaderInfo,
};

const TableContext = createContext<table>(tableDefaultValue);

export const useTable = () => useContext(TableContext);

const TableProvider = ({ headers, bodyData, children }: tableProvider) => {
	const tableValue = { ...tableDefaultValue, headers, bodyData };
	return (
		<TableContext.Provider value={tableValue}>{children}</TableContext.Provider>
	);
};

export default TableProvider;
