import { tableData, useTable } from '../../contexts/TableContext';
import * as S from '../../styles/table.css';
import TbodyData from './TbodyData';

export interface tbodyRow {
	data: tableData;
}

const TbodyRow = ({ data }: tbodyRow) => {
	const { headers, getHeaderInfo } = useTable();
	return (
		<>
			<tr className={S.TbodyRow}>
				{Object.keys(data).map((key, index) => {
					const { cellAlign } = getHeaderInfo(headers, key);
					return <TbodyData data={data[key]} align={cellAlign} key={index} />;
				})}
			</tr>
		</>
	);
};

export default TbodyRow;
