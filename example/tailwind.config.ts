import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			black: '#333333',
			white: '#ffffff',
			'grey-dark': '#444444',
			'grey-light': '#eeeeee',
			skyBlue: '#21B2E4',
		},
		fontSize: {
			sm: ['1.2rem', { lineHeight: '133%' }],
			base: ['1.4rem', { lineHeight: '142%' }],
			lg: ['1.6rem', { lineHeight: '168%' }],
			xl: ['2rem', { lineHeight: '140%' }], // h6
			'2xl': ['2.2rem', { lineHeight: '145%' }], // h5
			'3xl': ['2.6rem', { lineHeight: '123%' }], // h4
			'4xl': ['2.8rem', { lineHeight: '142%' }], // h3
			'5xl': ['4rem', { lineHeight: '140%' }], // h2
			'6xl': ['5.6rem', { lineHeight: '128%' }], // h1
		},

		extend: {
			spacing: {
				'10': '1rem',
				'20': '2rem',
				'30': '3rem',
				'40': '4rem',
				'50': '5rem',
				'60': '6rem',
				'70': '7rem',
				'80': '8rem',
				'90': '9rem',
				'100': '10rem',
				'110': '11rem',
				'120': '12rem',
				'130': '13rem',
				'140': '14rem',
				'150': '15rem',
				'160': '16rem',
			},
		},
	},
	plugins: [],
};
export default config;
