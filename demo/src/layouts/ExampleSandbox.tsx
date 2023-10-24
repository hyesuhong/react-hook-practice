import { useEffect, useState } from 'react';
import useSandboxFile from '../hooks/useSandboxFile';
import Section from '../components/Section';
import CodePreview from '../components/code/CodePreview';
import CodeBlock from '../components/code/CodeBlock';

type exampleSandbox = {
	id: string;
};

const ExampleSandbox = ({ id }: exampleSandbox) => {
	const { files } = useSandboxFile(id);
	const [exampleCode, setExampleCode] = useState(['~~~tsx', '~~~']);

	useEffect(() => {
		if (files && exampleCode.length < 3) {
			setExampleCode((prev) => [prev[0], files['/src/App.tsx'].code, prev[1]]);
		}
	}, [files]);

	return (
		<>
			{files && (
				<>
					<Section title='preview'>
						<CodePreview files={files} />
					</Section>

					<Section title='example'>
						<CodeBlock code={exampleCode.join('\n')} />
					</Section>
				</>
			)}
		</>
	);
};

export default ExampleSandbox;
