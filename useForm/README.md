# @su-hooks/use-form

Custom React hook to use form with **input validator**

<!-- ## Installation -->

## Usage

```ts
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
		<form onSubmit={hancleSubmit}>
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
```

## Properties

| Name          | Type       | Required | Default |
| ------------- | ---------- | :------: | ------- |
| inputs        | inputProps |    ○     | null    |
| submitHandler | () => void |    ✕     | null    |

- inputs

  - `key`: `key` has to be same with input's `name`. If they are different, never change input state.
  - `value`: initial input value.
  - `validator`: validator function is an optional property. If it is null, that input's validation is always `true`.

  ```ts
  type validator = (value: string) => boolean;

  interface inputProps {
  	[key: string]: { value: string; validator?: validator };
  }
  ```

- `submitHandler`: When submit event is fired, this function will be executed.

## Returns

| Name         | Type        | Description                            |
| ------------ | ----------- | -------------------------------------- |
| form         | Object      | input's information(value, validation) |
| handleChange | ChangeEvent | input change event                     |
| handleSubmit | SubmitEvent | form submit event                      |
| isFormValid  | Boolean     | form validation                        |
