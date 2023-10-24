import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './routes/Main';
import Docs from './routes/Docs';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/docs/:hooks',
				element: <Docs />,
			},
		],
	},
]);

export default router;
