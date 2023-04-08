// Components
import SignupSignin from "../components/pages/SignupSignin"
import Nav from "../components/common/Nav"
import Dashboard from "../components/pages/Dashboard"

// Libraries
import { GetServerSideProps } from 'next'

// Functions
import { getAllCourses, getCourse } from "../api/courses"



// This is our signup and also our home page
const Home = ({
  loading,
  profileDetails,
  courses
}: any) => {

  return (
    <>{ !loading &&
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
          </>
          :
          <SignupSignin type="signup" />
        }
      </>
    }
    </>
  )
}


export const getServerSideProps = async (context: any) => {
  const courses = await getAllCourses()

  const course = await getCourse("Handwritten Digit Recognizer")

  console.log(course)

  return {
    props: {
      courses
    }
  }
}

export default Home