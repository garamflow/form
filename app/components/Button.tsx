"use client";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
	text: string;
	className?: string;
}

const Button = ({ text, className }: FormButtonProps) => {
	const { pending } = useFormStatus();

	return (
		<button
			className={`bg-slate-700 w-80 px-4 py-2 rounded-2xl ${className} `}
			disabled={pending}
		>
			<span className={`${pending ? "loading loading-spinner" : ""}`}></span>
			{pending ? "로딩중" : text}
		</button>
	);
};

export default Button;
