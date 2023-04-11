// Libraries
import axios from 'axios';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

// Files
import apiUrl from "../../config"


export const fetchLessonIndex = async (
    course: any,
    lessonName: any,
) => {
    try {
        // Grab all of the courses
        let lessons = course.lessons.map((lessonCategory: any) => {
            return lessonCategory.lessons.map((lesson: any) => {
                return lesson
            })
        })

        lessons = lessons.flat()

        // Grab the index of the course we're on
        let courseIndex = lessons.map((lesson: any, index: number) => {
            if (lesson.includes(lessonName)) {
                return index
            }
        })

        // Get rid of undefined
        courseIndex = courseIndex.filter((index: any) => {
            return index != undefined
        })

        return courseIndex[0]
    } catch (err) {
        throw err
    }
}


export const onCourse = async (courseName: string) => {
    try {
        const onCourseData = await axios.post(`${apiUrl}/courses/onCourse`, {
            currentCourse: courseName
        }, { withCredentials: true})

        return onCourseData.data
    } catch (err) {
        throw err
    }
}


export const courseProgress = async (courseName: string) => {
    try {
        const courseProgress = await axios.post(`${apiUrl}/courses/course-progress`, {
            currentCourse: courseName
        }, { withCredentials: true })

        return courseProgress.data
    } catch (err) {
        throw err
    }
}


export const prettifyUrl = (str: any) => {
    return str.replace(/[0-9] /g, "").replaceAll(" ", "-")
} 

export const prettifyString = (str: any) => {
    return str.replace(/[0-9] /g, "").replace(".md", "")
} 

export const markdownToHtml = async (markdown: string) => {
    const html = remark()
        .use(remarkHtml)
        .process(markdown)

    return html
}

export const courseLocked = async (courseName: any, courseProgress: string, currentLesson: any) => {
    try {
        // First we grab all of the courses and put them in an array
        // Then we grab the index of the course we're on in that array
        // Then we grab all of the courses before that
        // Then we compare it to the currentLesson (Current lesson is the index of the lesson)

        // Grab all of the courses
        let courses = courseName.lessons.map((lessonCategory: any) => {
            return lessonCategory.lessons.map((lesson: any) => {
                return lesson
            })
        })

        courses = courses.flat()
        const onLesson = courses[courseProgress]

        // Grab the index of the course we're on
        let courseIndex = courses.map((course: any, index: number) => {
            if (course.includes(onLesson)) {
                return index
            }
        })

        // Remove the undefined
        courseIndex = courseIndex.filter((course: any) => course !== undefined)

        // Grab all of the courses before the course we're on and the one we're on
        const coursesBefore = courses.slice(0, courseIndex[0] + 1)

        // Compare the courses before to the currentLesson
        const courseLocked = !coursesBefore.includes(currentLesson)

        return courseLocked
    } catch (err) {
        throw err
    }
}

export const nextLesson = async (course: any, lessonName: any) => {
    try {
        const lessonIndex = await fetchLessonIndex(course, lessonName)

        // We grab the progression so that we only update the course progress if the lesson is the next one
        let courseProgression = await courseProgress(course.name)
        courseProgression = courseProgression.lessonOn

        console.log(courseProgression, lessonIndex)

        if (courseProgression === lessonIndex) {
            const updateCurrentLesson = await axios.post(`${apiUrl}/courses/update-course-progress`, {
                currentCourse: course.name,
                onLesson: lessonIndex + 1
            }, { withCredentials: true })
        }


        const lessonUrl = `/courses/${prettifyUrl(course.name)}/${lessonIndex + 1}`
        
        return lessonUrl
    } catch (err) {
        throw err
    }
}

export const toLesson = async (course: any, lessonName: any) => {
    try {
        const lessonIndex = await fetchLessonIndex(course, lessonName)

        const lessonUrl = `/courses/${prettifyUrl(course.name)}/${lessonIndex}`

        return lessonUrl
    } catch (err) {
        throw err
    }
}

export const getLessonName = async (courseName: any, lessonIndex: number) => {
    try {
        let courses = courseName.lessons.map((lessonCategory: any) => {
            return lessonCategory.lessons.map((lesson: any) => {
                return lesson
            })
        })

        courses = courses.flat()
        
        const lesson = courses[lessonIndex]

        return lesson
    } catch (err) {
        throw err
    }
}

export const courseFinished = async (courseName: any, courseProgress: number) => {
    try {
        let courses = courseName.lessons.map((lessonCategory: any) => {
            return lessonCategory.lessons.map((lesson: any) => {
                return lesson
            })
        })

        courses = courses.flat()

        let courseProgressIndex = courses.map((course: any, index: number) => {
            if (course.includes(courseProgress)) {
                return index
            }
        })

        courseProgressIndex = courseProgressIndex.filter((course: any) => course !== undefined)

        const courseFinished = courseProgressIndex[0] === courses.length - 1

        return courseFinished
    } catch (err) {
        throw err
    }
}

export const finishCourse = async (courseName: any) => {
    try {
        const finishedCourse = await axios.post(`${apiUrl}/courses/finished-course`, {
            currentCourse: courseName
        }, { withCredentials: true })

        return finishedCourse.data
    } catch (err) {
        throw err
    }
}

export const getUserCourses = async (allCourses: any, user: any) => {
    try {
        let userCourses: any = []
        let finishedUserCourses: any = []


        allCourses.map((course: any) => {
            user.courses.map((userCourse: any) => {
                console.log(userCourse)

                if ((course.name === userCourse.title) && (!userCourse.finished)) {
                    userCourses.push(course)
                } else if ((course.name === userCourse.title) && (userCourse.finished)) {
                    finishedUserCourses.push(course)
                }
            })
        })

        userCourses = userCourses.flat()
        userCourses = userCourses.filter((course: any) => course !== undefined)
        finishedUserCourses = finishedUserCourses.flat()
        finishedUserCourses = finishedUserCourses.filter((course: any) => course !== undefined)

        return {
            current: userCourses,
            finished: finishedUserCourses
        }
    } catch (err) {
        throw err
    }
}

export const getDashboardStats = async (profileDetails: any) => {
    try {
        // Grab all of the lessons completed by the user by adding one to lessonOn to each course
        let lessonsCompleted = 0
    
        profileDetails.courses.map((course: any) => {
            lessonsCompleted += course.lessonOn + 1
        })

        const points = lessonsCompleted * 25
        const dayStreak = profileDetails.dayStreak
        const dayStreakString = dayStreak === 1 ? `${dayStreak} day` : `${dayStreak} days`


        return {
            points: points,
            lessonsCompleted: lessonsCompleted,
            dayStreak: dayStreakString
        }
    } catch (err) {
        throw err
    }
}

export const filterCourses = async (courses: any, filter: string) => {
    try {
        let filteredCourses: any = []

        if (filter === "All") {
            filteredCourses = courses
        } else {
            courses.map((course: any) => {
                if (course.difficulty === filter) {
                    filteredCourses.push(course)
                }
            })
        }

        return filteredCourses
    } catch (err) {
        throw err
    }
}