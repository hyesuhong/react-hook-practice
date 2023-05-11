import { useEffect, useRef } from 'react';

export const useFadeIn = <T extends HTMLElement>(
	duration: number = 1,
	delay?: number
) => {
	const element = useRef<T>(null);
	useEffect(() => {
		if (element.current) {
			const { current } = element;
			console.log(current.style.opacity);
			// current.style.transition = `opacity ${duration}s ${delay}s`;
			current.style.transition = `opacity ${duration}s`;
			setTimeout(
				() => {
					current.style.opacity = '1';
				},
				delay ? delay * 1000 : 0
			);
		}
	}, [duration, delay]);
	return { ref: element, style: { opacity: 0 } };
};
