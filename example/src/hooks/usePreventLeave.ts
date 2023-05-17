export const usePreventLeave = () => {
	const listener = (ev: BeforeUnloadEvent) => {
		ev.preventDefault();
		ev.returnValue = '';
	};
	const enablePrevent = () => window.addEventListener('beforeunload', listener);
	const disablePrevent = () =>
		window.removeEventListener('beforeunload', listener);
	return { enablePrevent, disablePrevent };
};
