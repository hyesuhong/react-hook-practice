import Link from 'next/link';
import { getAllDocs } from '@/api';
import Text from '@/components/basic/Text';
import * as S from '@/styles/main.css';

export default async function Home() {
	const fields = ['slug', 'title'];
	const docs = await getAllDocs(fields);

	return (
		<>
			<main className={S.Main}>
				<Text type='h1'>su-hooks</Text>

				<ul className={S.MainList}>
					{docs &&
						docs.map((data, index) => {
							if (data) {
								const path = `/docs/${data.slug}`;
								return (
									<li key={index} className={S.MainItem}>
										<Link href={path} className={S.MainLink}>
											{data.title}
										</Link>
									</li>
								);
							} else {
								return null;
							}
						})}
				</ul>
			</main>
		</>
	);
}
