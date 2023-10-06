import {
	SandpackFiles,
	SandpackProvider,
	SandpackLayout,
	SandpackPreview,
} from '@codesandbox/sandpack-react';

interface codePreview {
	height?: number | string;
	files?: SandpackFiles;
}

const CodePreview = ({ height = 250, files }: codePreview) => {
	return (
		<SandpackProvider template='react' files={files}>
			<SandpackLayout>
				<SandpackPreview style={{ height }} />
			</SandpackLayout>
		</SandpackProvider>
	);
};
export default CodePreview;
