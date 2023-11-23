import { getDocBySlug } from '@/app/api/docs/getDocs';
import MarkdownView from '@/app/components/MarkdownView';

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
			<h2 className='text-5xl font-medium mb-40'>{data.title}</h2>
			<section>
				<MarkdownView content={content} />
			</section>
		</>
	);
}
