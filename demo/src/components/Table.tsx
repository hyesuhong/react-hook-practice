import { useEffect, useState } from 'react';
import * as S from '../styles/main.css';

type tableData = { [key: string]: string };
interface table {
	data: tableData[];
}

const Table = ({ data }: table) => {
	const [headers, setHeaders] = useState<string[]>([]);

	useEffect(() => {
		const keys = Object.keys(data[0]);
		setHeaders(keys);
	}, [data]);

	return (
		<>
			<table className={S.Table}>
				<thead>
					<tr className={S.Thead}>
						{headers.map((header, index) => (
							<th key={index}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((data, index) => (
						<tr className={S.TbodyRow} key={index}>
							{Object.values(data).map((d, idx) => (
								<td
									className={S.TbodyData}
									key={idx}
									dangerouslySetInnerHTML={{ __html: d }}
								></td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
