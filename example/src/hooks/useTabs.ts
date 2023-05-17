import { useState } from 'react';

// type UseTabs<T, A> = {
// 	(initialTab: T, allTabs: A[]): {
// 		currentItem: A;
// 		changeItem: React.Dispatch<React.SetStateAction<T>>;
// 	};
// };

// export const useTabs: UseTabs<T,A> = (initialTab, allTabs) => {
// 	const [currentIndex, setCurrentIndex] = useState(initialTab);
// 	return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
// };

export function useTabs<T>(initialIndex: number, allTabs: T[]) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
}
