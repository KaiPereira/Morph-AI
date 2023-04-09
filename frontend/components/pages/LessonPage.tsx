// Functions
import { markdownToHtml, spaceToDash, courseLocked } from "@/api/client/courses"

// States
import { useEffect, useState } from "react"

// Libraries
import Link from "next/link"

// Components
import Button from "../subcomponents/Button"



type LessonsFormatProps = {
    onLesson: string,
    courseData: any
}

const LessonsFormat = ({
  onLesson,
  courseData
}: LessonsFormatProps) => {
  const [lessonCategories, setLessonCategories] = useState([]);

  useEffect(() => {
    const fetchLessonCategories = async () => {
        const categories: any = await Promise.all(
            courseData.lessons.map(async (lesson: any, index: any) => {
                const lessonElements = await Promise.all(
                    lesson.lessons.map(async (lesson: any, index: any) => {

                        // Check if the course is locked
                        const locked = await courseLocked(courseData, onLesson, lesson);

                        // We need to remote dashes in the url and replace them with spaces
                        const lessonUrl = `/courses/${spaceToDash(courseData.name)}/${spaceToDash(lesson)}`;

                        return (
                            <>{ locked ?
                                <div className="lesson-category-lesson">
                                    {locked ? 
                                        <i className="fa-solid fa-lock"></i> 
                                        : 
                                        <i className="fa-solid fa-check"></i>
                                    }
                                    <p>{lesson}</p>
                                </div>
                                :
                                <Link href={lessonUrl} key={index} className="lesson-category-lesson-url">
                                    <div className="lesson-category-lesson lesson-category-lesson-hover">
                                        {locked ? 
                                            <i className="fa-solid fa-lock"></i> 
                                            : 
                                            <i className="fa-solid fa-check"></i>
                                        }
                                        <p>{lesson}</p>
                                    </div>
                                </Link>
                            }</>
                        );
                    })
                );

                return (
                    <div className="lesson-category" key={index}>
                    <p className="lesson-category-header">{lesson.lessonCategory}</p>
                    <div className="lesson-category-lessons">{lessonElements}</div>
                    </div>
                );
            })
        );

        setLessonCategories(categories);
    };

    fetchLessonCategories();
  }, [courseData]);

  return <>{lessonCategories}</>;
};


type LessonPageProps = {
    onLesson: string,
    lessonData: any,
    courseData: any
}

const LessonPage = ({
    onLesson,
    lessonData,
    courseData
}: LessonPageProps) => {
    const [lessonContent, setLessonContent] = useState<any>(null)

    useEffect(() => {

        const getHTML = async () => {
            const html = await markdownToHtml(lessonData)

            setLessonContent(html)
        }

        getHTML()
    }, [lessonData])


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
                                onLesson={onLesson}
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