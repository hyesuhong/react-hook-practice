import { useTable } from '../../contexts/TableContext';
import TbodyRow from './TbodyRow';

const Tbody = () => {
	const { bodyData } = useTable();
	return (
		<>
			<tbody>
				{bodyData.map((data, index) => (
					<TbodyRow data={data} key={index} />
				))}
			</tbody>
		</>
	);
};

export default Tbody;
