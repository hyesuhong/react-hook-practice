---
title: useForm
slug: use-form
---

### Installation

```shell
npm i @su-hooks/use-form
```

### Parameters

| Name          | Type       | Required | Default |
| ------------- | ---------- | -------- | ------- |
| inputs        | inputProps | ○        | null    |
| submitHandler | Function   | ✕        | null    |

### Returns

| Name         | Type        | Description                            |
| ------------ | ----------- | -------------------------------------- |
| form         | Object      | input's information(value, validation) |
| handleChange | ChangeEvent | input change event                     |
| handleSubmit | SubmitEvent | form submit event                      |
| isFormValid  | Boolean     | form validation                        |

### Preview

```tsx
import useForm, { inputProps } from '@su-hooks/use-form';

const initialValue = '';

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
		console.log('submit!');
	};

	const { form, handleChange, handleSubmit, isFormValid } = useForm({
		inputs,
		submitHandler,
	});

	return (
		<div className='App'>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					value={form.email.value}
					onChange={handleChange}
					placeholder='Email'
					required
				/>
				{form.email.value && !form.email.isValid && <p>Email must contain @</p>}
				<input
					type='password'
					name='password'
					value={form.password.value}
					onChange={handleChange}
					placeholder='Password'
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
```
