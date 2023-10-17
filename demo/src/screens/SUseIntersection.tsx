import CodeBlock from '../components/CodeBlock';
import Table from '../components/Table';
import { hookData } from '../data/hookData';
import * as S from '../styles/main.css';

const {
	useIntersection: { installCode, parameters, returns },
} = hookData;

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
				<Table data={parameters} />
			</section>

			<section className={S.Section}>
				<h3 className={S.SubTitle}>Returns</h3>
				<Table data={returns} />
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
