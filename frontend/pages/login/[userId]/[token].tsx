// Functions
import { verifyEmail } from "@/api/client/authentication"

// States
import { useEffect } from "react"

type TokenVerificationProps = {
    userId: any,
    token: any
}


const TokenVerification = ({
    userId,
    token
}: TokenVerificationProps) => {

    useEffect(() => {
        const verifyEmailHandler = async () => {
            const verification = await verifyEmail(userId, token)

            if (verification) {
                window.location.href = "/login"
            }
        }

        verifyEmailHandler()
    }, [])

    return (
        <>
        
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const { userId, token } = context.query;

    return {
        props: {
            userId,
            token
        }
    }
}

export default TokenVerification