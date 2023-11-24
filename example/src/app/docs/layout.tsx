import { getDocs } from '../api/docs/getDocs';
import SideBar from '../components/SideBar';

interface layout {
	children: React.ReactNode;
}

export default async function Layout({ children }: layout) {
	const fileData = await getDocs();

	return (
		<div className=' grid grid-cols-[max-content_1fr] grid-rows-[minmax(100vh,max-content)]'>
			<SideBar fileData={fileData} />
			<main className='pt-20 px-20 pb-40 text-base'>{children}</main>
		</div>
	);
}
