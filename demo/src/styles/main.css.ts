import { style } from '@vanilla-extract/css';

export const Wrapper = style({
	padding: '1rem 1rem 4rem',
});

export const MainTitle = style({
	fontSize: '2rem',
	fontWeight: '500',
	marginBottom: '4rem',
});

export const MainPara = style({
	fontSize: '1.4rem',
});

export const SubTitle = style({
	fontSize: '1.8rem',
	fontWeight: 500,
	margin: '2rem 0 1rem',
});

export const CodeBox = style({
	maxWidth: '80rem',
	fontSize: '1.4rem',
	borderRadius: '0.4rem',
	overflow: 'hidden',
});

export const Table = style({
	width: '100%',
	maxWidth: '80rem',
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
			padding: '0.5rem',
		},
	},
});
