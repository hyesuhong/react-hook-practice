import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	oneLight,
	oneDark,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import MdContentWrapper from './MdContentWrapper';
import CopyBtn from './CopyBtn';
import * as S from '@/styles/code.css';

interface Props {
	children: React.ReactNode;
	className?: string;
	copyable?: boolean;
}

const CodeBlock = ({ children, className, copyable = true }: Props) => {
	const theme = 'dark';
	const match = /language-(\w+)/.exec(className || '');

	return (
		<MdContentWrapper className={S.CodeWrapper}>
			{match ? (
				<SyntaxHighlighter
					style={theme === 'dark' ? oneDark : oneLight}
					language={match[1]}
					PreTag='div'
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			) : (
				<code className={className}>{children}</code>
			)}
			{copyable && <CopyBtn code={children ? children.toString() : ''} />}
		</MdContentWrapper>
	);
};

export default CodeBlock;
