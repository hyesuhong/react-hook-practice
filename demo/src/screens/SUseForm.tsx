import CodeBlock from '../components/CodeBlock';
import Table from '../components/Table';
import * as S from '../styles/main.css';

const installCode = `~~~shell
npm i @su-hooks/use-form
~~~`;

const exampleCode = `~~~tsx
import useForm, { inputProps } from '@su-hooks/use-form';

export default function App() {
	const inputs: inputProps = {
		email: {
			value: initialValue,
			validator: (value) => value.indexOf('@') > -1,
		},
		password: { value: initialValue, validator: (value) => value.length > 7 },
	};

	const submitHandler = () => {
		// do something...
	};

	const { form, handleChange, handleSubmit, isFormValid } = useForm({
		inputs,
		submitHandler,
	});

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='email'
				name='email'
				value={form.email.value}
				onChange={handleChange}
				required
			/>
			<InputField
				type='password'
				name='password'
				value={form.password.value}
				onChange={handleChange}
				required
			/>
			<button disabled={!isFormValid}>Submit</button>
		</form>
	);
}
~~~`;

const parameterData = [
	{
		Name: 'inputs',
		Type: 'inputProps',
		Required: '○',
		Default: 'null',
	},
	{ Name: 'submitHandler', Type: 'Function', Required: '✕', Default: 'null' },
];

const returnData = [
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
];

const SUseForm = () => {
	return (
		<>
			<p className={S.MainPara}>
				Custom React hook to use form with input validator
			</p>

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

export default SUseForm;
