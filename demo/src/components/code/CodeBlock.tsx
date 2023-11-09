import { useCallback } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	oneDark,
	oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { theme, useTheme } from '../../contexts/ThemeContext';
import CopyBtn from './CopyBtn';

interface codeBlock {
	code: string;
	copyable?: boolean;
}

const CodeBlock = ({ code, copyable = true }: codeBlock) => {
	const { theme, system } = useTheme();

	const getSyntaxStyle = useCallback(
		(theme: theme) => {
			switch (theme) {
				case 'system':
					return getSyntaxStyle(system);
				default:
					return theme === 'light' ? oneLight : oneDark;
			}
		},
		[theme]
	);

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
								style={getSyntaxStyle(theme)}
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

			{copyable && <CopyBtn code={code} />}
		</>
	);
};

export default CodeBlock;
