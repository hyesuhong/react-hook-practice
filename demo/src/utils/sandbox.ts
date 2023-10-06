import { SandpackFile } from '@codesandbox/sandpack-react';

export type sbFiles = {
	[key: string]: SandpackFile;
};

export const getFiles = async ({ id }: { id: string }) => {
	const configUrl = `https://codesandbox.io/api/v1/sandboxes/${id}/sandpack`;
	const res = await fetch(configUrl);

	if (res.ok) {
		const data = await res.json();
		return updateFiles(data.files);
	}

	return {};
};

const updateFiles = (files: sbFiles) => {
	const previewConfig = getChallengeConfig(files['/package.json'].code);
	Object.keys(files).map((key) => {
		if (key === previewConfig.activeFile) {
			files[key].active = true;
		}
		if (!previewConfig.visibleFiles.includes(key)) {
			files[key].hidden = true;
		}
	});
	return files;
};

const getChallengeConfig = (json: string) => {
	const csb = JSON.parse(json);

	if (csb?.previewConfig) {
		return csb.previewConfig;
	}

	return {
		visibleFiles: [],
		activeFile: '/src/App.js',
	};
};
