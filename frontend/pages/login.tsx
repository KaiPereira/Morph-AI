import SignupSignin from "../components/pages/SignupSignin"

// API functions
import { fetchProfileDetails } from "../api/user"

// States
import { useEffect, useState } from "react"

const Signin = () => {
  useEffect(() => {
    fetchProfileDetails()
      .then((data) => {
        window.location.href = "/"
      })
  }, [])

  return (
    <>
      <SignupSignin type="signin" />
    </>
  )
}

export default Signin