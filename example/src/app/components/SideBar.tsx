'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type FileData = {
	title: string;
	slug: string;
};

interface Props {
	fileData: FileData[];
}

export default function SideBar({ fileData }: Props) {
	const pathName = usePathname();

	return (
		<aside className='sticky top-0 grid grid-rows-[max-content_minmax(0,1fr)_min-content] w-160 py-10 border-r border-r-grey-light'>
			<h1 className='text-xl font-bold px-10 mb-30'>su-hooks</h1>
			<ul>
				{fileData.map(({ title, slug }, index) => {
					const path = `/docs/${slug}`;
					const basicClassName =
						'h-40 flex items-center justify-between px-10 after:content-[""] after:flex-[0_0_0.6rem] after:h-[0.6rem] after:border-t-2 after:border-r-2 after:border-t-black after:border-r-black after:rotate-45 after:opacity-0 hover:bg-grey-light/30';
					const selectedClassName = `${basicClassName} bg-grey-light after:opacity-100`;

					return (
						<li key={index} className='relative text-base'>
							<Link
								href={path}
								className={
									path === pathName ? selectedClassName : basicClassName
								}
							>
								{title}
							</Link>
						</li>
					);
				})}
			</ul>
			<ol className='flex px-10 items-center'>
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
