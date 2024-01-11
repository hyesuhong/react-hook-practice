import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};

export default withVanillaExtract(nextConfig);
