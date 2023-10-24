import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import MenuProvider from './contexts/MenuContext';
import ThemeProvider from './contexts/ThemeContext';
import { hookData } from './data/hookData';
import * as S from './styles/main.css';

const listItem = Object.keys(hookData);

function App() {
	return (
		<>
			<ThemeProvider>
				<MenuProvider menu={listItem}>
					<SideBar />
					<main className={S.Wrapper}>
						<Outlet />
					</main>
				</MenuProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
