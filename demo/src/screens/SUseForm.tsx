import { useEffect, useState } from 'react';
import Section from '../components/Section';
import CodePreview from '../components/code/CodePreview';
import CodeBlock from '../components/code/CodeBlock';
import Table from '../components/table/Table';
import useSandboxFile from '../hooks/useSandboxFile';
import { hookData } from '../data/hookData';
import * as S from '../styles/main.css';

const {
	useForm: { installCode, sandboxId, parameters, returns },
} = hookData;

const SUseForm = () => {
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
				Custom React hook to use form with input validator
			</p>

			<Section title='Installation'>
				<CodeBlock code={installCode} />
			</Section>

			{parameters && (
				<Section title='Parameters'>
					<Table {...parameters} />
				</Section>
			)}

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

export default SUseForm;
