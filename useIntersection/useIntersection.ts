import { useEffect, useRef } from 'react';

export type IntersectionCB = (
	entries: IntersectionObserverEntry[],
	observer: IntersectionObserver
) => void;

interface IntersectionOption {
	root?: HTMLElement;
	rootMargin?: {
		top: number | string; // number => px, string => px or %
		right: number | string;
		bottom: number | string;
		left: number | string;
	};
	thresholds?: number | number[]; // 0 ~ 1
}

export interface IUseIntersection extends IntersectionOption {
	handleIntersection: IntersectionCB;
}

export const useIntersection = <T extends HTMLElement>({
	root,
	rootMargin,
	thresholds,
	handleIntersection,
}: IUseIntersection) => {
	const ref = useRef<T>(null);
	const marginString = rootMargin
		? `${
				typeof rootMargin.top === 'number'
					? `${rootMargin.top}px`
					: rootMargin.top
		  } ${
				typeof rootMargin.right === 'number'
					? `${rootMargin.right}px`
					: rootMargin.right
		  } ${
				typeof rootMargin.bottom === 'number'
					? `${rootMargin.bottom}px`
					: rootMargin.bottom
		  } ${
				typeof rootMargin.left === 'number'
					? `${rootMargin.left}px`
					: rootMargin.left
		  }`
		: '0px 0px 0px 0px';
	const intersectionOpt = {
		root: root || null,
		rootMargin: marginString,
		threshold: thresholds || 0,
	};

	const observer = new IntersectionObserver(
		handleIntersection,
		intersectionOpt
	);

	useEffect(() => {
		if (!ref.current) return;
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, []);
	return { ref: ref, observer: observer };
};
