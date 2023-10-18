import { useEffect, useState } from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/code/CodeBlock';
import CodePreview from '../components/code/CodePreview';
import Table from '../components/table/Table';
import useSandboxFile from '../hooks/useSandboxFile';
import { hookData } from '../data/hookData';
import * as S from '../styles/main.css';

const {
	useCoords: { installCode, sandboxId, returns },
} = hookData;

const SUseCoords = () => {
	const { files } = useSandboxFile(sandboxId);
	const [exampleCode, setExampleCode] = useState(['~~~tsx', '~~~']);

	useEffect(() => {
		if (files && exampleCode.length < 3) {
			setExampleCode((prev) => [prev[0], files['/src/App.tsx'].code, prev[1]]);
		}
	}, [files]);

	return (
		<>
			<p className={S.MainPara}>
				Get user's current location information, such as longitude, by using the
				Geolocation API
			</p>

			<Section title='Installation'>
				<CodeBlock code={installCode} />
			</Section>

			{returns && (
				<Section title='Returns'>
					<Table {...returns} />
				</Section>
			)}

			{files && (
				<>
					<Section title='Preview'>
						<CodePreview files={files} />
					</Section>

					<Section title='Example'>
						<CodeBlock code={exampleCode.join('\n')} />
					</Section>
				</>
			)}
		</>
	);
};

export default SUseCoords;
