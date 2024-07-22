import AuthForm from "@/components/form/auth-form"
import { auth } from "@/auth"

async function SignIn() {
    const session = await auth()

    return (
        <div className="w-full h-screen flex flex-row justify-center items-center">
            <AuthForm type="signin" />
        </div>

    )
}

export default SignIn