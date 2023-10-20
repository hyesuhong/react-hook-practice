import { CSSProperties } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	oneDark,
	oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { systemTheme, theme, useTheme } from '../../contexts/ThemeContext';
import * as S from '../../styles/code.css';
import IcoCopy from '../../assets/ico-copy.svg?react';

interface codeBlock {
	code: string;
	copyable?: boolean;
}

type getSyntaxStyle = (theme: theme) => { [key: string]: CSSProperties };
const getSyntaxStyle: getSyntaxStyle = (theme: theme) => {
	switch (theme) {
		case 'system':
			return getSyntaxStyle(systemTheme);
		default:
			return theme === 'light' ? oneLight : oneDark;
	}
};

const CodeBlock = ({ code, copyable = true }: codeBlock) => {
	const theme = useTheme();

	const onClick = () => {
		const regex = /(~{3}[a-z]*)/gi;
		const onlyCode = code.replace(regex, '');

		navigator.clipboard
			.writeText(onlyCode)
			.then(() => {
				//
			})
			.catch((err) => {
				console.error(err);
			});
	};

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

			{copyable && (
				<button className={S.CopyBtn} onClick={onClick}>
					<IcoCopy className={S.CopyIcon} />
				</button>
			)}
		</>
	);
};

export default CodeBlock;
