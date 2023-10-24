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
		preview: { type: 'preview', content: 'usecoords-ex-psy5d9' },
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
		preview: { type: 'preview', content: 'fervent-yalow-dk355m' },
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
		preview: { type: 'preview', content: 'useform-ex-p6v9fw' },
	},
};
