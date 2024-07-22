"use server"

import { AuthSchema } from "@/lib/types"
import { z } from "zod"
import { generateVerificationToken, hashPassword } from "./hash"
import { db } from "@/lib/db"
import { sendVerificationEmail } from "@/lib/mail"

const Schema = AuthSchema('signup')

export const register = async (values: z.infer<typeof Schema>) => {
    const validatedField = Schema.safeParse(values)

    if (!validatedField.success) {
        return { error: "Invalid Fields" }
    }

    const { username, email, password } = validatedField.data
    const hashedpassword = await hashPassword(password)

    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    })

    if (existingUser) return {
        error: 'Email already exist'
    }

    await db.user.create({
        data: {
            email,
            name: username,
            password: hashedpassword
        }
    })

    const verificationToken = await generateVerificationToken(email)

    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    //TODO: Send Verification token email

    return {
        success: "Confirmation Email sent"
    }
}