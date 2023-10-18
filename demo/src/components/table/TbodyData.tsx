import { cellAlign } from './TheadData';
import * as S from '../../styles/table.css';

export type data = string | number | boolean;
type tbodyData = {
	data: data;
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
