import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import MenuProvider from './contexts/MenuContext';
import ThemeProvider from './contexts/ThemeContext';
import { hookData } from './data/hookData';

const listItem = Object.keys(hookData);

function App() {
	return (
		<>
			<ThemeProvider>
				<MenuProvider menu={listItem}>
					<SideBar />
					<Outlet />
				</MenuProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
