import { cellAlign, cellData } from '../../contexts/TableContext';
import * as S from '../../styles/table.css';

type tbodyData = {
	data: cellData;
	align?: cellAlign;
};

const TbodyData = ({ data, align }: tbodyData) => {
	const dataStr =
		typeof data !== 'boolean' ? data.toString() : data ? '○' : '✕';
	return (
		<>
			<td className={S.TbodyData} data-align={align}>
				<p dangerouslySetInnerHTML={{ __html: dataStr }} />
			</td>
		</>
	);
};

export default TbodyData;
