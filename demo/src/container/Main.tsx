import { useMenu } from '../contexts/MenuContext';
import * as S from '../styles/main.css';
import Home from '../screens/Home';

const Main = () => {
	const { menu, current } = useMenu();
	return (
		<>
			{current < 0 ? (
				<main className={S.Wrapper}>
					<Home />
				</main>
			) : (
				<main className={S.Wrapper}>
					<h2 className={S.MainTitle}>{menu[current]}</h2>
				</main>
			)}
		</>
	);
};

export default Main;
