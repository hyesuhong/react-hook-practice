import { useEffect, useRef } from 'react';

export const useFullscreen = <T extends HTMLElement>(callback: Function) => {
	const element = useRef<T>(null);
	const triggerFullscreen = () => {
		if (element.current) {
			element.current.requestFullscreen();
		}
	};
	const exitFullscreen = () => {
		document.exitFullscreen();
	};
	const onChange = () => {
		if (document.fullscreenElement) {
			callback(true);
		} else {
			callback(false);
		}
	};
	useEffect(() => {
		document.addEventListener('fullscreenchange', onChange);
		return () => document.removeEventListener('fullscreenchange', onChange);
	}, []);
	return { ref: element, trigger: triggerFullscreen, exit: exitFullscreen };
};
