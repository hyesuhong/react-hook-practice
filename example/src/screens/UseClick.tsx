import { useClick } from '../hooks/useClick';

export default function UseClick() {
	const sayHello = () => {
		console.log('hello');
	};
	const title = useClick(sayHello);
	return <h3 ref={title}>Hi</h3>;
}
