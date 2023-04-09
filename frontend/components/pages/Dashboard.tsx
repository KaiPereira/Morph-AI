// Components
import Search from "../subcomponents/Search"
import Course from "../subcomponents/Course"

// States
import { useState, useEffect } from "react"



type DashboardStatProps = {
    title: string,
    value: string,
    increase: number
}

const DashboardStat = ({ 
    title, 
    value, 
    increase 
}: DashboardStatProps) => {
    return (
        <div className="dashboard-stat">
            <div className="dashboard-stat-details">
                <h1>{title}</h1>
                <p>{value}</p>
            </div>
            <div className="dashboard-stat-increase">
                <div className="dashboard-stat-increase-container">
                    <p className="dashboard-stat-increase-header">Past Week</p>
                    <div>
                        <i className="fa-solid fa-arrow-up"></i>
                        <p>{increase}%</p>
                    </div>
                </div>
            </div>  
        </div>
    )
}



type CoursesFormatProps = {
    title: string,
    courses: any
}

const CoursesFormat = ({
    title,
    courses
}: CoursesFormatProps) => {
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
                    key={index}
                    courseTime={course.courseTime}
                    lessons={course.lessons}
                />
            )
        }))
    }, [courses])

    return (
        <div className="dashboard-courses-format">
            <div className="dashboard-courses-header">
                <h2>{title}</h2>
                <div>
                    <p>{courses.length}</p>
                </div>
            </div>
            <div className="dashboard-courses-list">
                {courseElements}
            </div>
        </div>
    )
}

type DashboardProps = {
    profileDetails: any,
    courses: any
}

const Dashboard = ({
    profileDetails,
    courses
}: DashboardProps) => {
    const dayStreak = profileDetails.dayStreak
    const dayStreakString = dayStreak === 1 ? `${dayStreak} day` : `${dayStreak} days`

    return (
        <main className="dashboard-container">
            <div>
                <div className="dashboard-header">
                    <h1>Overview</h1>
                    <Search 
                        placeholder="Search Courses" 
                        icon="fas fa-search" 
                    />
                </div>
                <div className="dashboard-stats">
                    <DashboardStat 
                        title="Lessons Completed" 
                        value="25" 
                        increase={20} 
                    />
                    <DashboardStat 
                        title="Points Earned" 
                        value="526,254" 
                        increase={20} 
                    />
                    <DashboardStat 
                        title="Day Streak" 
                        value={dayStreakString}
                        increase={20}
                    />
                </div>
                <div className="dashboard-courses">
                    <CoursesFormat 
                        title="Courses"
                        courses={courses}
                    />
                    <CoursesFormat 
                        title="What's Next?"
                        courses={courses}
                    />
                </div>
            </div>
        </main>
    )
}

export default Dashboard