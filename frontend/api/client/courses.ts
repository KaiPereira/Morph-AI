// Libraries
import axios from 'axios';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

// Files
import apiUrl from "../../config"



export const onCourse = async (courseName: string) => {
    try {
        const onCourseData = await axios.post(`${apiUrl}/courses/onCourse`, {
            courseName: courseName
        }, { withCredentials: true})

        return onCourseData.data
    } catch (err) {
        throw err
    }
}


export const spaceToDash = (str: any) => {
    return str.replace(/[0-9] /g, "").replaceAll(" ", "-")
} 

export const markdownToHtml = async (markdown: string) => {
    const html = remark()
        .use(remarkHtml)
        .process(markdown)

    return html
}

export const courseLocked = async (courseName: any, onLesson: string, currentLesson: any) => {
    try {
        // First we grab all of the courses and put them in an array
        // Then we grab the index of the course we're on in that array
        // Then we grab all of the courses before that
        // Then we compare it to the currentLesson

        // Grab all of the courses
        let courses = courseName.lessons.map((lessonCategory: any) => {
            return lessonCategory.lessons.map((lesson: any) => {
                return lesson
            })
        })

        courses = courses.flat()

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