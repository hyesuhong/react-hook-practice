import { tableHeader } from '../../contexts/TableContext';

type theadData = {
	header: tableHeader;
};

const TheadData = ({ header }: theadData) => {
	const { name } = header;
	return <th>{name}</th>;
};

export default TheadData;
