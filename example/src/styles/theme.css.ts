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
		light: '#eeeeee',
	},
	skyBlue: '#21B2E4',
	blur: {
		dark: 'rgb(51 51 51 / 0.2)',
		light: 'rgb(255 255 255 / 0.2)',
	},
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
			blur: null,
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
		blur: colorVars.blur.light,
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
		blur: colorVars.blur.dark,
	},
};

createGlobalTheme(':root[data-theme="light"]', themeVars, lightTheme);

createGlobalTheme(':root[data-theme="dark"]', themeVars, darkTheme);
