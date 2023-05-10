import { usePreventLeave } from '../hooks/usePreventLeave';

export default function UsePreventLeave() {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div>
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>Unprotect</button>
		</div>
	);
}
