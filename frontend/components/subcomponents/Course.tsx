// States
import { useState, useEffect } from "react"

// Libraries
import Link from "next/link"

// Functions
import { courseProgress, prettifyUrl } from "../../api/client/courses"


type CourseProps = {
    thumbnail: string,
    difficulty: string,
    title: string,
    description: string,
    tags: any,
    courseTime: string,
    icon: string
}


const Course = ({
    thumbnail,
    difficulty,
    title,
    description,
    tags,
    courseTime,
    icon
}: CourseProps) => {
    const [tagElements, changeTagElements] = useState<any>()
    const [lessonProgress, setLessonProgress] = useState<any>(null)

    useEffect(() => {
        changeTagElements(tags.map((tag: any, index: any) => {
            return (
                <div key={index}>
                    <p>{tag}</p>
                </div>
            )
        }))

        const fetchCourseProgress = async () => {
            // Use our course progress
            const courseProgressData = await courseProgress(title);

            setLessonProgress(courseProgressData.lessonOn)
        }

        fetchCourseProgress()

    }, [])

    const courseLink = `/courses/${prettifyUrl(title)}`

    return (
        <>
            <Link href={courseLink} className="course">
                <i className={icon}></i>
                <div>
                    <p className="course-header">{title}</p>
                    <p className="course-description">{description}</p>
                </div>
            </Link>
        </>
    )
}

export default Course