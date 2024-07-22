"use client"

import { useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState, useTransition } from 'react'
import { BeatLoader } from 'react-spinners'
import CardWrapper from '../../_components/card-wrapper'
import { newVerification } from '../../_actions/verification-token'
import { FormError } from '../../_components/form-error'
import { FormSuccess } from '../../_components/form-success'

type Props = {}

const Page = (props: Props) => {
    const params = useSearchParams()
    const token = params.get('token')
    const [success, setSuccess] = useState<string | undefined>('')
    const [error, setError] = useState<string | undefined>('')


    const onSubmit = useCallback(async () => {

        if (!token) {
            setError("Missing Token")
        }


        newVerification(token || '').then((data) => {
            setSuccess(data.success)
            setError(data.error)
        }).catch(() => {
            setError("Something went wrong!")
        })


    }, [token, success, error])

    useEffect(() => {
        onSubmit()
    }, [onSubmit])

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <CardWrapper
                headerLabel='Confirming Your Verification'
                backButtonHref='/signin'
                backButtonLabel='Back to login'
            >
                <div className='flex items-center justify-center py-8'>
                    {!success && !error && (
                        <BeatLoader />
                    )}
                    {
                        !success && (
                            <FormError message={error} />
                        )
                    }
                    <FormSuccess message={success} />
                </div>
            </CardWrapper>
        </div>
    )
}

export default Page