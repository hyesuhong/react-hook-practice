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

export const Section = style({
	maxWidth: '80rem',
	margin: '2rem 0',
});

export const SubTitle = style({
	fontSize: '1.8rem',
	fontWeight: 500,
	marginBottom: '1rem',
});

export const CodeBox = style({
	position: 'relative',
	fontSize: '1.4rem',
	borderRadius: '0.4rem',
	overflow: 'hidden',
});

export const CopyBtn = style({
	position: 'absolute',
	top: '1.8rem',
	right: '1rem',
	width: '3rem',
	height: '3rem',

	background: 'transparent',
	border: 'none',

	selectors: {
		[`${CodeBox} > &`]: {
			opacity: 0,
			visibility: 'hidden',

			transition: 'all 0.2s',
		},
		[`${CodeBox}:hover > &`]: {
			visibility: 'visible',
			opacity: 0.5,
		},
		[`${CodeBox} > &:hover`]: {
			opacity: 1,
		},
	},
});

export const CopyIcon = style({
	width: '80%',
	height: '80%',

	selectors: {
		[`${CopyBtn} > &`]: {
			fill: '#333',
		},
	},
});
