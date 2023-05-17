import { useEffect, useRef } from 'react';

export const useClick = (onClick: EventListenerOrEventListenerObject) => {
	// reference
	// component의 어떤 부분을 선택할 수 있는 방법
	// document.getElementById 처럼
	// 모든 리액트 컴포넌트는 ref 라는 prop을 가지고 있음.
	// ref에 useRef() 변수를 할당하면 변수로 해당 컴포넌트에 접근할 수 있음
	const element = useRef(null);

	useEffect(() => {
		console.log('mount');
		if (element.current) {
			const e = element.current as Element;
			e.addEventListener('click', onClick);
		}

		// cleanup(when unmount)
		return () => {
			console.log('unmount');
			if (element.current) {
				const e = element.current as Element;
				e.removeEventListener('click', onClick);
			}
		};
	}, []);
	return element;
};
