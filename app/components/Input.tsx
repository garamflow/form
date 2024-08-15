import { InputHTMLAttributes } from "react";

interface FormInputProps {
	name: string;
	errors?: string[];
}

const FormInput = ({ name, errors = [], ...extraProps }: FormInputProps & InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<div className='w-96 flex flex-col justify-center items-center'>
			<input
				{...extraProps}
				name={name}
				className='w-full max-w-xs ring-2 focus:ring-4 transition rounded-3xl p-2 placeholder:px-6'
			/>
			<label className='text-red-500'>{errors[0]}</label>
		</div>
	);
};

export default FormInput;
