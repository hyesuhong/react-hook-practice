import { style } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const Footer = style({
	position: 'fixed',
	bottom: 0,
	left: 0,
	width: '100%',
	padding: '1rem',

	background: 'rgb(255 255 255 / 0.2)',
	backdropFilter: 'blur(4px)',
	zIndex: 0,
});

export const FooterNavigation = style({
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	gap: '1rem',
});

export const Icon = style({
	width: '3.2rem',
	height: '3.2rem',
	fill: themeVars.color.text,
});
