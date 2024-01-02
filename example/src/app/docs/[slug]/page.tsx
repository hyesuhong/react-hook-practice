import MdView from '@/components/markdown/MdView';
import Text from '@/components/basic/Text';
import { getAllDocs, getDocBySlug } from '@/api';
import { notFound } from 'next/navigation';

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

	const fields = ['slug', 'title', 'content'];
	const doc = await getDocBySlug(slug, fields);

	if (!doc) {
		return notFound();
	}

	return (
		<>
			<Text type='h2' className='mb-40 text-center'>
				{doc.title}
			</Text>
			<Text className='text-center'>{doc.description}</Text>
			<section className='mt-60'>
				<MdView content={doc.content} />
			</section>
		</>
	);
}
