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
import { useState, useTransition } from "react"
import { FormError } from "@/app/(auth)/_components/form-error"
import { FormSuccess } from "@/app/(auth)/_components/form-success"


type Props = {

}

const ResetForm = (props: Props) => {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')

    const [isPending, startTransition] = useTransition()

    const formSchema = z.object({
        email: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This is not a valid email."),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setError("")
        setSuccess("")
    }

    return (
        <div className={`lg:w-[25%] md:w-[50%] w-[90%] md:space-y-8 space-y-4 bg-primary md:p-10 p-4 border-dashed border-[2px] border-secondary flex flex-col items-center`}>
            <h2 className="font-dm text-4xl font-bold">Voice Clone</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">

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
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button type='submit' variant={"secondary"} className="w-full hover:bg-background hover:text-secondary">
                        Send Reset email
                    </Button>
                </form>
            </Form>
        </div>

    )
}

export default ResetForm