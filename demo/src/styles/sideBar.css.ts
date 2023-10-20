import { style } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const sideBarWrapper = style({
	padding: '1rem 0',
	position: 'sticky',
	top: 0,

	display: 'grid',
	gridTemplateRows: 'max-content minmax(0,1fr) min-content',
	width: '16rem',
	height: '100vh',
	borderRight: `1px solid ${themeVars.color.grey}`,
});

export const sideBarTitle = style({
	fontSize: '2.4rem',
	fontWeight: '700',
	marginBottom: '3rem',
	padding: '0 1rem',
	cursor: 'pointer',
});

export const sideBarList = style({
	position: 'relative',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 1rem',
	fontSize: '1.4rem',
	height: '4rem',
	cursor: 'pointer',

	selectors: {
		'&::before': {
			content: '',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: themeVars.color.grey,
			opacity: 0,
			transition: 'opacity 0.3s',
			zIndex: -1,
		},
		'&:hover::before': {
			opacity: 0.3,
		},
		'&.selected::before': {
			opacity: 0.5,
		},
		'&.selected::after': {
			content: '',
			flex: '0 0 0.6rem',
			height: '0.6rem',
			borderTop: `2px solid ${themeVars.color.text}`,
			borderRight: `2px solid ${themeVars.color.text}`,
			transform: 'rotate(45deg)',
		},
	},
});

export const LinkList = style({
	display: 'flex',
	alignItems: 'center',
	padding: '0 1rem',
});

export const Icon = style({
	width: '3.2rem',
	height: '3.2rem',
	fill: themeVars.color.text,
});
