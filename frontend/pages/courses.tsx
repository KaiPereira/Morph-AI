// Components
import Nav from "@/components/common/Nav"
import CoursesPage from "@/components/pages/CoursesPage"
import Footer from "@/components/common/Footer"

// Functions
import { getAllCourses } from "@/api/server/courses"

const Courses = ({
    courses
}: any) => {
    return (
        <>
            <Nav 
                type="big"
            />
            <CoursesPage 
                courses={courses}
            />
            <Footer />
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


export default Courses