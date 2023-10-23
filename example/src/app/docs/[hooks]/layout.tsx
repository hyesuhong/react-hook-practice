interface layout {
	params: any;
	children: React.ReactNode;
}

export default function Layout({ params, children }: layout) {
	return (
		<main className='pt-[1rem] px-[1rem] pb-[4rem] text-[1.4rem]'>
			<h2 className='text-[2rem] font-medium mb-[4rem]'>{params.hooks}</h2>
			{children}
		</main>
	);
}
