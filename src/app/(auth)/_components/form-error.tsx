import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErrorProp {
    message?: string;
}

export const FormError = ({ message }: FormErrorProp) => {
    if (!message) return null

    return (
        <div className=" bg-red-600 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary-foreground">
            <ExclamationTriangleIcon height={30} width={30} />
            <p>{message}</p>
        </div>
    )
}