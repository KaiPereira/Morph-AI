// Libraries
import fs from 'fs';
import path from 'path';

// Functions
import { prettifyString } from "../client/courses"


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
        const courses = fs.readdirSync(path.join(process.cwd(), 'courses'));

        const courseData = await Promise.all(courses.map(async (course) => {
            return await getCourse(course)
        }));

        return courseData
    } catch (err) {
        throw err
    }
}


// Server side function
export const getLesson = async (courseName: string, lessonIndex: string) => {
    try {
        var lessonName;
        var fullLessonName;
        var completedPercentage;
        var currentLessonIndex;

        // Reformat the string from url to name
        const courseNameNew = courseName.replaceAll("-", " ")

        // Grab all of the lessons
        const courseLessons = fs.readdirSync(`courses/${courseNameNew}/lessons`, "utf8")

        let allCourseLessons: any = courseLessons.map((lessonCategoryName: string) => {
            const lessons = fs.readdirSync(`courses/${courseNameNew}/lessons/${lessonCategoryName}`, "utf8")

            let lessonCategoryLessons = lessons.map((lesson: string, index: any) => {
                return {
                    name: lesson,
                    category: lessonCategoryName
                }
            })

            lessonCategoryLessons.sort((a: any, b: any) => {
                const numberA = parseInt(a.name.split(' ')[0]);
                const numberB = parseInt(b.name.split(' ')[0]);
    
                return numberA - numberB;
            })

            return lessonCategoryLessons
        })

        allCourseLessons = allCourseLessons.flat()

        // We do this to grab the lesson
        let lessonText: any = allCourseLessons.map((lesson: any, index: any) => {    
            if (index == lessonIndex) {
                lessonName = prettifyString(lesson.name)
                fullLessonName = lesson.name
                // Completed percentage thing when you complete the lesson
                completedPercentage = Math.round(((index + 1) / allCourseLessons.length) * 100)

                currentLessonIndex = index

                const lessonText = fs.readFileSync(`courses/${courseNameNew}/lessons/${lesson.category}/${lesson.name}`, "utf8")

                return lessonText
            }
        })

        lessonText = lessonText.flat().join("")

        // This will split the markdown into the exercise, instructions and preset
        const sectionSplitRegex = /# --(\w+)--/g;
        const matches = [...lessonText.split(sectionSplitRegex)];

        // We need to split the instructions into separate instructions
        const hintsSplitRegex = /(```[\s\S]*?```)/
        const hints = matches[4].split(hintsSplitRegex)
        const hintsFormatted = [];

        for (let i = 0; i < hints.length - 1; i += 2) {
            const description = hints[i].trim();
            let code = hints[i + 1].trim();
            code = code.replaceAll("```", "")
            
            hintsFormatted.push({ description, code });
        }

        // Remove the codeblock backticks from the preset
        let preset = matches[6].replaceAll("`", "")
        // Trim whitespace from start and end
        preset = preset.trim()

        return {
            exercise: matches[2],
            hints: hintsFormatted,
            preset: preset,
            lessonName: lessonName,
            fullLessonName: fullLessonName,
            completedPercentage: completedPercentage,
            currentLessonIndex: currentLessonIndex,
            courseName: courseNameNew
        }
    } catch (err) {
        throw err
    }
}