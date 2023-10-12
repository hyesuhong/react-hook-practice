import { useEffect, useState } from 'react';
import CodePreview from '../components/CodePreview';
import CodeBlock from '../components/CodeBlock';
import Table from '../components/Table';
import useSandboxFile from '../hooks/useSandboxFile';
import * as S from '../styles/main.css';

const installCode = `~~~shell
npm i @su-hooks/use-form
~~~`;

const parameterData = [
	{
		Name: 'inputs',
		Type: 'inputProps',
		Required: '○',
		Default: 'null',
	},
	{ Name: 'submitHandler', Type: 'Function', Required: '✕', Default: 'null' },
];

const returnData = [
	{
		Name: 'form',
		Type: 'Object',
		Description: `input's information(value, validation)`,
	},
	{
		Name: 'handleChange',
		Type: 'ChangeEvent',
		Description: `input change event`,
	},
	{
		Name: 'handleSubmit',
		Type: 'SubmitEvent',
		Description: `form submit event`,
	},
	{
		Name: 'isFormValid',
		Type: 'Boolean',
		Description: `form validation`,
	},
];

const sandboxId = 'useform-ex-p6v9fw';

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
				<Table data={parameterData} />
			</section>

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Returns</h3>
				<Table data={returnData} />
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
