import * as S from '../../styles/table.css';
import TheadData, { tableHeader } from './TheadData';

export type thead = {
	headers: tableHeader[];
};

const Thead = ({ headers }: thead) => {
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
