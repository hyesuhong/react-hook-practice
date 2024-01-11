import { getAllDocs } from '@/api';
import * as S from '@/styles/docsMain.css';
import SideBar from '../../components/SideBar';

interface layout {
	children: React.ReactNode;
}

export default async function Layout({ children }: layout) {
	const fields = ['slug', 'title'];
	const docs = await getAllDocs(fields);

	return (
		<div className={S.DocsLayout}>
			{docs && <SideBar fileData={docs} />}
			<main className={S.Wrapper}>{children}</main>
		</div>
	);
}
