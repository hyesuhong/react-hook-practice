import { style } from '@vanilla-extract/css';

export const sideBarWrapper = style({
	padding: '1rem 0',
	position: 'sticky',
	top: 0,
	height: '100vh',
	borderRight: '1px solid #eee',
});

export const sideBarTitle = style({
	fontSize: '2.4rem',
	fontWeight: '700',
	marginBottom: '3rem',
	padding: '0 1rem',
	textTransform: 'capitalize',
});

export const sideBarList = style({
	position: 'relative',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 1rem',
	fontSize: '1.4rem',
	height: '4rem',
	cursor: 'pointer',

	selectors: {
		'&::before': {
			content: '',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: '#eee',
			opacity: 0,
			transition: 'opacity 0.3s',
			zIndex: -1,
		},
		'&:hover::before': {
			opacity: 0.5,
		},
		'&.selected::before': {
			opacity: 1,
		},
		'&.selected::after': {
			content: '',
			flex: '0 0 0.6rem',
			height: '0.6rem',
			borderTop: '2px solid #333',
			borderRight: '2px solid #333',
			transform: 'rotate(45deg)',
		},
	},
});
