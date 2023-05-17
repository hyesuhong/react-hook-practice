import { useBeforeLeave } from '../hooks/useBeforeLeave';

export default function UseBeforeLeave() {
	const beofreLeave = useBeforeLeave(() => {
		console.log('do not leave please!');
	});
	return <div></div>;
}
