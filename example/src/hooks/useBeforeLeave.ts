import { useEffect } from 'react';

export const useBeforeLeave = (onBefore: Function) => {
	const handler = (ev: MouseEvent) => {
		const { clientY } = ev;
		if (clientY <= 0) {
			onBefore();
		}
	};

	useEffect(() => {
		document.addEventListener('mouseleave', handler);
		return () => document.removeEventListener('mouseleave', handler);
	}, []);
};
