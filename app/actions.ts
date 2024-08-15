import { z } from "zod";

export const PASSWORD_REGEX = new RegExp(/^12345$/);

const formSchema = z.object({
	email: z.string({ invalid_type_error: "이메일 형식이 옳지 않습니다.", required_error: "이메일을 입력해주세요." }).email({ message: "이메일 형식이 옳지 않습니다." }),
	username: z.string().trim(),
	password: z.string({ invalid_type_error: "비밀번호 형식이 옳지 않습니다.", required_error: "비밀번호를 입력해주세요." }).regex(PASSWORD_REGEX, "비밀번호가 틀렸습니다"),
});

export const login = async (prevState: any, formData: FormData) => {
	const data = {
		email: formData.get("email"),
		username: formData.get("username"),
		password: formData.get("password"),
	};

	const result = formSchema.safeParse(data);

	await new Promise((resolve) => setTimeout(resolve, 1500));

	if (!result.success) {
		return { success: false, errors: result.error.flatten() };
	}

	if (data.password === "12345") {
		return { success: true, message: "로그인 성공" };
	}
};
