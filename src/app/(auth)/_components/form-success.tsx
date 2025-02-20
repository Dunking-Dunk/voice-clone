import { CheckCircledIcon } from "@radix-ui/react-icons"

interface FormSuccessProp {
    message?: string
}

export const FormSuccess = ({ message }: FormSuccessProp) => {
    if (!message) return null

    return (
        <div className=" bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
            <CheckCircledIcon height={30} width={30} />
            <p>{message}</p>
        </div>
    )
}