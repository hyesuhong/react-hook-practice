import { useTable } from '../../contexts/TableContext';
import * as S from '../../styles/table.css';
import TheadData from './TheadData';

const Thead = () => {
	const { headers } = useTable();
	return (
		<>
			<thead className={S.Thead}>
				<tr>
					{headers.map((header, index) => (
						<TheadData header={header} key={index} />
					))}
				</tr>
			</thead>
		</>
	);
};

export default Thead;
