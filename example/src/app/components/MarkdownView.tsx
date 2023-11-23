'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
	content: string;
}

const MarkdownView = ({ content }: Props) => {
	return (
		<>
			<Markdown
				remarkPlugins={[remarkGfm]}
				components={{
					code: ({ children, className, node, ...rest }) => {
						const match = /language-(\w+)/.exec(className || '');
						return match ? (
							<SyntaxHighlighter
								children={String(children).replace(/\n$/, '')}
								style={oneLight}
								language={match[1]}
								PreTag='div'
							/>
						) : (
							<code {...rest} className={className}>
								{children}
							</code>
						);
					},
				}}
			>
				{content}
			</Markdown>
		</>
	);
};

export default MarkdownView;
