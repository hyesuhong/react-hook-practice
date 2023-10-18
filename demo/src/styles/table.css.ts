import { style } from '@vanilla-extract/css';

export const Table = style({
	width: '100%',
	fontSize: '1.4rem',
	borderCollapse: 'collapse',
	borderRadius: '0.4rem',
	overflow: 'hidden',
});

export const Thead = style({
	fontWeight: 500,
	background: '#eee',
	height: '3.2rem',
});

export const TbodyRow = style({
	borderBottom: '1px solid #eee',
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
