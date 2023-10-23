import { promises as fs } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface props {
	params: { hooks: string };
}

export async function generateMetadata({ params }: props) {
	const hooks = params.hooks;
	return {
		title: hooks,
	};
}

async function getData(name: string) {
	const path = `/src/app/_data/${name}.mdx`;

	try {
		const file = await fs.readFile(process.cwd() + path, 'utf8');

		return file;
	} catch (e) {
		console.error(e);
		throw new Error('Not Found');
	}

	return '';
}

export default async function Docs({ params }: props) {
	const data = await getData(params.hooks);

	return (
		<>
			<MDXRemote source={data} />
		</>
	);
}
