// Components
import Nav from "@/components/common/Nav"
import LessonPage from "@/components/pages/LessonPage"

// Functions
import { getLesson, getCourse } from "@/api/server/courses"
import { onCourse, getLessonName, prettifyString } from "@/api/client/courses"

// States
import { useEffect, useState } from "react"


const Lesson = ({
    profileDetails,
    lessonData,
    courseData,
    onLesson
}: any) => {
    const [progress, setProgress] = useState<any>()

    useEffect(() => {
        const fetchProgress = async () => {
            const progress = await onCourse(courseData.name)
            setProgress(progress.lessonOn)
        }

        fetchProgress()
    }, [])  


    return (
        <>
            <Nav 
                type="big"
            />
            <LessonPage 
                lessonData={lessonData}
                courseData={courseData}
                onLesson={onLesson}
                progress={progress}
            />
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const { courseName, lesson } = context.query;

    const lessonData = await getLesson(courseName, lesson)
    const courseData = await getCourse(courseName)

    let onLesson = await getLessonName(courseData, lesson)
    onLesson = prettifyString(onLesson)

    return {
        props: {
            lessonData,
            courseData,
            onLesson: onLesson
        }
    }

}

export default Lesson