import { style } from '@vanilla-extract/css';

export const Table = style({
	width: '100%',
	fontSize: '1.4rem',
	borderRadius: '0.4rem',
	overflow: 'hidden',
});

export const Thead = style({
	display: 'flex',
	fontWeight: 500,
	background: '#eee',
	height: '3.2rem',
});

export const TheadData = style({
	flex: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const Tbody = style({});

export const TbodyRow = style({
	display: 'flex',
	minHeight: '3.2rem',
	borderBottom: '1px solid #eee',
	selectors: {
		'&:last-child': {
			borderBottom: 'none',
		},
	},
});

export const TbodyData = style({
	flex: 1,

	display: 'flex',
	justifyContent: 'start',
	alignItems: 'center',

	selectors: {
		[`${TbodyRow} > &`]: {
			padding: '0.5rem',
		},
		['&[data-align="center"]']: {
			justifyContent: 'center',
		},
		['&[data-align="right"]']: {
			justifyContent: 'end',
		},
	},
});
