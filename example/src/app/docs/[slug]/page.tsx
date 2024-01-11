import { notFound } from 'next/navigation';
import { getAllDocs, getDocBySlug } from '@/api';
import MdView from '@/components/markdown/MdView';
import Text from '@/components/basic/Text';
import * as S from '@/styles/docsMain.css';

interface Props {
	params: { slug?: string };
}

export const generateStaticParams = async () => {
	const docs = await getAllDocs(['slug']);
	return docs.map((doc) => ({ slug: doc?.slug }));
};

export default async function Docs({ params }: Props) {
	const { slug } = params;

	if (!slug) {
		return notFound();
	}

	const fields = ['slug', 'title', 'description', 'content'];
	const doc = await getDocBySlug(slug, fields);

	if (!doc) {
		return notFound();
	}

	return (
		<>
			<Text type='h2' className={S.MainTitle}>
				{doc.title}
			</Text>
			<Text className={S.MainPara}>{doc.description}</Text>
			<section className={S.Section}>
				<MdView content={doc.content} />
			</section>
		</>
	);
}
