import { useEffect, useState } from 'react';
import * as S from '../styles/table.css';

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
			<div className={S.Table}>
				<div className={S.Thead}>
					{headers.map((header, index) => (
						<div key={index} className={S.TheadData}>
							{header}
						</div>
					))}
				</div>
				<div className={S.Tbody}>
					{data.map((data, index) => (
						<div className={S.TbodyRow} key={index}>
							{Object.values(data).map((d, idx) => (
								<div
									className={S.TbodyData}
									key={idx}
									dangerouslySetInnerHTML={{ __html: d }}
								></div>
							))}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Table;
