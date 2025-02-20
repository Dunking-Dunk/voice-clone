import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config";

import { db } from "./lib/db";
import { getUserById } from "./lib/actions";
import { User, UserRole } from "@prisma/client";


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: '/signin',
        error: '/auth/error'
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    emailVerified: new Date()
                }
            })
        }
    },
    callbacks: {
        async signIn({ user, account }: {
            user: any,
            account: any
        }) {
            if (account?.provider !== "credentials") return true

            const existingUser = await getUserById(user.id);

            if (!existingUser?.emailVerified) return false

            // TODO: Add 2FA check

            return true
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }

            if (token.role && session.user) {
                session.user.role = token.role as UserRole
            }

            return session
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub)

            if (!existingUser) return token;

            token.role = existingUser.role

            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    ...authConfig
});
