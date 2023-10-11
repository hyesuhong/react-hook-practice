import { useMenu } from '../contexts/MenuContext';
import * as S from '../styles/main.css';
import Home from '../screens/Home';
import SUseCoords from '../screens/SUseCoords';
import SUseIntersection from '../screens/SUseIntersection';

const Main = () => {
	const { menu, current } = useMenu();
	const currentMenuTitle = menu[current];

	return (
		<>
			{current < 0 ? (
				<main className={S.Wrapper}>
					<Home />
				</main>
			) : (
				<main className={S.Wrapper}>
					<h2 className={S.MainTitle}>{currentMenuTitle}</h2>
					{getScreen(currentMenuTitle)}
				</main>
			)}
		</>
	);
};

function getScreen(menuName: string) {
	switch (menuName) {
		case 'useCoords':
			return <SUseCoords />;
		case 'useIntersection':
			return <SUseIntersection />;
		default:
			return <>not found</>;
	}
}

export default Main;
