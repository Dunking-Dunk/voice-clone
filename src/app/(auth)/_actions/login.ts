"use server"

import { signIn } from "@/auth";
import { getUserByEmail } from "@/lib/actions";
import { AuthSchema } from "@/lib/types";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { z } from "zod";
import { generateVerificationToken } from "./hash";
import { sendVerificationEmail } from "@/lib/mail";

const Schema = AuthSchema('signin')

export const Login = async (values: z.infer<typeof Schema>) => {
    const validateField = Schema.safeParse(values)

    if (!validateField.success) {
        return { error: "Invalid fields! " }
    }

    const { email, password } = validateField.data

    const existingUser = await getUserByEmail(email)

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return {
            error: "Email does not exist"
        }
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email)

        await sendVerificationEmail(verificationToken.email, verificationToken.token)

        return {
            success: "Confirmation email sent"
        }
    }


    try {
        await signIn("credentials", { email, password, redirectTo: DEFAULT_LOGIN_REDIRECT })

    } catch (err) {

        if (err instanceof AuthError) {
            switch (err.type) {
                case "CredentialsSignin":
                    return {
                        error: "Invalid credentials"
                    }
                default:
                    return {
                        error: "Something went wrong"
                    }
            }
        }

        throw err;
    }
}