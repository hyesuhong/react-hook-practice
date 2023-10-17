import * as S from '../styles/table.css';

type tableHeader = {
	name: string;
	type?: 'string' | 'number' | 'boolean';
	align?: 'left' | 'center' | 'right';
	size?: number;
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
	const { name, size } = header;
	const style = size ? { flex: size } : {};

	return (
		<div className={S.TheadData} style={style}>
			{name}
		</div>
	);
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
				const { dataType, cellAlign, cellSize } = getHeaderInfo(headers, key);
				const sizeStyle = cellSize === 1 ? {} : { flex: cellSize };
				return (
					<div
						className={S.TbodyData}
						key={index}
						data-align={cellAlign}
						style={sizeStyle}
					>
						<p
							dangerouslySetInnerHTML={{
								__html:
									dataType !== 'boolean' ? data[key] : data[key] ? '○' : '✕',
							}}
						/>
					</div>
				);
			})}
		</div>
	);
};

const getHeaderInfo = (headers: tableHeader[], targetName: string) => {
	const regExp = new RegExp(targetName, 'gi');
	const header = headers.find(({ name }) => name.match(regExp));

	if (!header) {
		return { dataType: 'string', cellAlign: 'left', cellSize: 1 };
	}

	const dataType = header.type || 'string';
	const cellAlign = header.align || 'left';
	const cellSize = header.size || 1;
	return { dataType, cellAlign, cellSize };
};

export default Table;
