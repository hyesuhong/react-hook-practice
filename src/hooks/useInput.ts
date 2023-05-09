import { useState } from 'react';

export type ValidatorFn = (value: string) => boolean;

type UseInput = (initialValue: string, validator?: ValidatorFn) => {};

export const useInput: UseInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = ev;

		let willUpdate = true;

		if (validator) {
			willUpdate = validator(value);
		}

		if (!willUpdate) return;
		setValue(value);
	};
	return { value, onChange };
};
