import { style } from '@vanilla-extract/css';

export const Wrapper = style({
	padding: '1rem 1rem 4rem',
	fontSize: '1.4rem',
});

export const MainTitle = style({
	fontSize: '2rem',
	fontWeight: '500',
	marginBottom: '4rem',
});

export const MainPara = style({
	// fontSize: '1.4rem',
});

export const Section = style({
	maxWidth: '80rem',
	margin: '2rem 0',
});

export const SubTitle = style({
	fontSize: '1.8rem',
	fontWeight: 500,
	marginBottom: '1rem',
	textTransform: 'capitalize',
});

export const ContentWrapper = style({
	position: 'relative',
	borderRadius: '0.4rem',
	overflow: 'hidden',
});
