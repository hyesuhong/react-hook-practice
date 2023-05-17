import { useEffect, useState } from 'react';

export const useScroll = () => {
	const [state, setState] = useState({ x: 0, y: 0 });
	const onScroll = () => {
		const { scrollX, scrollY } = window;
		setState({ x: scrollX, y: scrollY });
	};
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	return state;
};
