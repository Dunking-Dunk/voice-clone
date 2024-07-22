"use server"

import { signIn } from "@/auth"

export const GoogleSignIn = async () => {
    await signIn("google", { redirectTo: "/dashboard" })
}
