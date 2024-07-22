"use client"

import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

const LogoutButton = () => {
    return (
        <Button className="bg-red-600" onClick={() => {
            signOut()
        }}>
            Logout
        </Button>
    )
}

export default LogoutButton