import {
	Dispatch,
	ReactNode,
	createContext,
	useContext,
	useReducer,
} from 'react';

export type theme = 'light' | 'dark' | 'system';

interface themeContext {
	theme: theme;
	system: theme;
	// system: Omit<theme, 'system'>;
}

interface themeProvider {
	children: ReactNode;
}

type themeAction = {
	type: 'CHANGE';
	nextTheme: theme;
};

const systemThemeIsDark = matchMedia('(prefers-color-scheme: dark)');
const systemTheme = systemThemeIsDark.matches ? 'dark' : 'light';

const initialTheme: themeContext = {
	theme: 'system',
	system: systemTheme,
};

const ThemeContext = createContext<themeContext>(initialTheme);
const ThemeDispatchContext = createContext<Dispatch<themeAction> | null>(null);

const themeReducer = (prevState: themeContext, action: themeAction) => {
	console.log(prevState, action);
	switch (action.type) {
		case 'CHANGE':
			themeChangeHandler(action.nextTheme);
			return { ...prevState, theme: action.nextTheme };
		default:
			throw Error('Unknown action: ' + action.type);
	}
};

const themeChangeHandler = (theme: theme) => {
	document.documentElement.classList.remove('light', 'dark');
	if (theme !== 'system') {
		document.documentElement.classList.add(theme);
	}
};

const ThemeProvider = ({ children }: themeProvider) => {
	const [theme, dispatch] = useReducer(themeReducer, initialTheme);

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeDispatchContext.Provider value={dispatch}>
				{children}
			</ThemeDispatchContext.Provider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);

export default ThemeProvider;
