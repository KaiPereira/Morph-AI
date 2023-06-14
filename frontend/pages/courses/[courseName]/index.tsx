// Components
import Nav from "@/components/common/Nav"
import Footer from "@/components/common/Footer"
import CoursePage from "@/components/pages/CoursePage"

// API Functions
import { getCourse } from "@/api/server/courses"

// Hooks
import { useEffect } from "react"
import usePreventLoginByPass from "@/hooks/usePreventLoginByPass"

const Course = ({
    profileDetails,
    courseData
}: any) => {
    usePreventLoginByPass(profileDetails)

    return (
        <>
            <Nav />
            <CoursePage 
                profileDetails={profileDetails}
                courseData={courseData}
            />
            <Footer />
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const { courseName } = context.query;

    const courseData = await getCourse(courseName)

    return {
        props: {
            courseData,
        }
    }
}

export default Course