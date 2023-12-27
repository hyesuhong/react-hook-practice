import MdView from '@/components/markdown/MdView';
import Text from '@/components/basic/Text';

interface Props {
	params: { hooks: string };
}

// export async function generateMetadata({ params }: Props) {
// 	const { hooks } = params;
// 	const { data } = await getDocBySlug(hooks);

// 	return {
// 		title: data.title,
// 	};
// }

export default async function Docs({ params }: Props) {
	const { hooks } = params;
	// const { data, content } = await getDocBySlug(hooks);

	return (
		<>
			<Text type='h2' className='mb-40 text-center'>
				{/* {data.title} */}
			</Text>
			<Text className='text-center'>{/* {data.description} */}</Text>
			<section className='mt-60'>{/* <MdView content={content} /> */}</section>
		</>
	);
}
