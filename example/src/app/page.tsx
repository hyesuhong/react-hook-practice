import { getAllDocs } from '@/api';
import Text from '@/components/basic/Text';
import Link from 'next/link';

export default async function Home() {
	const fields = ['slug', 'title'];
	const docs = await getAllDocs(fields);

	return (
		<>
			<main className='flex flex-col justify-center items-center h-full'>
				<Text type='h1'>su-hooks</Text>

				<ul className='flex gap-20 mt-40'>
					{docs.map((data, index) => {
						const path = `/docs/${data.slug}`;
						return (
							<li
								key={index}
								className='flex text-lg rounded-full border border-grey-dark overflow-hidden'
							>
								<Link
									href={path}
									className='relative px-10 py-2 before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-grey-light before:-z-10 before:translate-y-100 before:transition-transform before:ease-linear before:duration-300 hover:before:translate-y-0'
								>
									{data.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</main>
		</>
	);
}
