// Components
import Nav from "@/components/common/Nav"
import LessonPage from "@/components/pages/LessonPage"

// API functions
import { getCourse, getLesson } from "@/api/server/courses"


const Lesson = ({
    lessonData,
    courseData
}: any) => {
    return (
        <>
            <Nav 
                type="big"
            />
            <LessonPage 
                lessonData={lessonData}
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