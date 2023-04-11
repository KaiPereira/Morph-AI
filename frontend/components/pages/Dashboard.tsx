// Components
import Search from "../subcomponents/Search"
import Course from "../subcomponents/Course"

// States
import { useState, useEffect } from "react"

// API FUnctions
import { getDashboardStats, getUserCourses } from "../../api/client/courses"



type DashboardStatProps = {
    title: string,
    value: string,
    color: "green" | "purple" | "blue",
    children: any 
}

const DashboardStat = ({ 
    title, 
    value, 
    color,
    children
}: DashboardStatProps) => {
    return (
        <div className="dashboard-stat">
            <div className="dashboard-stat-details">
                <h1>{title}</h1>
                <p>{value}</p>
            </div>
            <div className="dashboard-stat-icon-container">
                <div className={`dasboard-stat-icon dashboard-stat-icon-${color}`}>
                    {children}
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
                />
            )
        }))
    }, [courses])

    return (
        <>{ (courses.length > 0) &&
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
        }</>
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
    const [dashboardStats, setDashboardStats] = useState<any>({
        lessonsCompleted: 0,
        points: 0,
        dayStreak: "0 days"
    })
    const [userCourses, setUserCourses] = useState<any>()

    useEffect(() => {
        const getUserCoursesFunction = async () => {
            const userCourses = await getUserCourses(courses, profileDetails)
            
            setUserCourses(userCourses)
        }

        getUserCoursesFunction()

        const getLessonPoints = async () => {
            const { lessonsCompleted, points, dayStreak } = await getDashboardStats(profileDetails)
            
            setDashboardStats((prevState: any) => ({
                ...prevState,
                lessonsCompleted,
                points,
                dayStreak
            }))
        }

        getLessonPoints()
    }, [])


    return (
        <>{ userCourses &&
            <main className="dashboard-container">
                <div>
                    <div className="dashboard-header">
                        <h1>Overview</h1>
                        {/* <Search 
                            placeholder="Search Courses" 
                            icon="fas fa-search" 
                        /> */}
                    </div>
                    <div className="dashboard-stats">
                        <DashboardStat 
                            title="Lessons Completed" 
                            value={dashboardStats.lessonsCompleted}
                            color="purple"
                        >
                            <i className="fa-solid fa-book"></i>
                        </DashboardStat>
                        <DashboardStat 
                            title="Points Earned" 
                            value={dashboardStats.points}
                            color="green"
                        >
                            <i className="fa-solid fa-coins"></i>
                        </DashboardStat>
                        <DashboardStat 
                            title="Day Streak" 
                            value={dashboardStats.dayStreak}
                            color="blue"
                        >
                            <i className="fa-solid fa-arrow-trend-up"></i>
                        </DashboardStat>
                    </div>
                    <div className="dashboard-courses">
                        <CoursesFormat 
                            title="My Courses"
                            courses={userCourses.current}
                        />
                        <CoursesFormat 
                            title="Finished Courses"
                            courses={userCourses.finished}
                        />
                        <CoursesFormat 
                            title="What's Next?"
                            courses={userCourses.unfinished}
                        />
                    </div>
                </div>
            </main>
        }</>
    )
}

export default Dashboard