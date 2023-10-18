import TbodyRow, { tbodyRow } from './TbodyRow';

interface tbody {
	headers: tbodyRow['headers'];
	bodyData: tbodyRow['data'][];
}

const Tbody = ({ headers, bodyData }: tbody) => {
	return (
		<>
			<tbody>
				{bodyData.map((data, index) => (
					<TbodyRow headers={headers} data={data} key={index} />
				))}
			</tbody>
		</>
	);
};

export default Tbody;
