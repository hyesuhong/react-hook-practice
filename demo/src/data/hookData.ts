export const hookData = {
	useCoords: {
		installCode: '~~~shell\nnpm i @su-hooks/use-coords\n~~~',
		sandboxId: 'usecoords-ex-psy5d9',
		returns: [
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
		],
	},
	useIntersection: {
		installCode: '~~~shell\nnpm i @su-hooks/use-intersection\n~~~',
		parameters: [
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
		],
		returns: [
			{
				Name: 'ref',
				Type: 'RefObject',
				Description: `Intersection Observer's target`,
			},
		],
	},
	useForm: {
		installCode: '~~~shell\nnpm i @su-hooks/use-form\n~~~',
		sandboxId: 'useform-ex-p6v9fw',
		parameters: [
			{
				Name: 'inputs',
				Type: 'inputProps',
				Required: '○',
				Default: 'null',
			},
			{
				Name: 'submitHandler',
				Type: 'Function',
				Required: '✕',
				Default: 'null',
			},
		],
		returns: [
			{
				Name: 'form',
				Type: 'Object',
				Description: `input's information(value, validation)`,
			},
			{
				Name: 'handleChange',
				Type: 'ChangeEvent',
				Description: `input change event`,
			},
			{
				Name: 'handleSubmit',
				Type: 'SubmitEvent',
				Description: `form submit event`,
			},
			{
				Name: 'isFormValid',
				Type: 'Boolean',
				Description: `form validation`,
			},
		],
	},
};
