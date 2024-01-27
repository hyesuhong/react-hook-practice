'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

const Provider = ({ children }: React.PropsWithChildren) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}

	return <ThemeProvider defaultTheme='dart'>{children}</ThemeProvider>;
};

export default Provider;
