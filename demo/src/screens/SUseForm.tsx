import { useEffect, useState } from 'react';
import CodePreview from '../components/CodePreview';
import CodeBlock from '../components/CodeBlock';
import Table from '../components/Table';
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

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Installation</h3>
				<div className={S.CodeBox}>
					<CodeBlock code={installCode} />
				</div>
			</section>

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Parameters</h3>
				<Table data={parameters} />
			</section>

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Returns</h3>
				<Table data={returns} />
			</section>

			{files && (
				<>
					<section className={S.Section}>
						<h3 className={S.SubTitle}>Preview</h3>
						<div className={S.CodeBox} style={{ height: 250 }}>
							<CodePreview files={files} />
						</div>
					</section>

					<section className={S.Section}>
						<h3 className={S.SubTitle}>Example</h3>
						<div className={S.CodeBox}>
							<CodeBlock code={exampleCode.join('\n')} />
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default SUseForm;
