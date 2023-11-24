import { Obj } from '@/types/basic';
import { GrayMatterFile } from 'gray-matter';

export const getDocs = async () => {
	const response = await fetch(`http://localhost:3000/api/docs`);

	if (!response.ok) {
		throw new Error('docs: something went to wrong');
	}

	return (await response.json()) as Obj<string>[];
};

export const getDocBySlug = async (slug: string) => {
	const response = await fetch(`http://localhost:3000/api/docs/${slug}`);

	if (!response.ok) {
		throw new Error(`doc: ${JSON.stringify(response.json())}`);
	}

	return (await response.json()) as GrayMatterFile<string>;
};
