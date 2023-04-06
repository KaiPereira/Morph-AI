// Components
import Search from "../subcomponents/Search"
import Course from "../subcomponents/Course"


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
    return (
        <div className="dashboard-courses-format">
            <div className="dashboard-courses-header">
                <h2>Courses</h2>
                <div>
                    <p>2</p>
                </div>
            </div>
            <div className="dashboard-courses-list">
                <Course 
                    id="test"
                />
            </div>
        </div>
    )
}

type DashboardProps = {
    profileDetails: any
}

const Dashboard = ({
    profileDetails
}: DashboardProps) => {
    return (
        <main className="dashboard-container">
            <div className="dashboard">
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
                        value="14 days" 
                        increase={20} 
                    />
                </div>
                <div className="dashboard-courses">
                    <CoursesFormat 
                        title="Courses"
                        courses={[]}
                    />
                </div>
            </div>
        </main>
    )
}

export default Dashboard