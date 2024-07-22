import CardWrapper from "../../_components/card-wrapper"
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

const AuthErrorPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <CardWrapper
                headerLabel="ooops something went wrong!"
                backButtonHref="'/signin"
                backButtonLabel="back to login"
            >
                <div className="flex items-center justify-center">
                    <ExclamationTriangleIcon className='h-20 w-14 text-destructive' />
                </div>

            </CardWrapper>
        </div>

    )
}

export default AuthErrorPage