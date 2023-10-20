import {
	createGlobalTheme,
	createGlobalThemeContract,
} from '@vanilla-extract/css';

const toTitleCase = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const colorVars = {
	black: '#333333',
	white: '#ffffff',
	grey: {
		dark: '#444444',
		// dark: '#292d37',
		light: '#eeeeee',
		// light: '#fafafa',
	},
	skyBlue: '#21B2E4',
};

export const themeVars = createGlobalThemeContract(
	{
		color: {
			background: null,
			text: null,
			grey: null,
			blue: {
				sky: null,
			},
		},
	},
	(_value, path) => path.map(toTitleCase).reverse().join('')
);

export const lightTheme = {
	color: {
		background: colorVars.white,
		text: colorVars.black,
		grey: colorVars.grey.light,
		blue: {
			sky: colorVars.skyBlue,
		},
	},
};

export const darkTheme = {
	color: {
		background: colorVars.black,
		text: colorVars.white,
		grey: colorVars.grey.dark,
		blue: {
			sky: colorVars.skyBlue,
		},
	},
};

createGlobalTheme(':root.light', themeVars, lightTheme);

createGlobalTheme(':root.dark', themeVars, darkTheme);
