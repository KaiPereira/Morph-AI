// Components
import Nav from "@/components/common/Nav"
import LessonPage from "@/components/pages/LessonPage"

// Functions
import { getLesson, getCourse } from "@/api/server/courses"
import { onCourse, getLessonName, prettifyString, courseFinished } from "@/api/client/courses"

// States
import { useEffect, useState } from "react"

// Libraries
import { useRouter } from "next/router"


const Lesson = ({
    profileDetails,
    lessonData,
    courseData,
    onLesson
}: any) => {
    const [progress, setProgress] = useState<any>()
    const [courseIsFinished, setCourseFinished] = useState<boolean>(false)
    const router = useRouter();

    useEffect(() => {

        // Checks if the course is finished
        const finished = async () => {
            const finished = await courseFinished(courseData, onLesson)
            setCourseFinished(finished)
        }

        // Checks what course the user is on
        const fetchProgress = async () => {
            const progress = await onCourse(courseData.name)
            setProgress(progress.lessonOn)
        }

        fetchProgress()
        finished()
    }, [router.query.lesson]) // This dependency ensures that the lock/unlocked lesson is updated


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
                courseIsFinished={courseIsFinished}
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