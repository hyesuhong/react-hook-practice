'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menu = ['useCoords', 'useIntersection', 'useForm'];

export default function SideBar() {
	const pathName = usePathname();

	return (
		<aside>
			<h1>su-hooks</h1>
			<ul>
				{menu.map((item, index) => {
					const path = `/${item}`;
					return (
						<li
							key={index}
							style={{ background: pathName === path ? 'gold' : '' }}
						>
							<Link href={path}>{item}</Link>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
