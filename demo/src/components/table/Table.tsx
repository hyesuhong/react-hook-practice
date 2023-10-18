import TableProvider, { table } from '../../contexts/TableContext';
import * as S from '../../styles/table.css';
import Tbody from './Tbody';
import Thead from './Thead';

interface tableComponent extends Omit<table, 'bodyData' | 'getHeaderInfo'> {
	data: table['bodyData'];
}

const Table = ({ headers, data }: tableComponent) => {
	return (
		<TableProvider headers={headers} bodyData={data}>
			<table className={S.Table}>
				<Thead />
				<Tbody />
			</table>
		</TableProvider>
	);
};

export default Table;
