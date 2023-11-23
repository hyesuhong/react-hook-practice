import { getDocBySlug } from '@/app/api/docs/getDocs';
import MarkdownView from '@/app/components/MarkdownView';
import Text from '@/app/components/basic/Text';

interface Props {
	params: { hooks: string };
}

export async function generateMetadata({ params }: Props) {
	const { hooks } = params;
	const { data } = await getDocBySlug(hooks);

	return {
		title: data.title,
	};
}

export default async function Docs({ params }: Props) {
	const { hooks } = params;
	const { data, content } = await getDocBySlug(hooks);

	return (
		<>
			<Text type='h2' className='mb-40 text-center'>
				{data.title}
			</Text>
			<section className='max-w-7xl mx-auto'>
				<MarkdownView content={content} />
			</section>
		</>
	);
}
