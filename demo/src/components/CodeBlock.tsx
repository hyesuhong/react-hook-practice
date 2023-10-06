import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface codeBlock {
	code: string;
}

const CodeBlock = ({ code }: codeBlock) => {
	return (
		<>
			<Markdown
				components={{
					code: (props) => {
						const { children, className, node, ...rest } = props;
						const match = /language-(\w+)/.exec(className || '');
						return match ? (
							<SyntaxHighlighter
								children={String(children).replace(/\n$/, '')}
								style={oneDark}
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
				{code}
			</Markdown>
		</>
	);
};

export default CodeBlock;
