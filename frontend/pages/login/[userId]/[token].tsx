// Functions
import { verifyEmail } from "@/api/client/authentication"

// States
import { useEffect } from "react"


const TokenVerification = (
    verification: any
) => {

    useEffect(() => {
        console.log(verification)

        if (verification.verification) {
            window.location.href = "/"
        }
    }, [])

    return (
        <>
        
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const { userId, token } = context.query;

    const verification = await verifyEmail(userId, token)

    return {
        props: {
            verification
        }
    }
}

export default TokenVerification