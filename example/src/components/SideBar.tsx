'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Obj } from '@/types/basic';
import * as S from '@/styles/sideBar.css';

interface Props {
	fileData: (Obj<string> | undefined)[];
}

export default function SideBar({ fileData }: Props) {
	const pathName = usePathname();

	return (
		<aside className={S.sideBarWrapper}>
			<h1 className={S.sideBarTitle}>
				<Link href='/'>su-hooks</Link>
			</h1>
			<ul>
				{fileData.map((file, index) => {
					if (file) {
						const { slug, title } = file;
						const path = `/docs/${slug}`;

						return (
							<li key={index}>
								<Link
									href={path}
									className={
										path === pathName
											? `${S.sideBarList} active`
											: S.sideBarList
									}
								>
									{title}
								</Link>
							</li>
						);
					} else {
						return null;
					}
				})}
			</ul>
		</aside>
	);
}
