import AuthForm from "@/components/form/auth-form"

function SignUp() {
    return (
        <div className="flex flex-row h-screen">
            <div className="flex-1 bg-primary lg:flex hidden items-center justify-center px-20">
                <h2 className="text-6xl font-medium text-center">Cloning your voice at it's finest</h2>
            </div>
            <div className="flex-1 w-full h-full flex items-center justify-center">
                <AuthForm type="signup" />
            </div>

        </div>

    )
}

export default SignUp