import TbodyData, { data } from './TbodyData';
import { cellAlign, tableHeader } from './TheadData';
import * as S from '../../styles/table.css';

type tableData = { [key: string]: data };
export interface tbodyRow {
	headers: tableHeader[];
	data: tableData;
}

const TbodyRow = ({ headers, data }: tbodyRow) => {
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

type getheaderinfo = (
	headers: tableHeader[],
	targetName: string
) => { cellAlign: cellAlign };

const getHeaderInfo: getheaderinfo = (
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

export default TbodyRow;
