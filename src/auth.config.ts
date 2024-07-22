import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

import { AuthError, type NextAuthConfig } from "next-auth"
import { AuthSchema } from "./lib/types"
import { getUserByEmail } from "./lib/actions"
import { comparePassword } from "./app/(auth)/_actions/hash"

class InvalidCredentials extends AuthError {
    public readonly kind = 'signIn';

    constructor() {
        super('Invalid credentials');
        this.type = 'CredentialsSignin';
    }
}

export default {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        }),
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const schema = AuthSchema("signin")
                const validateField = schema.safeParse(credentials)

                if (validateField.success) {
                    const { email, password } = validateField.data

                    const user = await getUserByEmail(email)

                    if (!user || !user.password) {
                        throw new InvalidCredentials()
                    }

                    const isValid = await comparePassword(password, user.password)

                    if (isValid) return user;
                }
                throw new InvalidCredentials()
            }
        })
    ]
} satisfies NextAuthConfig