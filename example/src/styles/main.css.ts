import { style } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const Main = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
});

export const MainList = style({
	display: 'flex',
	gap: '2rem',
	marginTop: '4rem',
});

export const MainItem = style({
	display: 'flex',
	fontSize: '1.6rem',
	lineHeight: '168%',
	borderRadius: '300px',
	border: `1px solid ${themeVars.color.grey}`,
	overflow: 'hidden',
});

export const MainLink = style({
	position: 'relative',
	padding: '0.5rem 1rem',

	selectors: {
		'&::before': {
			content: '',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: themeVars.color.text,
			opacity: 0.5,
			zIndex: -1,
			translate: `0 100%`,
			transition: 'translate linear 0.2s',
		},
		'&:hover::before': {
			translate: '0 0',
		},
	},
});
