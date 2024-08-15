"use client";
import { login } from "@/app/actions";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useFormState } from "react-dom";

export default function Home() {
	const [state, dispatch] = useFormState(login, null);

	return (
		<div className='flex flex-col justify-center items-center mt-10'>
			<div className='mb-5 text-red-500 '>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-10'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z'
					/>
				</svg>
			</div>
			<div className=''>
				<form
					action=''
					className='flex flex-col justify-center items-center gap-3'
				>
					<Input
						name='email'
						type='email'
						placeholder='Email'
						required
					/>
					<Input
						name='username'
						type='text'
						placeholder='Username'
						required
					/>
					<Input
						name='password'
						type='password'
						placeholder='Password'
						required
					/>
					<Button />
				</form>
			</div>
		</div>
	);
}
