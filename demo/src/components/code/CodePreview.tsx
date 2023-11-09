import {
	SandpackFiles,
	SandpackProvider,
	SandpackLayout,
	SandpackPreview,
	SandpackSetup,
} from '@codesandbox/sandpack-react';

interface codePreview {
	height?: number | string;
	files?: SandpackFiles;
	setup?: SandpackSetup;
}

const CodePreview = ({ height = 250, files, setup }: codePreview) => {
	return (
		<SandpackProvider template='react-ts' customSetup={setup} files={files}>
			<SandpackLayout>
				<SandpackPreview style={{ height }} showOpenInCodeSandbox={false} />
			</SandpackLayout>
		</SandpackProvider>
	);
};
export default CodePreview;
