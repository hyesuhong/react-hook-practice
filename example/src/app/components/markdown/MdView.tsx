'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Text from '../basic/Text';
import MdContentWrapper from './MdContentWrapper';
import CodeBlock from './CodeBlock';
import Table from './Table';

interface Props {
	content: string;
}

const MdView = ({ content }: Props) => {
	return (
		<>
			<Markdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
				components={{
					code: ({ children, className }) => {
						return <CodeBlock children={children} className={className} />;
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
					table: ({ children, ...props }) => {
						return (
							<MdContentWrapper>
								<Table>{children}</Table>
							</MdContentWrapper>
						);
					},
					iframe: (props) => {
						return (
							<MdContentWrapper>
								<iframe {...props} />
							</MdContentWrapper>
						);
					},
				}}
			>
				{content}
			</Markdown>
		</>
	);
};

export default MdView;
