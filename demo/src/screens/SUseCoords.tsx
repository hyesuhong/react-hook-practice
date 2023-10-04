import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
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

const SUseCoords = () => {
	return (
		<>
			<p className={S.MainPara}>
				Get user's current location information, such as longitude, by using the
				Geolocation API
			</p>

			<h3 className={S.SubTitle}>Installation</h3>
			<div className={S.CodeBox}>
				<Markdown
					components={{
						code(props) {
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
					{installCode}
				</Markdown>
			</div>

			<h3 className={S.SubTitle}>Return Values</h3>

			<table className={S.Table}>
				<thead>
					<tr className={S.Thead}>
						<th>Name</th>
						<th>Type</th>
						<th>Default</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr className={S.TbodyRow}>
						<td className={S.TbodyData}>loading</td>
						<td className={S.TbodyData}>Boolean</td>
						<td className={S.TbodyData}>false</td>
						<td className={S.TbodyData}>
							A boolean representing if the Geolocation API loading.
						</td>
					</tr>
					<tr className={S.TbodyRow}>
						<td className={S.TbodyData}>coords</td>
						<td className={S.TbodyData}>Object</td>
						<td className={S.TbodyData}>null</td>
						<td className={S.TbodyData}>
							This has latitude and longitude information.
						</td>
					</tr>
					<tr className={S.TbodyRow}>
						<td className={S.TbodyData}>error</td>
						<td className={S.TbodyData}>Object</td>
						<td className={S.TbodyData}>null</td>
						<td className={S.TbodyData}>
							An object representing error code and error message. If you want
							the error code's meaning, get information from{' '}
							<a
								href='https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError'
								target='_blank'
							>
								here
							</a>
							.
						</td>
					</tr>
					<tr className={S.TbodyRow}>
						<td className={S.TbodyData}>getPosition</td>
						<td className={S.TbodyData}>Function</td>
						<td className={S.TbodyData}>null</td>
						<td className={S.TbodyData}>
							Function wrapped around the Geolocation API's getCurrentPosition
							function logic.
						</td>
					</tr>
				</tbody>
			</table>

			<h3 className={S.SubTitle}>Example</h3>
			<div className={S.CodeBox}>
				<Markdown
					children={exampleCode}
					components={{
						code(props) {
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
				/>

				{/* </Markdown> */}
			</div>
		</>
	);
};

export default SUseCoords;
