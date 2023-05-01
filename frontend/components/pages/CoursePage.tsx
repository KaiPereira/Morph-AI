import { useEffect, useState } from "react";


const CourseLesson = () => {
    return (
        <div className="course-page-lessons-lesson">
            <div className="course-page-lessons-lesson-1">
                <p>{}</p>
                <p></p>
            </div>
            <div className="course-page-lessons-lesson-2"></div>
        </div>
    )
}


type CoursePageProps = {
    profileDetails: any,
    courseData: any
}

const CoursePage = ({
    profileDetails,
    courseData
}: CoursePageProps) => {
    const [courseLessons, setCourseLessons] = useState()

    useEffect(() => {

    }, [])


    return (
        <main className="course-page-container">
            <div className="course-page">
                <i className={courseData.icon}></i>
                <h1>{courseData.name}</h1>
                <p className="course-page-description">{courseData.description}</p>
                <h2>Courses</h2>
                <div className="course-page-lessons">
                    <div className="course-page-lessons-lesson">
                        <div className="course-page-lessons-lesson-1">
                            <p>{}</p>
                            <p></p>
                        </div>
                        <div className="course-page-lessons-lesson-2"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CoursePage