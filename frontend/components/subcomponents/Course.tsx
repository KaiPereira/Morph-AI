// States
import { useState } from "react"

type CourseProps = {
    id: string
}


const Course = ({
    id
}: CourseProps) => {
    const [courseDetails, changeCourseDetails] = useState({
        thumbnail: "https://c4.wallpaperflare.com/wallpaper/992/545/78/abstract-shapes-hd-wallpaper-preview.jpg",
        difficulty: "Beginner",
        title: "Linear Regression with Sklearn",
        description: "Lorem ipsum dolor sit amet, cutectur adipiscing elit. Proin eget facilisis urna dolor sit amet.",
        peopleRegistered: 4126
    })


    const abbreviateNum = (n: any) => {
        if (n < 1e3) return n;
        if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
    };


    return (
        <div className="course">
            <img src={courseDetails.thumbnail} alt="thumbnail" className="course-thumbnail" />
            <div className="course-difficulty">
                <p>{courseDetails.difficulty}</p>
            </div>
            <div className="course-info">
                <p className="course-header">{courseDetails.title}</p>
                <p className="course-description">{courseDetails.description}</p>
                <div className="course-info-extra">
                    <div className="course-info-extra-people">
                        <div className="course-info-extra-people-icons">
                            <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80"></img>
                            <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80"></img>
                            <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80"></img>
                        </div>
                        <p>{abbreviateNum(courseDetails.peopleRegistered)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Course