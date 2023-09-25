export type validator = (value: string) => boolean;
export interface inputProps {
    [key: string]: {
        value: string;
        validator?: validator;
    };
}
interface UseForm {
    inputs: inputProps;
    submitHandler: () => void;
}
interface inputReturns {
    [key: string]: {
        value: string;
        isValid?: boolean;
    };
}
export declare const useForm: ({ inputs, submitHandler }: UseForm) => {
    form: inputReturns;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    isFormValid: boolean;
};
export {};
