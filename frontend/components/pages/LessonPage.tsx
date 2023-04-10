// Functions
import { 
    markdownToHtml, 
    prettifyString, 
    courseLocked, 
    nextLesson, 
    prettifyUrl,
    toLesson,
    finishCourse 
} from "@/api/client/courses"

// States
import { useEffect, useState } from "react"

// Libraries
import { useRouter } from "next/router";

// Components
import Button from "../subcomponents/Button"



type LessonsFormatProps = {
    progress: string,
    courseData: any
}

const LessonsFormat = ({
    progress,
    courseData
}: LessonsFormatProps) => {
  const [lessonCategories, setLessonCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchLessonCategories = async () => {
        const categories: any = await Promise.all(
            courseData.lessons.map(async (lesson: any, index: any) => {
                const lessonElements = await Promise.all(
                    lesson.lessons.map(async (lesson: any, index: any) => {

                        // Check if the course is locked
                        const locked = await courseLocked(courseData, progress, lesson);

                        // We need to remote dashes in the url and replace them with spaces
                        const nextLessonFunction = async () => {
                            const nextLessonUrl: any = await toLesson(courseData, lesson)
                    
                            router.push(nextLessonUrl)
                        }


                        return (
                            <>{ locked ?
                                <div className="lesson-category-lesson">
                                    {locked ? 
                                        <i className="fa-solid fa-lock"></i> 
                                        : 
                                        <i className="fa-solid fa-check"></i>
                                    }
                                    <p>{prettifyString(lesson)}</p>
                                </div>
                                :
                                <button onClick={nextLessonFunction} key={index} className="lesson-category-lesson-url">
                                    <div className="lesson-category-lesson lesson-category-lesson-hover">
                                        {locked ? 
                                            <i className="fa-solid fa-lock"></i> 
                                            : 
                                            <i className="fa-solid fa-check"></i>
                                        }
                                        <p>{prettifyString(lesson)}</p>
                                    </div>
                                </button>
                            }</>
                        );
                    })
                );

                return (
                    <div className="lesson-category" key={index}>
                        <p className="lesson-category-header">{prettifyUrl(lesson.lessonCategory)}</p>
                        <div className="lesson-category-lessons">{lessonElements}</div>
                    </div>
                );
            })
        );

        setLessonCategories(categories);
    };

    fetchLessonCategories();
  }, [progress]);

  return <>{lessonCategories}</>;
};


type LessonPageProps = {
    onLesson: string,
    lessonData: any,
    courseData: any,
    progress: any,
    courseIsFinished: boolean
}

const LessonPage = ({
    onLesson,
    lessonData,
    courseData,
    progress,
    courseIsFinished
}: LessonPageProps) => {
    const [lessonContent, setLessonContent] = useState<any>(null)
    const router = useRouter();

    useEffect(() => {

        const getHTML = async () => {
            const html = await markdownToHtml(lessonData)

            setLessonContent(html)
        }

        getHTML()
    }, [lessonData])


    const nextLessonFunction = async () => {
        const nextLessonUrl: any = await nextLesson(courseData, onLesson)

        router.push(nextLessonUrl)
    }

    const finishCourseFunction = async () => {
        const finish = await finishCourse(courseData.name)

        router.push("/")
    }
    

    const lessonThumbnail = {backgroundImage: `url(${courseData.thumbnail})`}

    return (
        <main className="lesson-main">
            <div className="lesson-container">
                <div className="lesson-details">
                    <div className="lesson-details-container">
                        <div className="lesson-title">
                            <div className="lesson-title-thumbnail" style={lessonThumbnail}>
                                <img src="/branding/Visual Logo.svg" alt="Morph Logo" />
                            </div>
                            <p>{courseData.name}</p>
                        </div>
                        <div className="lesson-page-lessons">
                            <LessonsFormat 
                                progress={progress}
                                courseData={courseData}
                            />
                        </div>
                    </div>
                </div>
                <div className="lesson-main-content">
                    <div className="lesson-main-content-details">
                        <div className="lesson-main-content-location">
                            <p>Courses</p>
                            <p>&gt;</p>
                            <p>{courseData.name}</p>
                            <p>&gt;</p>
                            <p>{onLesson}</p>
                        </div>
                        <div className="lesson-community-dropdown">
                            <i className="fa-sharp fa-solid fa-share-nodes"></i>
                            <div className="dropdown">
                                <div className="dropdown-container">
                                    <a href="https://twitter.com/_MorphAI" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-twitter"></i>
                                        <p>Twitter</p>
                                    </a>
                                    <a href="https://discord.gg/fMM8SdJ49a" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-discord"></i>
                                        <p>Discord</p>
                                    </a>
                                    <a href="https://www.instagram.com/_morphai/" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                        <p>Instagram</p>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=100091608631606" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-facebook"></i>
                                        <p>Facebook</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: lessonContent }} className="lesson-course-content" />
                    
                    { courseIsFinished ?
                    <Button 
                        onClick={finishCourseFunction}
                        arrow={true}
                        className="lesson-next-button"
                        type="primary"
                    >
                        Finish Course
                    </Button>
                    :
                    <Button 
                        onClick={nextLessonFunction}
                        arrow={true}
                        className="lesson-next-button"
                        type="primary"
                    >
                        Next Lesson
                    </Button>
                    }
                </div>
                <div className="lesson-community">
                    <div className="lesson-community-container">
                        <h3>Need Help?</h3>
                        <p>Join our amazing community of builders and developers!</p>
                        <Button 
                            link="https://discord.gg/fMM8SdJ49a"
                            arrow={true}
                            className="lesson-community-button"
                            type="black"
                        >
                            Join Our Community
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LessonPage