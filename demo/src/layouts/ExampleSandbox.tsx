import Section from '../components/Section';
import CodePreview from '../components/code/CodePreview';
import CodeBlock from '../components/code/CodeBlock';
import { SandpackFiles } from '@codesandbox/sandpack-react';

type exampleSandbox = {
	hook?: string;
	files: SandpackFiles;
};

const ExampleSandbox = ({ hook = '', files }: exampleSandbox) => {
	const name = [...hook].reduce((acc, str) => {
		const isCapital = str.match(/[A-Z]/);
		const nextStr = isCapital ? `-${str.toLowerCase()}` : str;
		return acc + nextStr;
	}, '');
	const exampleCode = ['~~~tsx', files['/App.tsx'], '~~~'];

	const setup = {
		dependencies: {
			[`@su-hooks/${name}`]: 'latest',
		},
	};

	return (
		<>
			<Section title='preview'>
				<CodePreview files={files} setup={setup} />
			</Section>

			<Section title='example'>
				<CodeBlock code={exampleCode.join('\n')} />
			</Section>
		</>
	);
};

export default ExampleSandbox;
