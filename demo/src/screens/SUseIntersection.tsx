import CodeBlock from '../components/CodeBlock';
import Table from '../components/Table';
import * as S from '../styles/main.css';

const installCode = `~~~shell
npm i @su-hooks/use-intersection
~~~`;

const exampleCode = `~~~tsx
import react from 'react';
import useIntersection from '@su-hooks/use-intersection';

function App() {
	const callbackIntersection = (entries, observer) => {
		// something...
	};
	const ref = useIntersection<HTMLDivElement>({
		callbackIntersection,
		rootMargin: ['-50%', 0],
		thresholds: [0, 1],
	});

	return <div ref={ref}>this is target element</div>;
}
~~~
`;

const parameterData = [
	{
		Name: 'root',
		Type: 'HTMLElement',
		Required: '✕',
		Default: `browser's viewport`,
	},
	{
		Name: 'rootMargin',
		Type: `&lt;string | number&gt;[]`,
		Required: '✕',
		Default: '0',
	},
	{
		Name: 'thresholds',
		Type: 'number | number[]',
		Required: '✕',
		Default: '0',
	},
	{
		Name: 'handleIntersection',
		Type: 'Function',
		Required: '○',
		Default: 'null',
	},
];

const returnData = [
	{
		Name: 'ref',
		Type: 'RefObject',
		Description: `Intersection Observer's target`,
	},
];

const SUseIntersection = () => {
	return (
		<>
			<p className={S.MainPara}>React Hook to use Intersection Observer API</p>

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Installation</h3>
				<div className={S.CodeBox}>
					<CodeBlock code={installCode} />
				</div>
			</section>

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Parameters</h3>
				<Table data={parameterData} />
			</section>

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Returns</h3>
				<Table data={returnData} />
			</section>

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Example</h3>
				<div className={S.CodeBox}>
					<CodeBlock code={exampleCode} />
				</div>
			</section>
		</>
	);
};

export default SUseIntersection;
