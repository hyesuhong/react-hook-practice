import { useNotification } from '../hooks/useNotification';

export default function UseNoti() {
	const triggerNoti = useNotification('can i get a coffee?', {
		body: 'I really need a coffee',
	});
	return (
		<div>
			<button onClick={triggerNoti}>trigger notification</button>
		</div>
	);
}
