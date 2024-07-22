import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

type Props = {
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    children?: React.ReactNode
}

const CardWrapper = ({
    headerLabel,
    backButtonLabel,
    children,
    backButtonHref
}: Props) => {
    return (
        <Card className=' min-w-[400px] bg-primary'>
            <CardHeader className='space-y-6 flex flex-col items-center'>
                <h3 className='text-4xl font-dm font-semibold text-secondary'>Voice Clone</h3>
                <p>{headerLabel}</p>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter className='flex items-center justify-center'>
                <Link href={backButtonHref}>
                    <Button variant={"outline"} className='text-accent'>{backButtonLabel}</Button>
                </Link>

            </CardFooter>
        </Card>
    )
}

export default CardWrapper