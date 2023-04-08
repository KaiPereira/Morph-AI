// Libraries
import fs from 'fs';
import axios from 'axios';

// Files
import apiUrl from "../config"


// Server side function
export const getCourseTime = async (courseName: string) => {
    try {
        const lessons = fs.readdirSync(`courses/${courseName}/lessons`, "utf8")
        
        const lessonTextArray = lessons.map((lessonCategory: string) => {
            const lessonFolder = fs.readdirSync(`courses/${courseName}/lessons/${lessonCategory}`, "utf8")

            return lessonFolder.map((lesson: string) => {
                const lessonText = fs.readFileSync(`courses/${courseName}/lessons/${lessonCategory}/${lesson}`, "utf8")

                return lessonText
            })
        })

        const lessonText = lessonTextArray.flat().join(" ")

        const readingTime = (text: any) => {
            // Get the WPM in minutes
            const wpm = 225
            const words = text.split(" ").length
            const time = Math.ceil(words / wpm)

            // Convert minutes to hours and minutes 
            const hours = Math.floor(time / 60)
            const minutes = time % 60

            return `${hours ? `${hours}h ` : ""}${minutes}m`
        }

        return readingTime(lessonText)

    } catch (err) {
        throw err
    }
}

// Server side function
export const getCourse = async (courseName: string) => {
    try {
        // Isolate the course details
        const courseDetails = JSON.parse(fs.readFileSync(`courses/${courseName}/details.json`, "utf8"))

        // Isolate the lessons
        const lessons = fs.readdirSync(`courses/${courseName}/lessons`, "utf8")

        // grab the course time using the function using the courseName
        const courseTime = await getCourseTime(courseName)

        // Map over all of the lessonCategories and grab their lessons and name
        const lessonsCourses = lessons.map((lessonCategory: string) => {
            const lessons = fs.readdirSync(`courses/${courseName}/lessons/${lessonCategory}`, "utf8")

            return {
                lessonCategory: lessonCategory,
                lessons: JSON.stringify(lessons)
            }
        })

        // Return all of the info as a json object
        const courseData = {
            ...courseDetails,
            courseTime: courseTime,
            lessons: lessonsCourses
        }

        return courseData
    } catch (err) {
        throw err
    }
}

// Server side function
export const getAllCourses = async () => {
    try {
        const courses = fs.readdirSync("courses");

        const courseData = await Promise.all(courses.map(async (course) => {
            return await getCourse(course)
        }));

        return courseData
    } catch (err) {
        throw err
    }
}

export const onCourse = async (courseName: string) => {
    try {
        const course = await axios.post(`${apiUrl}/courses/onCourse`, {
            courseName: courseName
        }, { withCredentials: true})

        return course
    } catch (err) {
        throw err
    }
}