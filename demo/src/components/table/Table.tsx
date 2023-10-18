import * as S from '../../styles/table.css';
import Tbody from './Tbody';
import Thead, { thead } from './Thead';

type tableData = { [key: string]: string | boolean };

interface table {
	headers: thead['headers'];
	data: tableData[];
}

const Table = ({ headers, data }: table) => {
	return (
		<>
			<table className={S.Table}>
				<Thead headers={headers} />
				<Tbody headers={headers} bodyData={data} />
			</table>
		</>
	);
};

export default Table;
