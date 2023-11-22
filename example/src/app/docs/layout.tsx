interface layout {
	children: React.ReactNode;
}

export default function Layout({ children }: layout) {
	return <main className='pt-10 px-10 pb-40 text-base'>{children}</main>;
}
