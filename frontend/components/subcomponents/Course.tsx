// States
import { useState, useEffect } from "react"

// Libraries
import Link from "next/link"


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

    useEffect(() => {
        changeTagElements(tags.map((tag: any, index: any) => {
            return (
                <div key={index}>
                    <p>{tag}</p>
                </div>
            )
        }))


    }, [])


    return (
        <>
            <Link href={`/${title}`} className="course-link">
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