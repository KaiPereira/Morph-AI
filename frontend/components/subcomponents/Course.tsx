// States
import { useState, useEffect } from "react"

// Libraries
import Link from "next/link"

// Functions
import { onCourse, spaceToDash } from "../../api/client/courses"


type CourseProps = {
    thumbnail: string,
    difficulty: string,
    title: string,
    description: string,
    tags: any,
    courseTime: string,
    lessons: any
}


const Course = ({
    thumbnail,
    difficulty,
    title,
    description,
    tags,
    courseTime,
    lessons
}: CourseProps) => {
    const [tagElements, changeTagElements] = useState<any>()
    const [courseData, setCourseData] = useState<any>(null)

    useEffect(() => {
        changeTagElements(tags.map((tag: any, index: any) => {
            return (
                <div key={index}>
                    <p>{tag}</p>
                </div>
            )
        }))

        const onCourseFunction = async () => {
            const onCourseData = await onCourse(title)

            setCourseData(onCourseData)
        }

        onCourseFunction()
    }, [])

    const courseLink = `/courses/${courseData ? courseData : `${spaceToDash(title)}/${spaceToDash(lessons[0].lessons[0])}`}`

    return (
        <>
            <Link href={courseLink} className="course-link">
                <div className="course">
                    <img src={thumbnail} alt="thumbnail" className="course-thumbnail" />
                    <div className="course-difficulty">
                        <p>{difficulty}</p>
                    </div>
                    <div className="course-info">
                        <p className="course-header">{title}</p>
                        <p className="course-description">{description}</p>
                        <div className="course-info-extra">
                            <div className="course-info-extra-tags">
                                {tagElements}
                            </div>
                            <div className="course-info-extra-time">
                                <i className="fa-solid fa-book"></i>
                                <p>{courseTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Course