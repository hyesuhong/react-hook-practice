import { useEffect, useState } from 'react';
import CodePreview from '../components/code/CodePreview';
import CodeBlock from '../components/code/CodeBlock';
import Table from '../components/table/Table';
import useSandboxFile from '../hooks/useSandboxFile';
import { hookData } from '../data/hookData';
import * as S from '../styles/main.css';

const {
	useIntersection: { installCode, sandboxId, parameters, returns },
} = hookData;

const SUseIntersection = () => {
	const { files } = useSandboxFile(sandboxId);
	const [exampleCode, setExampleCode] = useState(['~~~tsx', '~~~']);

	useEffect(() => {
		if (files && exampleCode.length < 3) {
			setExampleCode((prev) => [prev[0], files['/src/App.tsx'].code, prev[1]]);
		}
	}, [files]);

	return (
		<>
			<p className={S.MainPara}>React Hook to use Intersection Observer API</p>

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Installation</h3>
				<div className={S.CodeBox}>
					<CodeBlock code={installCode} />
				</div>
			</section>

			{parameters && (
				<section className={S.Section}>
					<h3 className={S.SubTitle}>Parameters</h3>
					<Table {...parameters} />
				</section>
			)}

			{returns && (
				<section className={S.Section}>
					<h3 className={S.SubTitle}>Returns</h3>
					<Table {...returns} />
				</section>
			)}

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

export default SUseIntersection;
