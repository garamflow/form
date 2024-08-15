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
			className={`bg-slate-400 w-80 px-4 py-2 rounded-2xl transition disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed ${className} `}
			disabled={pending}
		>
			<span className={`${pending ? "loading loading-spinner" : ""}`}></span>
			{pending ? "Loading..." : text}
		</button>
	);
};

export default Button;
