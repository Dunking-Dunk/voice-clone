//@ts-nocheck

import authConfig from "./auth.config";
import NextAuth from "next-auth";

import {
    publicRoutes,
    DEFAULT_LOGIN_REDIRECT,
    authRoutes,
    apiAuthPrefix
} from "@/routes"

export const { auth } = NextAuth({ ...authConfig })

export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if (isApiAuthRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/signin', nextUrl))
    }

    return null;

})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};