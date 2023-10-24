import { useLoaderData, useParams } from 'react-router-dom';
import * as S from '../styles/main.css';
import Section from '../components/Section';
import CodeBlock from '../components/code/CodeBlock';
import Table from '../components/table/Table';
import { section } from '../data/hookData';
import ExampleSandbox from '../layouts/ExampleSandbox';
import { Fragment } from 'react';

const Docs = () => {
	const { hooks } = useParams();
	const data = useLoaderData() as section;
	const keys = Object.keys(data);

	return (
		<>
			<h2 className={S.MainTitle}>{hooks}</h2>

			{keys.map((key, index) => {
				const { type, content } = data[key];

				return (
					<Fragment key={index}>
						{type === 'preview' ? (
							<ExampleSandbox id={content.toString()} />
						) : (
							<Section title={key}>
								{type === 'code'
									? typeof content === 'string' && <CodeBlock code={content} />
									: type === 'table'
									? typeof content !== 'string' && <Table {...content} />
									: typeof content === 'string' && <p>{content}</p>}
							</Section>
						)}
					</Fragment>
				);
			})}
		</>
	);
};

export default Docs;
