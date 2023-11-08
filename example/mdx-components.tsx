import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h2: ({ children }) => (
			<h2 className='text-[2rem] font-medium mb-[4rem]'>{children}</h2>
		),
		h3: ({ children }) => (
			<h3 className='text-[1.8rem] font-medium mt-[2rem] mb-[1rem]'>
				{children}
			</h3>
		),
	};
}
