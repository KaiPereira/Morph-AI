// Components
import SignupSignin from "../components/pages/SignupSignin"
import Nav from "../components/common/Nav"
import Dashboard from "../components/pages/Dashboard"
import Footer from "../components/common/Footer"


// Libraries
import { GetServerSideProps } from 'next'

// Functions
import { getAllCourses } from "../api/server/courses"

// States
import { useEffect, useState } from "react"



// This is our signup and also our home page
const Home = ({
  loading,
  profileDetails,
  courses
}: any) => {
  return (
    <>
      { profileDetails ?
        <>
          <Nav 
            type="small"
          />
          <Dashboard 
            profileDetails={profileDetails}
            courses={courses}
          />
          <Footer />
        </>
        :
        <SignupSignin type="signup" />
      }
    </>
  )
}


export const getServerSideProps = async (context: any) => {  
  const courses = await getAllCourses()

  return {
    props: {
      courses
    }
  }
}

export default Home