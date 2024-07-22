import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid'
import { getVerificationTokenByEmail } from "./verification-token";
import { db } from "@/lib/db";

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    return hashPassword
}

export const comparePassword = async (password: string, hashPassword: string) => {
    return await bcrypt.compare(password, hashPassword)
}


export const generateVerificationToken = async (email: string) => {
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    const existingToken = await getVerificationTokenByEmail(email)

    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return verificationToken;
}