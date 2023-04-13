// components
import Input from "../subcomponents/Input"
import Button from "../subcomponents/Button"
import FormStatusPopup from "../subcomponents/FormStatusPopup"

// States
import { useState } from "react"

// Libraries
import Link from "next/link"
import axios from "axios"

// Our api functions
import { signup, signin } from "../../api/client/authentication"

type SignupSigninProps = {
    type: "signup" | "signin"
}

const SignupSignin = ({
    type
}: SignupSigninProps ) => {
    // Our states
    const [inputs, changeInputs] = useState({
        email: "",
        password: ""
    })
    const [status, changeStatus] = useState()
    const [statusType, changeStatusType] = useState(0)
    

    // Handle whenver we change the email and password
    const handleInputChange = (e: any) => {
        changeInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    // Our signup function from ../api/authentication.ts
    const signupFunction = async (e: any) => {
        e.preventDefault()

        signup(inputs.email, inputs.password)
            .then((response: any) => {
                changeStatusType(parseInt(response.status))
                changeStatus(response.data)
                window.location.reload()
            })
            .catch((error: any) => {
                console.log(error)
                changeStatus(error.response.data)
                changeStatusType(error.response.status)
            })
    }

    // Our signin function from ../api/authentication.ts
    const signinFunction = async (e: any) => {
        e.preventDefault()

        signin(inputs.email, inputs.password)
            .then((response: any) => {
                changeStatusType(parseInt(response.status))
                changeStatus(response.data)
                window.location.href="/"
            })
            .catch((error: any) => {
                console.log(error)
                changeStatus(error.response.data)
                changeStatusType(error.response.status)
            })
    }

    // This is a function to change the content based on if this is a signup or signin
    const signinSignupContent = (signupMessage: any, signinMessage: any) => {
        return type == "signup" ? signupMessage : signinMessage
    }

    return (
        <main className="signup">
            <div className="signup-details">
                <div className="signup-details-container">
                    <h1>{signinSignupContent(
                        "Create an Account",
                        "Sign In to Your Account"
                    )}</h1>
                    <p className="signup-description">{signinSignupContent(
                        "Start harnessing the power of modern AI and join Morph! Learn from a fun and engaging project-based approach.",
                        "Welcome back! Ready to continue building projects and making progress on learning AI/ML?"
                    )}</p>
                    <form className="signup-inputs-container">
                        <FormStatusPopup type={statusType == 200 ? "success" : "error"} setState={changeStatus}>{JSON.stringify(status)}</FormStatusPopup>
                        <Input 
                            label="email"
                            required={true}
                            placeholder="johndoe@gmail.com"
                            type="text"
                            onChange={handleInputChange}
                        />
                        <Input 
                            label="password"
                            required={true}
                            placeholder="*******************"
                            type="password"
                            onChange={handleInputChange}
                        />
                        <Button
                            type="primary"
                            arrow={true}
                            className="signup-button"
                            onClick={signinSignupContent(signupFunction, signinFunction)}
                        >{signinSignupContent(
                            "Get Started",
                            "Sign In"
                        )}</Button>
                    </form>
                    {/* For Future google auth */}
                    {/* <Button
                        type="light"
                        className="signup-button google-signup"
                    >
                        <i className="fa-brands fa-google"></i>
                        {signinSignupContent(
                            "Signup Using Google",
                            "Sign In Using Google"
                        )}
                    </Button> */}
                    <p className="signup-login">{signinSignupContent("Already have an account?", "Don’t have an account yet?")} <Link href={signinSignupContent("/login", "/")}><span>{signinSignupContent("Login In", " Sign Up")}</span></Link></p>
                </div>
            </div>
            <div className="signup-decoration">
                <img src="/images/signup-illustration.svg" alt="Programming Signup Illustration" />
            </div>
        </main>
    )
}

export default SignupSignin