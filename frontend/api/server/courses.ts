// Libraries
import fs from 'fs';


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

        const courseNameNew = courseName.replaceAll("-", " ")

        // Isolate the course details
        const courseDetails = JSON.parse(fs.readFileSync(`courses/${courseNameNew}/details.json`, "utf8"))

        // Isolate the lessons
        const lessons = fs.readdirSync(`courses/${courseNameNew}/lessons`, "utf8")

        // grab the course time using the function using the courseName
        const courseTime = await getCourseTime(courseNameNew)

        // Map over all of the lessonCategories and grab their lessons and name
        const lessonsCourses = lessons.map((lessonCategory: string) => {
            const lessons = fs.readdirSync(`courses/${courseNameNew}/lessons/${lessonCategory}`, "utf8")

            return {
                lessonCategory: lessonCategory,
                lessons: lessons
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


// Server side function
export const getLesson = async (courseName: string, lessonName: string) => {
    try {

        // The URL has the dashes instead of spaces
        const courseNameNew = courseName.replaceAll("-", " ")
        const lessonNameNew = lessonName.replaceAll("-", " ")

        const courseLessons = fs.readdirSync(`courses/${courseNameNew}/lessons`, "utf8")

        // Grab the lesson text
        let lessonText: any = courseLessons.map((lessonCategoryName: string) => {

            const lessonCategory = fs.readdirSync(`courses/${courseNameNew}/lessons/${lessonCategoryName}`, "utf8")

            // We need to check if lesson includes the lessonName
            // Because the lessonName doesn't include the number
            return lessonCategory.map((lesson: string) => {
                if (lesson.includes(lessonNameNew)) {
                    const lessonText = fs.readFileSync(`courses/${courseNameNew}/lessons/${lessonCategoryName}/${lesson}`, "utf8")

                    return lessonText
                }
            })
        })

        lessonText = lessonText.flat().join("")

        return lessonText
    } catch (err) {
        throw err
    }
}