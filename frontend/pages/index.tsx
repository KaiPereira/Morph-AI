// Components
import Nav from "@/components/common/Nav"
import HomePage from "@/components/pages/HomePage"
import Dashboard from "@/components/pages/Dashboard"
import Footer from "@/components/common/Footer"

// Api functions
import { getAllCourses } from "@/api/server/courses"


const Home = ({
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
                <>
                    <Nav 
                        signedIn={false}
                    />
                    <HomePage />
                </>
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