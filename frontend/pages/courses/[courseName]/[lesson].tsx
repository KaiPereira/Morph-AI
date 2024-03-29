// Components
import Nav from "@/components/common/Nav"
import LessonPage from "@/components/pages/LessonPage"

// API functions
import { getCourse, getLesson } from "@/api/server/courses"

// Hooks
import usePreventLoginByPass from "@/hooks/usePreventLoginByPass"



const Lesson = ({
    lessonData,
    courseData,
    profileDetails
}: any) => {
    usePreventLoginByPass(profileDetails)

    return (
        <>
            <Nav 
                type="big"
            />
            <LessonPage 
                lessonData={lessonData}
                courseData={courseData}
            />
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const { courseName, lesson } = context.query;

    const lessonData = await getLesson(courseName, lesson)
    const courseData = await getCourse(courseName)

    return {
        props: {
            lessonData,
            courseData
        }
    }
}

export default Lesson