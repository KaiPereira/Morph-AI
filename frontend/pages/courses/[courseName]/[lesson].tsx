// Components
import Nav from "@/components/common/Nav"
import LessonPage from "@/components/pages/LessonPage"

// Functions
import { getLesson, getCourse } from "@/api/server/courses"


const Lesson = ({
    profileDetails,
    lessonData,
    courseData,
    onLesson
}: any) => {

    return (
        <>
            <Nav 
                type="big"
            />
            <LessonPage 
                lessonData={lessonData}
                courseData={courseData}
                onLesson={onLesson}
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
            courseData,
            onLesson: lesson
        }
    }

}

export default Lesson