import { assignVars, globalStyle } from '@vanilla-extract/css';
import { Wrapper } from './main.css';
import { darkTheme, lightTheme, themeVars } from './theme.css';

globalStyle('*', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
});

globalStyle(':root', {
	fontFamily:
		'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;',
	fontSize: 10,
	'@media': {
		'(prefers-color-scheme: light)': {
			vars: assignVars(themeVars, lightTheme),
		},
		'(prefers-color-scheme: dark)': { vars: assignVars(themeVars, darkTheme) },
	},
});

globalStyle('body', {
	background: themeVars.color.background,
	color: themeVars.color.text,
	transition: 'background 0.3s, color 0.3s',
});

globalStyle('a', {
	textDecoration: 'none',
	color: 'inherit',
});

globalStyle('ul li, ol li', {
	listStyle: 'none',
});

globalStyle('img', {
	verticalAlign: 'middle',
});

globalStyle('button', {
	cursor: 'pointer',
});

globalStyle('#root', {
	display: 'grid',
	gridTemplateColumns: 'max-content 1fr',
	gridTemplateRows: 'minmax(100vh,max-content)',
});

globalStyle(`${Wrapper} a`, {
	position: 'relative',
	color: themeVars.color.text,
	opacity: 0.5,
	transition: 'color 0.2s, opacity 0.2s',
});

globalStyle(`${Wrapper} a::after`, {
	content: '',
	position: 'absolute',
	bottom: 0,
	left: 0,
	width: '0',
	height: '1px',
	background: themeVars.color.blue.sky,
	transition: 'width 0.2s',
});

globalStyle(`${Wrapper} a:hover`, {
	color: themeVars.color.blue.sky,
	opacity: 1,
});

globalStyle(`${Wrapper} a:hover::after`, {
	width: '100%',
});
