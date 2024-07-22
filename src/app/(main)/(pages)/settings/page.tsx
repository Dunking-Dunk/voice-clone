
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'
import LogoutButton from './_components/logout-btn'

type Props = {}

const Setting = async (props: Props) => {
    const session = await auth()

    return (
        <div>
            <p>{JSON.stringify(session)}</p>

            <LogoutButton />
        </div>
    )
}

export default Setting