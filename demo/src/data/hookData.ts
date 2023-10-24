type tableHeader = {
	name: string;
	type?: 'string' | 'number' | 'boolean';
	align?: 'left' | 'center' | 'right';
	size?: number;
};
type tableData = { [key: string]: string | boolean };
type table = {
	headers: tableHeader[];
	data: tableData[];
};

type dataType = 'text' | 'table' | 'code' | 'preview';
export type section = {
	[key: string]: {
		type: dataType;
		content: string | table;
	};
};

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
		// preview: { type: 'preview', content: 'usecoords-ex-psy5d9' },
		example: {
			type: 'code',
			content: `~~~tsx
	import useCoords from "@su-hooks/use-coords";

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
	}
	~~~`,
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
		// preview: { type: 'preview', content: 'fervent-yalow-dk355m' },
		example: {
			type: 'code',
			content: `~~~tsx
		import useCoords from "@su-hooks/use-coords";

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
		}
		~~~`,
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
		// preview: { type: 'preview', content: 'useform-ex-p6v9fw' },
		example: {
			type: 'code',
			content: `~~~tsx
		import useForm, { inputProps } from "@su-hooks/use-form";

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
		}
		~~~`,
		},
	},
};
