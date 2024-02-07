import { keyframes, style } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const Wrapper = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '1rem',

	flex: 1,
	width: '100%',
});

const pulstAnimation = keyframes({
	'0%': {
		opacity: 0,
	},
	'100%': {
		opacity: 0.8,
	},
});

export const LoadingDot = style({
	width: '0.8rem',
	height: '0.8rem',
	background: themeVars.color.text,
	borderRadius: '100%',
	animationName: pulstAnimation,
	animationDuration: '1.2s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
});
