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
            courseName: courseName
        }, { withCredentials: true })

        return courseProgress.data
    } catch (err) {
        throw err
    }
}


export const prettifyUrl = (str: any) => {
    console.log("Prettify URL: ", str)
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