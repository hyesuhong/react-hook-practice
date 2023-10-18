import { tableHeader } from '../../contexts/TableContext';
import * as S from '../../styles/table.css';

type theadData = {
	header: tableHeader;
};

const TheadData = ({ header }: theadData) => {
	const { name } = header;
	return <th className={S.Thead}>{name}</th>;
};

export default TheadData;
