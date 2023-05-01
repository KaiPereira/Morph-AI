// Components
import Search from "../subcomponents/Search"
import Course from "../subcomponents/Course"

// States
import { useState, useEffect } from "react"

type DashboardProps = {
    profileDetails: any,
    courses: any
}

const Dashboard = ({
    profileDetails,
    courses
}: DashboardProps) => {
    const [courseElements, setElementsCourse] = useState<any>(null)

    useEffect(() => {
        setElementsCourse(courses.map((course: any, index: any) => {
            return (
                <Course 
                    description={course.description}
                    difficulty={course.difficulty}
                    title={course.name}
                    tags={course.tags}
                    thumbnail={course.thumbnail}
                    icon={course.icon}
                    key={index}
                    courseTime={course.courseTime}
                />
            )
        }))
    }, [courses])

    return (
        <main className="dashboard-container">
            <h1>Welcome to the Curriculum</h1>
            <p className="dashboard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur magna orci, non malesuada purus imperdiet id.</p>
            <div className="dashboard-courses">
                {courseElements}
            </div>
        </main>
    )
}

export default Dashboard