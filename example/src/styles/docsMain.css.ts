import { style } from '@vanilla-extract/css';
import { P } from './text.css';
import { themeVars } from './theme.css';

export const DocsLayout = style({
	display: 'grid',
	gridTemplateColumns: 'max-content 1fr',
	gridTemplateRows: 'minmax(100vh,max-content)',
});

export const Wrapper = style([
	{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '2rem 2rem 4rem',
	},
	P,
]);

export const MainTitle = style({
	marginBottom: '4rem',
	textAlign: 'center',
});

export const MainPara = style({
	textAlign: 'center',
});

export const Section = style({
	marginTop: '6rem',
	width: '100%',
	maxWidth: '100rem',
});

export const SubTitle = style({
	fontSize: '1.8rem',
	fontWeight: 500,
	marginBottom: '1rem',
	textTransform: 'capitalize',
});

export const ContentWrapper = style({
	margin: '2rem 0 4rem',
});

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
	textTransform: 'capitalize',
	transition: 'background 0.3s',
});

export const TheadData = style({
	position: 'relative',
	height: '3.2rem',
	padding: '0 1rem',
	selectors: {
		'&:not(:last-child)::after': {
			content: '',
			position: 'absolute',
			top: '50%',
			right: 0,
			translate: '0 -50%',
			height: '70%',
			width: 1,
			background: themeVars.color.text,
			opacity: 0.3,
		},
	},
});

export const Tbody = style({
	padding: '0.5rem 1rem',
});

export const TbodyRow = style({
	selectors: {
		[`${Tbody} &`]: { borderBottom: `1px solid ${themeVars.color.grey}` },
		[`${Tbody} &:last-child`]: {
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
