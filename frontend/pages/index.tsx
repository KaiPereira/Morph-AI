// Components
import SignupSignin from "../components/pages/SignupSignin"
import Nav from "../components/common/Nav"
import Dashboard from "../components/pages/Dashboard"

// Libraries
import { GetServerSideProps } from 'next'

// Functions
import { getAllCourses } from "../api/server/courses"
import { getUserCourses } from "../api/client/courses"

// States
import { useEffect, useState } from "react"



// This is our signup and also our home page
const Home = ({
  loading,
  profileDetails,
  courses
}: any) => {
  const [userCourses, setUserCourses] = useState<any>()
  const [userCoursesLoading, setUserCoursesLoading] = useState<boolean>(true)

  useEffect(() => {
    const getUserCoursesFunction = async () => {
      const userCourses = await getUserCourses(courses, profileDetails)
      
      setUserCoursesLoading(false)
      setUserCourses(userCourses)
    }

    getUserCoursesFunction()
  }, [courses])

  return (
    <>
      { profileDetails ?
        <>
          <Nav 
            type="small"
          />
          { !userCoursesLoading &&
            <Dashboard 
              profileDetails={profileDetails}
              courses={courses}
              userCourses={userCourses}
            />
          }
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