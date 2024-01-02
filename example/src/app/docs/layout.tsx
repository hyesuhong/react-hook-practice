import { getAllDocs } from '@/api';
import SideBar from '../../components/SideBar';

interface layout {
	children: React.ReactNode;
}

export default async function Layout({ children }: layout) {
	const fields = ['slug', 'title'];
	const docs = await getAllDocs(fields);

	return (
		<div className=' grid grid-cols-[max-content_1fr] grid-rows-[minmax(100vh,max-content)]'>
			{docs && <SideBar fileData={docs} />}
			<main className='pt-20 px-20 pb-40 text-base'>{children}</main>
		</div>
	);
}
