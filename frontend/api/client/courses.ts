// Libraries
import axios from 'axios';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

// Files
const apiUrl = process.env.NEXT_PUBLIC_API_URL


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

export const courseLocked = async (courseName: any, courseProgress: any, currentLesson: any) => {
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

export const nextLesson = async (course: any, lesson: any) => {
    try {
        const lessonFinished = await courseFinished(course, lesson)
        console.log(lessonFinished)

        if (lessonFinished) {
            return "/"
        } else {
            const lessonIndex = await fetchLessonIndex(course, lesson.lessonName)

            // We grab the progression so that we only update the course progress if the lesson is the next one
            let courseProgression = await courseProgress(course.name)
            courseProgression = courseProgression.lessonOn

            if (courseProgression === lessonIndex) {
                const updateCurrentLesson = await axios.post(`${apiUrl}/courses/update-course-progress`, {
                    currentCourse: course.name,
                    onLesson: lessonIndex + 1
                }, { withCredentials: true })
            }


            const lessonUrl = `/courses/${prettifyUrl(course.name)}/${lessonIndex + 1}`
            
            return lessonUrl
        }
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

export const courseFinished = async (course: any, lesson: any) => {
    try {
        console.log(course, courseProgress)
        let courses = course.lessons.map((lessonCategory: any) => {
            return lessonCategory.lessons.map((lesson: any) => {
                return lesson
            })
        })

        courses = courses.flat()

        const courseFinished = lesson.currentLessonIndex == courses.length - 1

        if (courseFinished) {
            const finishedCourse = await axios.post(`${apiUrl}/courses/finished-course`, {
                currentCourse: course
            }, { withCredentials: true })
        }

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
        let unfinishedUserCourses: any = allCourses


        allCourses.map((course: any) => {
            user.courses.map((userCourse: any) => {
                if ((course.name === userCourse.title) && (!userCourse.finished)) {
                    // Add it to the user's courses
                    userCourses.push(course)
                    // Remove the course to unfinished courses
                    unfinishedUserCourses = unfinishedUserCourses.filter((c: any) => c.name !== course.name)
                } else if ((course.name === userCourse.title) && (userCourse.finished)) {
                    // If finished add it here
                    finishedUserCourses.push(course)
                    // Remove the course to unfinished courses
                    unfinishedUserCourses = unfinishedUserCourses.filter((c: any) => c.name !== course.name)
                }
            })
        })

        userCourses = userCourses.flat()
        userCourses = userCourses.filter((course: any) => course !== undefined)
        finishedUserCourses = finishedUserCourses.flat()
        finishedUserCourses = finishedUserCourses.filter((course: any) => course !== undefined)

        return {
            current: userCourses,
            finished: finishedUserCourses,
            unfinished: unfinishedUserCourses
        }
    } catch (err) {
        throw err
    }
}

export const runLessonTest = async (editorCode: any, testCode: any) => {
    try {
        // We'll use this variable to check if our code is good
        // Here, we're running editor code, setting editorCode to a variable too, then running our test on these
        // We use the replaceAll in the editorCode in case that someone puts triple quotes inside of the editorCode
        const codeVariable = `\ncode="""\n${editorCode.replaceAll('"""', '\\"""')}\n"""\n`
        const fullCodeCheck = `
${editorCode}${codeVariable}${testCode}
        `

        const lessonTestWorker = new Worker(new URL('../../workers/runLessonTest', import.meta.url));
        let resolveFn: (data: any) => void; // Promise resolve function

        // Worker response
        const resultPromise = new Promise((resolve) => {
            resolveFn = resolve;
            lessonTestWorker.onmessage = (event) => {
                if (event.data.error) {
                    console.log("ERROR MESSAGE RECEIVED FROM WORKER: ", event.data)
                    resolve(false)
                } else {
                    console.log("SUCCESS MESSAGE RECEIVED FROM WORKER: ", event.data)
                    resolve(event.data); // Resolve the promise with the worker data
                }
            };
        });

        // Worker error
        lessonTestWorker.onerror = (event) => {
            if (event instanceof Event) {
                console.log('🍎 Error message received from worker: ', event);
                throw event;
            }

            console.log('🍎 Unexpected error: ', event);
            throw event;
        };

        lessonTestWorker.postMessage(fullCodeCheck);

        const cleanup = () => {
            lessonTestWorker.terminate();
        };

        return {
            result: await resultPromise, // Wait for the promise to resolve
            cleanup: cleanup // Return the cleanup function
        };
    } catch (err) {
        throw err;
    }
}