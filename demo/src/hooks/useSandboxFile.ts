import { useCallback, useEffect, useState } from 'react';
import { getFiles, sbFiles } from '../utils/sandbox';

interface sbFileState {
	files?: sbFiles;
	loading: boolean;
	error?: any;
}

const useSandboxFile = (id: string) => {
	const [files, setFiles] = useState<sbFileState>({ loading: false });

	const getSandboxFile = useCallback(async () => {
		setFiles({ loading: true });

		const sbFiles = getFiles({ id });
		sbFiles
			.then((data) => {
				setFiles((prev) => ({ ...prev, files: data }));
			})
			.catch((error) => {
				setFiles((prev) => ({ ...prev, error }));
			})
			.finally(() => {
				setFiles((prev) => ({ ...prev, loading: false }));
			});
	}, [id]);

	useEffect(() => {
		getSandboxFile();
	}, [getSandboxFile]);
	return { ...files };
};

export default useSandboxFile;
