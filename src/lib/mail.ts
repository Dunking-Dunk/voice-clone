import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// interface EmailTemplateProps {
//     firstName: string
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
//     <div>
//     <h1>Welcome, { firstName }! </h1>
//     </div>
// )

export const sendVerificationEmail = async (email: string | null, token: string | null) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

    if (email && token)
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Confirm your email",
            html: `<p>Click <a href=${confirmLink}>here</a> to confirm email</p>`
        })
}