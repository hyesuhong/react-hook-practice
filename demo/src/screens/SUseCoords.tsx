import CodeBlock from '../components/CodeBlock';
import CodePreview from '../components/CodePreview';
import Table from '../components/Table';
import useSandboxFile from '../hooks/useSandboxFile';
import * as S from '../styles/main.css';

const installCode = `~~~shell
npm i @su-hooks/use-coords
~~~`;

const exampleCode = `~~~tsx
import React from "react";
import useCoords from "@su-hooks/use-coords";

function App() {
	const {coords, loading, error, getPosition} = useCoords();

	return (<div>
		<button onClick={getPosition}>Click Me!</button>
		<p>
			{loading ? 'loading...' : 'done!'}
		</p>
		{coords && (
			<p>lat: {coords.latitude}</p>
			<p>lon: {coords.longitude}</p>
		)}
		{error && (
			<p>error code: {error.code}</p>
			<p>error message: {error.message}</p>
		)}
	</div>)
}
~~~
`;

const sandboxId = 'usecoords-ex-psy5d9';

const returnData = [
	{
		Name: 'loading',
		Type: 'Boolean',
		Default: 'false',
		Description: 'A boolean representing if the Geolocation API loading.',
	},
	{
		Name: 'coords',
		Type: 'Object',
		Default: 'null',
		Description: 'This has latitude and longitude information.',
	},
	{
		Name: 'error',
		Type: 'Object',
		Default: 'null',
		Description: `An object representing error code and error message. If you want the error code's meaning, get information from 
		<a
			href='https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError'
			target='_blank'
		>
			here
		</a>.`,
	},
	{
		Name: 'getPosition',
		Type: 'Function',
		Default: 'null',
		Description: `Function wrapped around the Geolocation API's getCurrentPosition function logic.`,
	},
];

const SUseCoords = () => {
	const files = useSandboxFile(sandboxId);

	return (
		<>
			<p className={S.MainPara}>
				Get user's current location information, such as longitude, by using the
				Geolocation API
			</p>

			<h3 className={S.SubTitle}>Installation</h3>
			<div className={S.CodeBox}>
				<CodeBlock code={installCode} />
			</div>

			<h3 className={S.SubTitle}>Return Values</h3>
			<Table data={returnData} />

			<h3 className={S.SubTitle}>Preview</h3>
			<div className={S.CodeBox}>
				{files.files && <CodePreview files={files.files} />}
			</div>

			<h3 className={S.SubTitle}>Example</h3>
			<div className={S.CodeBox}>
				<CodeBlock code={exampleCode} />
			</div>
		</>
	);
};

export default SUseCoords;
