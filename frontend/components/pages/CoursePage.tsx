// States
import { useEffect, useState } from "react";

// API functions
import { 
    prettifyString, 
    courseLocked, 
    onCourse, 
    prettifyUrl 
} from "@/api/client/courses"

// Libraries
import Link from "next/link"


const CourseLesson = ({
    lessonCategory,
    lessons,
    profileDetails,
    courseData,
    lessonOn
}: any) => {
    const [lessonElements, setLessonElements] = useState<any>()
    const [lessonOpen, setLessonOpen] = useState(false)
    const [lessonsCompleted, setLessonsCompleted] = useState(0)

    useEffect(() => {
        // Check if the lesson is locked and return the element
        const lessonPromise = Promise.all(lessons.map(async (lesson: any, index: any) => {
            const lessonLocked = await courseLocked(courseData, lessonOn - 1, lesson);

            return {
                index: index,
                lessonLocked: lessonLocked,
                lessonElement: (
                    <li key={index} className={!lessonLocked ? "course-page-lesson-finished" : ""}>
                        <Link href={`/courses/${prettifyUrl(courseData.name)}/${lessonOn ? lessonOn : 0}`} className="course-page-lesson-link">
                            {prettifyString(lesson)}
                        </Link>
                    </li>
                )
            }
        }))

        // This will set the element and also how many are locked and unlocked
        lessonPromise.then((res) => {
            let highestIndex = -1;

            const lessonElementMap = res.map((lessonElement: any) => {
                return lessonElement.lessonElement
            })

            res.forEach(lesson => {
                if (!lesson.lessonLocked && lesson.index > highestIndex) {
                    highestIndex = lesson.index;
                }
            });

            setLessonsCompleted(highestIndex + 1)
            setLessonElements(lessonElementMap)
        }) 
    }, [])


    const openLesson = () => {
        setLessonOpen(!lessonOpen)
    }

    return (
        <div className="course-page-lessons-lesson">
            <div className="course-page-lessons-lesson-1">
                <p>{prettifyString(lessonCategory)}</p>
            </div>
            <div className={`course-page-lessons-lesson-2 ${lessonOpen && "course-page-lessons-lesson-open"}`}>
                <div className="course-page-lessons-lesson-topbar">
                    <button className="course-page-lessons-lesson-2-collapse" onClick={openLesson}>
                        <i className="fa-solid fa-angle-right"></i>
                        <p>Collapse Course</p>
                    </button>
                    <p className="course-page-lessons-lesson-2-progress">{lessonsCompleted ? lessonsCompleted : 0}/{lessonElements && lessonElements.length}</p>
                </div>
                <div className="course-page-lessons-lesson-contents">
                    <ul>
                        {lessonElements}
                    </ul>
                </div>
            </div>
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
    const [lessonOn, setLessonOn] = useState()

    useEffect(() => {
        const updateCourseDetails = async () => {
            const { lessonOn } = await onCourse(courseData.name);

            setLessonOn(lessonOn);
        }

        updateCourseDetails()
    }, [])

    useEffect(() => {
        if (typeof lessonOn == "number") {
            setCourseLessons(
                courseData.lessons.map((lessonCategory: any, index: any) => {
                    return (
                        <CourseLesson 
                            lessonCategory={lessonCategory.lessonCategory}
                            lessons={lessonCategory.lessons}
                            profileDetails={profileDetails}
                            courseData={courseData}
                            key={index}
                            lessonOn={lessonOn}
                        />
                    )
                })
            )
        }
    }, [lessonOn])


    return (
        <main className="course-page-container">
            <div className="course-page">
                <i className={`${courseData.icon} course-icon`}></i>
                <h1>{courseData.name}</h1>
                <p className="course-page-description">{courseData.description}</p>
                <h2>Courses</h2>
                <div className="course-page-lessons">
                    {courseLessons}
                </div>
            </div>
        </main>
    )
}

export default CoursePage