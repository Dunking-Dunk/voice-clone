export const publicRoutes = [
    "/",
    '/auth/new-verification'
]

/**
 * An array of routes that are used for authentication
 * these routes will redirect to logged in user to /dahsboard
 * @type {string[]}
 */

export const authRoutes = [
    '/signin',
    '/signup',
    '/auth/error',
    '/auth/reset'
]

/**
 * The Prefix for API Authentication routes
 * routes that start with this prefix are used for API authentication purpose
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth'

/**
 * The Default redirect path after login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings"