import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h2: ({ children }) => (
			<h2 className='text-5xl font-medium mb-40'>{children}</h2>
		),
		h3: ({ children }) => (
			<h3 className='text-4xl font-medium mt-20 mb-10'>{children}</h3>
		),
	};
}
