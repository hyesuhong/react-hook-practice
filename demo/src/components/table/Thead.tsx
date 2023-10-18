import { useTable } from '../../contexts/TableContext';
import TheadData from './TheadData';

const Thead = () => {
	const { headers } = useTable();
	return (
		<>
			<thead>
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
