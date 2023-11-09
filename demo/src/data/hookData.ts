import { SandpackFiles } from '@codesandbox/sandpack-react';

type tableHeader = {
	name: string;
	type?: 'string' | 'number' | 'boolean';
	align?: 'left' | 'center' | 'right';
	size?: number;
};
type tableData = { [key: string]: string | boolean };
export type table = {
	headers: tableHeader[];
	data: tableData[];
};

type dataType =
	| { type: 'text'; content: string }
	| { type: 'code'; content: string }
	| { type: 'table'; content: table }
	| { type: 'preview'; content: SandpackFiles };

export type section = { [key: string]: dataType };

interface data {
	[key: string]: section;
}

export const hookData: data = {
	useCoords: {
		installation: {
			type: 'code',
			content: '~~~shell\nnpm i @su-hooks/use-coords\n~~~',
		},
		returns: {
			type: 'table',
			content: {
				headers: [
					{ name: 'name' },
					{ name: 'type' },
					{ name: 'default' },
					{ name: 'description', size: 3 },
				],
				data: [
					{
						name: 'loading',
						type: 'Boolean',
						default: 'false',
						description:
							'A boolean representing if the Geolocation API loading.',
					},
					{
						name: 'coords',
						type: 'Object',
						default: 'null',
						description: 'This has latitude and longitude information.',
					},
					{
						name: 'error',
						type: 'Object',
						default: 'null',
						description: `An object representing error code and error message. If you want the error code's meaning, get information from <a href='https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError' target='_blank'>here</a>.`,
					},
					{
						name: 'getPosition',
						type: 'Function',
						default: 'null',
						description: `Function wrapped around the Geolocation API's getCurrentPosition function logic.`,
					},
				],
			},
		},
		preview: {
			type: 'preview',
			content: {
				'/App.tsx': `import useCoords from "@su-hooks/use-coords";
import './style.css';

export default function App() {
	const { coords, loading, error, getPosition } = useCoords();

	return (
		<div className="App">
			<button onClick={getPosition}>Click Me!</button>
			{error ? (
				<>
					<p>error code: {error.code}</p>
					<p>error message: {error.message}</p>
				</>
			) : (
				<>
					<p>
						{loading ? "loading..." : coords ? "done!" : "click button first"}
					</p>
					{coords && (
						<>
							<p>lat: {coords.latitude}</p>
							<p>lon: {coords.longitude}</p>
						</>
					)}
				</>
			)}
		</div>
	);
}`,
				'/style.css': `.App {
  height: 100vh;
  padding: 4vw 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: sans-serif;
  font-size: 14px;
}

.App > button {
  background: transparent;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 10px 8px;
  box-sizing: border-box;
}`,
			},
		},
	},
	useIntersection: {
		installation: {
			type: 'code',
			content: '~~~shell\nnpm i @su-hooks/use-intersection\n~~~',
		},
		parameters: {
			type: 'table',
			content: {
				headers: [
					{ name: 'name' },
					{ name: 'type' },
					{ name: 'required', type: 'boolean', align: 'center' },

					{ name: 'default', size: 2 },
				],
				data: [
					{
						name: 'root',
						type: 'HTMLElement',
						required: false,
						default: `browser's viewport`,
					},
					{
						name: 'rootMargin',
						type: `&lt;string | number&gt;[]`,
						required: false,
						default: '0',
					},
					{
						name: 'thresholds',
						type: 'number | number[]',
						required: false,
						default: '0',
					},
					{
						name: 'handleIntersection',
						type: 'Function',
						required: true,
						default: 'null',
					},
				],
			},
		},
		returns: {
			type: 'table',
			content: {
				headers: [
					{ name: 'name' },
					{ name: 'type' },
					{ name: 'description', size: 2 },
				],
				data: [
					{
						name: 'ref',
						type: 'RefObject',
						description: `Intersection Observer's target`,
					},
				],
			},
		},
		preview: {
			type: 'preview',
			content: {
				'/App.tsx': `import useIntersection from "@su-hooks/use-intersection";
import "./styles.css";

export default function App() {
	const ref = useIntersection<HTMLDivElement>({
		callbackIntersection: (entries) => {
			entries.forEach((entry) => {
				let box = entry.target;
				let visiblePct = \`\$\{Math.floor(entry.intersectionRatio * 100)}%\`;

				box.querySelector(".topLeft").innerHTML = visiblePct;
				box.querySelector(".topRight").innerHTML = visiblePct;
				box.querySelector(".bottomLeft").innerHTML = visiblePct;
				box.querySelector(".bottomRight").innerHTML = visiblePct;
			});
		},
		thresholds: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	});

	return (
		<div className="App">
			<h1>Scroll...</h1>
			<div className="sample" ref={ref}>
				<p className="label topLeft"></p>
				<p className="label topRight"></p>
				<p className="label bottomLeft"></p>
				<p className="label bottomRight"></p>
			</div>
		</div>
	);
}`,
				'/styles.css': `html,
body {
  width: 100%;
  min-height: 100vh;
}

.App {
  font-family: sans-serif;
  text-align: center;

  height: 200vh;
  padding: 120vh 0;
}

.App > h1 {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.sample {
  position: relative;
  width: 150px;
  height: 300px;
  background: #fec092;
  border: 2px solid #ff9446;
  margin: 0 auto;
}

.label {
  --margin: 2px;
  position: absolute;

  width: 3em;
  height: 18px;
  margin: 0;

  font-size: 14px;

  background: #edebda;
  border: 1px solid #333;
}

.topLeft {
  top: var(--margin, 2px);
  left: var(--margin, 2px);
}
.topRight {
  top: var(--margin, 2px);
  right: var(--margin, 2px);
}
.bottomLeft {
  bottom: var(--margin, 2px);
  left: var(--margin, 2px);
}
.bottomRight {
  bottom: var(--margin, 2px);
  right: var(--margin, 2px);
}
`,
			},
		},
	},
	useForm: {
		installation: {
			type: 'code',
			content: '~~~shell\nnpm i @su-hooks/use-form\n~~~',
		},
		parameters: {
			type: 'table',
			content: {
				headers: [
					{ name: 'name' },
					{ name: 'type' },
					{ name: 'required', type: 'boolean', align: 'center' },
					{ name: 'default', align: 'center' },
				],
				data: [
					{
						name: 'inputs',
						type: 'inputProps',
						required: true,
						default: 'null',
					},
					{
						name: 'submitHandler',
						type: 'Function',
						required: false,
						default: 'null',
					},
				],
			},
		},
		returns: {
			type: 'table',
			content: {
				headers: [
					{ name: 'name' },
					{ name: 'type' },
					{ name: 'description', size: 2 },
				],
				data: [
					{
						name: 'form',
						type: 'Object',
						description: `input's information(value, validation)`,
					},
					{
						name: 'handleChange',
						type: 'ChangeEvent',
						description: `input change event`,
					},
					{
						name: 'handleSubmit',
						type: 'SubmitEvent',
						description: `form submit event`,
					},
					{
						name: 'isFormValid',
						type: 'Boolean',
						description: `form validation`,
					},
				],
			},
		},
		preview: {
			type: 'preview',
			content: {
				'/App.tsx': `import useForm, { inputProps } from "@su-hooks/use-form";

const initialValue = "";

export default function App() {
	const inputs: inputProps = {
		email: {
			value: initialValue,
			validator: (value) => value.indexOf("@") > -1
		},
		password: { value: initialValue, validator: (value) => value.length > 7 }
	};

	const submitHandler = () => {
		// do something...
		console.log("submit!");
	};

	const { form, handleChange, handleSubmit, isFormValid } = useForm({
		inputs,
		submitHandler
	});

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					value={form.email.value}
					onChange={handleChange}
					placeholder="Email"
					required
				/>
				{form.email.value && !form.email.isValid && <p>Email must contain @</p>}
				<input
					type="password"
					name="password"
					value={form.password.value}
					onChange={handleChange}
					placeholder="Password"
					required
				/>
				{form.password.value && !form.password.isValid && (
					<p>Password must be at least 8 characters long</p>
				)}
				<button disabled={!isFormValid}>Submit</button>
			</form>
		</div>
	);
}`,
				'/styles.css': `:root {
  --black: #333;
  --grey: #eee;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: var(--grey);
  color: bar(--black);
}

.App {
  font-family: sans-serif;
  text-align: center;
  height: 100vh;
}

.App form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 50%;
  max-width: 300px;
  margin: 0 auto;

  padding: 4vw 0;
  box-sizing: border-box;
}

.App input {
  height: 40px;
  background: transparent;
  border: 1px solid #999;
  outline: none;
  font-size: 14px;
}

.App input:focus {
  border-color: darkturquoise;
}

.App button {
  height: 40px;
  margin-top: 20px;

  background: transparent;
  border: 1px solid darkturquoise;
  color: darkturquoise;
}

.App button:disabled {
  border-color: #ccc;
  color: #ccc;
}

.App p {
  font-size: 14px;
  align-self: flex-start;
  margin: 0 0 10px;
  color: tomato;
}
`,
			},
		},
	},
};
