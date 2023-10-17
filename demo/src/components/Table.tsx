import * as S from '../styles/table.css';

type tableHeader = {
	name: string;
	type?: 'string' | 'number' | 'boolean';
	align?: 'left' | 'center' | 'right';
};
type tableData = { [key: string]: string | boolean };

interface table {
	headers: tableHeader[];
	data: tableData[];
}

const Table = ({ headers, data }: table) => {
	return (
		<>
			<div className={S.Table}>
				<div className={S.Thead}>
					{headers.map((header, index) => (
						<TableHeader header={header} key={index} />
					))}
				</div>
				<div className={S.Tbody}>
					{data.map((data, index) => (
						<TableBodyRow key={index} headers={headers} data={data} />
					))}
				</div>
			</div>
		</>
	);
};

const TableHeader = ({ header }: { header: tableHeader }) => {
	const { name } = header;

	return <div className={S.TheadData}>{name}</div>;
};

const TableBodyRow = ({
	headers,
	data,
}: {
	headers: tableHeader[];
	data: tableData;
}) => {
	return (
		<div className={S.TbodyRow}>
			{Object.keys(data).map((key, index) => {
				const { dataType, cellAlign } = getHeaderInfo(headers, key);
				return (
					<div
						className={S.TbodyData}
						key={index}
						data-align={cellAlign}
						dangerouslySetInnerHTML={{
							__html:
								dataType !== 'boolean' ? data[key] : data[key] ? '○' : '✕',
						}}
					/>
				);
			})}
		</div>
	);
};

const getHeaderInfo = (headers: tableHeader[], targetName: string) => {
	const regExp = new RegExp(targetName, 'gi');
	const header = headers.find(({ name }) => name.match(regExp));

	if (!header) {
		return { dataType: 'string', cellAlign: 'left' };
	}

	const dataType = header.type || 'string';
	const cellAlign = header.align || 'left';
	return { dataType, cellAlign };
};

export default Table;
