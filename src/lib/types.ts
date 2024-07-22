import { z } from 'zod'

export const AuthSchema = (type: string) => {
    return z.object({
        username: type === 'signup' ? z.string().min(3, {
            message: "Username must be at least 2 characters.",
        }) : z.string().optional(),
        email: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This is not a valid email."),
        password: z.string().min(2).max(32, "Password must be less than 32 characters")
    })
}