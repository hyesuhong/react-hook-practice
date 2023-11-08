interface layout {
	children: React.ReactNode;
}

export default function Layout({ children }: layout) {
	return (
		<main className='pt-[1rem] px-[1rem] pb-[4rem] text-[1.4rem]'>
			{children}
		</main>
	);
}
