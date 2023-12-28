import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Obj } from '@/types/basic';

const targetDir = join(process.cwd(), 'src', '_docs');

export async function getDocSlugs() {
	const dirArr = await fs.readdirSync(targetDir);

	return dirArr ? dirArr : [];
}

export async function getAllDocs(fields: string[] = []) {
	const slugs = await getDocSlugs();

	const docs = await Promise.all(
		slugs.map((slug) => getDocBySlug(slug, fields))
	);
	return docs;
}

export async function getDocBySlug(slug: string, fields: string[] = []) {
	const onlySlug = slug.replace(/\.md$/, '');
	const path = join(targetDir, `${onlySlug}.md`);
	const contents = await fs.readFileSync(path, 'utf-8');

	const { data, content } = matter(contents);

	const items: Obj<string> = {};

	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = onlySlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
	});

	return items;
}
