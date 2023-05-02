// States
import { useEffect, useState } from "react"

// Functions
import { filterCourses } from "../../api/client/courses"

// Components
import Course from "../subcomponents/Course"


const CoursesFilter = ({
    filters,
    changeFilterHandler,
    filterState
}: any) => {
    const [filterElements, setFilterElements] = useState<any>()

    useEffect(() => {
        const filterElementsMapped = filters.map((filter: any, index: any) => {
            return (
                <button key={index} onClick={() => changeFilterHandler(filter)} className={filterState == filter ? "courses-filter-button-active" : ""}>
                    <p>{filter}</p>
                </button>
            )
        })

        setFilterElements(filterElementsMapped)
    }, [filterState])

    return (
        <div className="courses-filter">
            {filterElements}
        </div>
    )
}


type CoursesPage = {
    courses: any
}

const CoursesPage = ({
    courses
}: CoursesPage) => {
    const [filter, changeFilter] = useState("All")
    const [filteredCourseElements, setFilteredCourseElements] = useState<any>(null)

    const changeFilterHandler = (filter: any) => {
        changeFilter(filter)
    }

    useEffect(() => {
        const getFilteredCourses = async () => {
            const filteredCourses = await filterCourses(courses, filter)

            const filteredCourseElementsMapped = filteredCourses.map((course: any, index: any) => {
                return (
                    <Course 
                        key={index}
                        thumbnail={course.thumbnail}
                        difficulty={course.difficulty}
                        title={course.name}
                        description={course.description}
                        tags={course.tags}
                        courseTime={course.courseTime}
                        icon={course.icon}
                    />
                )
            })

            setFilteredCourseElements(filteredCourseElementsMapped)
        }

        getFilteredCourses()
    }, [filter])

    return (
        <main className="courses-container">
            <div className="courses">
                <h1>Search Projects</h1>
                <CoursesFilter 
                    changeFilterHandler={changeFilterHandler}
                    filters={["All", "Beginner", "Intermediate", "Advanced"]}
                    filterState={filter}
                />
                <div className="courses-list">
                    {filteredCourseElements}
                </div>
            </div>
        </main>
    )
}

export default CoursesPage