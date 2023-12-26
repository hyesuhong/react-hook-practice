import { promises as fs } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const targetDir = join(process.cwd(), 'src', 'app', '_contents');

export const getDocFiles = async () => {
	const dirArr = await fs.readdir(targetDir);

	const matters = await Promise.all(
		dirArr.map((fileName) => {
			return getDocFileBySlug(fileName);
		})
	);

	const frontMatterArr = matters.map((matter) => matter.data);

	return frontMatterArr;
};

export const getDocFileBySlug = async (slug: string) => {
	const onlySlug = slug.replace(/\.md$/, '');
	const path = join(targetDir, `${onlySlug}.md`);
	const fileContents = await fs.readFile(path, 'utf8');

	const fileObj = matter(fileContents);

	return fileObj;
};
