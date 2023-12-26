import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MdContentWrapper from './MdContentWrapper';
import CopyBtn from './CopyBtn';

interface Props {
	children: React.ReactNode;
	className?: string;
	copyable?: boolean;
}

const CodeBlock = ({ children, className, copyable = true }: Props) => {
	const match = /language-(\w+)/.exec(className || '');

	return (
		<MdContentWrapper className='relative'>
			{match ? (
				<SyntaxHighlighter
					children={String(children).replace(/\n$/, '')}
					style={oneLight}
					language={match[1]}
					PreTag='div'
				/>
			) : (
				<code className={className}>{children}</code>
			)}
			{copyable && <CopyBtn code={children ? children.toString() : ''} />}
		</MdContentWrapper>
	);
};

export default CodeBlock;
