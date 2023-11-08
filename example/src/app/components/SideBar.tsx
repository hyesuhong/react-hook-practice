'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { makeCamelName } from '../_utils/name';

const menu = ['use-coords', 'use-intersection', 'use-form'];

export default function SideBar() {
	const pathName = usePathname();

	return (
		<aside className='sticky top-0 grid grid-rows-[max-content_minmax(0,1fr)_min-content] w-[16rem] py-[1rem] border-r border-r-[#eee]'>
			<h1 className='text-[2.4rem] font-bold px-[1rem] mb-[3rem]'>su-hooks</h1>
			<ul>
				{menu.map((item, index) => {
					const path = `/docs/${item}`;
					const basicClassName =
						'h-[4rem] flex items-center justify-between px-[1rem] after:content-[""] after:flex-[0_0_0.6rem] after:h-[0.6rem] after:border-t-2 after:border-r-2 after:border-t-[#333] after:border-r-[#333] after:rotate-45 after:opacity-0 hover:bg-[#eee]/30';
					const selectedClassName = `${basicClassName} bg-[#eee] after:opacity-100`;

					const linkName = makeCamelName('-', item);

					return (
						<li key={index} className='relative text-[1.4rem]'>
							<Link
								href={path}
								className={
									path === pathName ? selectedClassName : basicClassName
								}
							>
								{linkName}
							</Link>
						</li>
					);
				})}
			</ul>
			<ol className='flex px-[1rem] items-center'>
				<li>
					<a href='https://github.com/hyesuhong/su-hooks' target='_blank'>
						<Image
							src='/ico-github.svg'
							width='32'
							height='32'
							alt='github logo'
							className=''
						/>
					</a>
				</li>
			</ol>
		</aside>
	);
}
