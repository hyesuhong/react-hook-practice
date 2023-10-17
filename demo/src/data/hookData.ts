interface data {
	[key: string]: {
		installCode: string;
		sandboxId: string;
		returns?: {
			headers: {
				name: string;
				type?: 'string' | 'number' | 'boolean';
				align?: 'left' | 'center' | 'right';
			}[];
			data: { [key: string]: string | boolean }[];
		};
		parameters?: {
			headers: {
				name: string;
				type?: 'string' | 'number' | 'boolean';
				align?: 'left' | 'center' | 'right';
			}[];
			data: { [key: string]: string | boolean }[];
		};
	};
}

export const hookData: data = {
	useCoords: {
		installCode: '~~~shell\nnpm i @su-hooks/use-coords\n~~~',
		sandboxId: 'usecoords-ex-psy5d9',
		returns: {
			headers: [
				{ name: 'name' },
				{ name: 'type' },
				{ name: 'default' },
				{ name: 'description' },
			],
			data: [
				{
					name: 'loading',
					type: 'Boolean',
					default: 'false',
					description: 'A boolean representing if the Geolocation API loading.',
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
					description: `An object representing error code and error message. If you want the error code's meaning, get information from 
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError'
					target='_blank'
				>
					here
				</a>.`,
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
	useIntersection: {
		installCode: '~~~shell\nnpm i @su-hooks/use-intersection\n~~~',
		sandboxId: '',
		parameters: {
			headers: [
				{ name: 'name' },
				{ name: 'type' },
				{ name: 'required', type: 'boolean', align: 'center' },

				{ name: 'default' },
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
		returns: {
			headers: [{ name: 'name' }, { name: 'type' }, { name: 'description' }],
			data: [
				{
					name: 'ref',
					type: 'RefObject',
					description: `Intersection Observer's target`,
				},
			],
		},
	},
	useForm: {
		installCode: '~~~shell\nnpm i @su-hooks/use-form\n~~~',
		sandboxId: 'useform-ex-p6v9fw',
		parameters: {
			headers: [
				{ name: 'name' },
				{ name: 'type' },
				{ name: 'required', type: 'boolean', align: 'center' },
				{ name: 'default' },
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
		returns: {
			headers: [{ name: 'name' }, { name: 'type' }, { name: 'description' }],
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
};
