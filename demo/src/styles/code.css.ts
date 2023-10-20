import { style } from '@vanilla-extract/css';
import { ContentWrapper } from './main.css';
import { themeVars } from './theme.css';

export const CopyBtn = style({
	position: 'absolute',
	top: '1.8rem',
	right: '1rem',
	width: '3rem',
	height: '3rem',

	background: 'transparent',
	border: 'none',

	selectors: {
		[`${ContentWrapper} > &`]: {
			opacity: 0,
			visibility: 'hidden',

			transition: 'all 0.2s',
		},
		[`${ContentWrapper}:hover > &`]: {
			visibility: 'visible',
			opacity: 0.5,
		},
		[`${ContentWrapper} > &:hover`]: {
			opacity: 1,
		},
	},
});

export const CopyIcon = style({
	width: '80%',
	height: '80%',

	selectors: {
		[`${CopyBtn} > &`]: {
			fill: themeVars.color.text,
		},
	},
});
