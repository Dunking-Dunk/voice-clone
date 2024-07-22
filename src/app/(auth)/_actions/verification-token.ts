"use server"

import { getUserByEmail } from "@/lib/actions";
import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: {
                token
            }
        })
        return verificationToken
    } catch {
        return null
    }
}

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {
                email
            }
        })
        return verificationToken
    } catch {
        return null
    }
}

export const newVerification = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
        return {
            error: "Token does not exist!"
        }
    }

    const hasExpired = new Date(existingToken.expires) < new Date()

    if (hasExpired) {
        return {
            error: "Token has expired!"
        }
    }

    const existingUser = await getUserByEmail(existingToken.email!)

    if (!existingUser) {
        return {
            error: "Email does not exist!"
        }
    }

    await db.user.update({
        where: {
            id: existingUser.id
        },
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    })

    await db.verificationToken.delete({
        where: {
            id: existingToken.id
        }
    })

    return {
        success: "Email Verified"
    }

}