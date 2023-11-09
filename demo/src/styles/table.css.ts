import { style } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const Table = style({
	width: '100%',
	fontSize: '1.4rem',
	borderCollapse: 'collapse',
	borderRadius: '0.4rem',
	overflow: 'hidden',
});

export const Thead = style({
	fontWeight: 500,
	background: themeVars.color.grey,
	height: '3.2rem',
	textTransform: 'capitalize',
	transition: 'background 0.3s',
});

export const TbodyRow = style({
	borderBottom: `1px solid ${themeVars.color.grey}`,
	selectors: {
		'&:last-child': {
			borderBottom: 'none',
		},
	},
});

export const TbodyData = style({
	selectors: {
		[`${TbodyRow} > &`]: {
			padding: '0.5rem 1rem',
		},
		['&[data-align="center"]']: {
			// justifyContent: 'center',
			textAlign: 'center',
		},
		['&[data-align="right"]']: {
			// justifyContent: 'end',
			textAlign: 'right',
		},
	},
});
