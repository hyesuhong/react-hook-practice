import { useMenu } from '../contexts/MenuContext';

const Main = () => {
	const { menu, current } = useMenu();
	return (
		<main>
			<h2>{menu[current]}</h2>
		</main>
	);
};

export default Main;
