import { makeCamelName } from '@/app/_utils/name';

interface layout {
	params: { hooks: string };
	children: React.ReactNode;
}

export default function Layout({ params, children }: layout) {
	return (
		<>
			<h2 className='text-5xl font-medium mb-40'>
				{makeCamelName('-', params.hooks)}
			</h2>
			{children}
		</>
	);
}
