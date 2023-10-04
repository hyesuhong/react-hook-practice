import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css.ts';
import MenuProvider from './contexts/MenuContext.tsx';

const listItem = ['useCoords', 'useIntersection', 'useForm'];

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MenuProvider menu={listItem}>
			<App />
		</MenuProvider>
	</React.StrictMode>
);
