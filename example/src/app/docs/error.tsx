'use client';

import { useEffect } from 'react';

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<p>{error.message}</p>
			<button onClick={() => reset()}>Try again</button>
		</div>
	);
}
