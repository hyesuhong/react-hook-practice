'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Text from './basic/Text';

interface Props {
	content: string;
}

const MarkdownView = ({ content }: Props) => {
	return (
		<>
			<Markdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
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
					h1: ({ children }) => {
						return <Text type='h1'>{children}</Text>;
					},
					h2: ({ children }) => {
						return <Text type='h2'>{children}</Text>;
					},
					h3: ({ children }) => {
						return <Text type='h3'>{children}</Text>;
					},
					h4: ({ children }) => {
						return <Text type='h4'>{children}</Text>;
					},
					h5: ({ children }) => {
						return <Text type='h5'>{children}</Text>;
					},
					h6: ({ children }) => {
						return <Text type='h6'>{children}</Text>;
					},
				}}
			>
				{content}
			</Markdown>
		</>
	);
};

export default MarkdownView;
