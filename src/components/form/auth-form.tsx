"use client"

import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { FcGoogle } from "react-icons/fc";
import { GoogleSignIn } from "@/app/(auth)/_actions/connection"
import Link from "next/link"
import { AuthSchema } from "@/lib/types"
import { register } from "@/app/(auth)/_actions/register"
import { useState, useTransition } from "react"
import { FormError } from "@/app/(auth)/_components/form-error"
import { FormSuccess } from "@/app/(auth)/_components/form-success"
import { Login } from "@/app/(auth)/_actions/login"
import { useSearchParams } from "next/navigation"

type Props = {
    type: string
}

const AuthForm = ({ type }: Props) => {
    const searchParam = useSearchParams()
    let urlError = searchParam.get('error') === "OAuthAccountNotLinked" ? "Email already in use with different provider" : ""

    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')

    const [isPending, startTransition] = useTransition()

    const formSchema = AuthSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: type === 'signin' ? {
            email: "",
            password: ""
        } : {
            username: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setError("")
        setSuccess("")
        urlError = ""

        let res: any;
        startTransition(async () => {
            if (type === 'signin') {
                res = await Login(data)
            } else {
                res = await register(data)
            }

            setError(res?.error)
            setSuccess(res?.success)
        })

    }

    return (
        <div className={`${type === 'signup' ? 'lg:w-[50%]' : 'lg:w-[25%]'} md:w-[50%] w-[90%] md:space-y-8 space-y-4 bg-primary md:p-10 p-4 border-dashed border-[2px] border-secondary flex flex-col items-center`}>
            <h2 className="font-dm text-4xl font-bold">Voice Clone</h2>
            <h4 className="text-5xl font-semibold text-secondary text-center">{
                type === 'signin' ? "Welcome Back" : "Create Your Account"}</h4>
            <Button className="border w-full inline-flex gap-6 bg-secondary hover:bg-background hover:text-secondary" onClick={() => {
                GoogleSignIn()
            }}>
                <FcGoogle size={24} />
                Continue With Google
            </Button>
            <div className="flex flex-row items-center w-full gap-4">
                <span className="w-full h-[1px] bg-accent-foreground block" />
                OR
                <span className="w-full h-[1px] bg-accent-foreground block" />
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                    {type === 'signup' && (
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormError message={error || urlError} />
                    <FormSuccess message={success} />
                    <Button type='submit' variant={"secondary"} className="w-full hover:bg-background hover:text-secondary">
                        {type === 'signin' ? 'Login' : "Register"}
                    </Button>
                </form>
            </Form>
            {type === 'signin' ? (
                <div className="space-y-4 text-center">
                    <div className="inline-flex gap-4">
                        <p>Don't have an account?</p>
                        <Link href={'/signup'} className="text-accent font-semibold font-dm">Create Account</Link>
                    </div>
                    <div className="inline-flex gap-4">
                        <p >Forgot Password</p>
                        <Link href={'/auth/reset'} className="text-accent font-semibold font-dm">Reset password</Link>
                    </div>
                </div>
            ) : (
                <div className="inline-flex gap-4">
                    <p>Already have an account?</p>
                    <Link href={'/signin'} className="text-accent font-semibold font-dm">Sign In</Link>
                </div>
            )}
        </div>

    )
}

export default AuthForm