import SignupSignin from "../components/pages/SignupSignin"

// API functions
import { fetchProfileDetails } from "../api/user"

// States
import { useEffect, useState } from "react"

const Signin = ({
  profileDetails,
  loading
}: any) => {

  useEffect(() => {
    if (profileDetails) {
      window.location.href = "/"
    }
  }, [profileDetails])

  return (
    <>
      <SignupSignin type="signin" />
    </>
  )
}

export default Signin