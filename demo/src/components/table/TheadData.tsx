export type cellAlign = 'left' | 'center' | 'right';

export type tableHeader = {
	name: string;
	align?: cellAlign;
};

type theadData = {
	header: tableHeader;
};

const TheadData = ({ header }: theadData) => {
	const { name } = header;
	return <th>{name}</th>;
};

export default TheadData;
