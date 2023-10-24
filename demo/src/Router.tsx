import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './routes/Main';
import Docs from './routes/Docs';
import { hookData } from './data/hookData';

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
				loader: ({ params }) => {
					const { hooks } = params;
					if (!hooks) {
						return {};
					}

					const data = hookData[hooks];
					return data;
				},
			},
		],
	},
]);

export default router;
