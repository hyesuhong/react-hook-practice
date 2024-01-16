import { style } from '@vanilla-extract/css';
import { ContentWrapper } from './docsMain.css';
import { themeVars } from './theme.css';

export const CodeWrapper = style({
	position: 'relative',
});

export const CopyBtn = style({
	position: 'absolute',
	top: '1rem',
	right: '1rem',
	height: '3rem',

	display: 'flex',
	alignItems: 'center',
	gap: '0.4rem',
	paddingRight: '0.4rem',
	color: themeVars.color.text,

	background: 'transparent',
	border: `1px solid ${themeVars.color.text}`,
	borderRadius: '0.4rem',

	selectors: {
		[`${ContentWrapper} > &`]: {
			visibility: 'visible',
			opacity: 0.5,
		},
		[`${ContentWrapper} > &:hover`]: {
			opacity: 1,
		},
	},
});

export const CopyIcon = style({
	width: '2.4rem',
	height: '2.4rem',

	selectors: {
		[`${CopyBtn} > &`]: {
			fill: themeVars.color.text,
		},
	},
});
