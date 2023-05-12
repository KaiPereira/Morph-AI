// Components
import Button from "../subcomponents/Button"

// Libraries
import Image from "next/image"

// States
import { useState, useEffect } from "react"

const HomePage = () => {
    const [animationElements, changeAnimationElements] = useState()

    return (
        <main className="home-main">
            <div className="home-main-container">
                <div className="home-main-content">
                    <h1>Easily Learn AI/ML Programming</h1>
                    <p className="home-main-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sed urna sit amet dapibus. Pellentesque ipsum</p>
                    <div className="home-main-content-buttons">
                        <Button
                            arrow={true}
                            type="primary"
                            link="/register"
                        >
                            Get Started
                        </Button>
                        <Button
                            type="light"
                            link="/login"
                        >
                            Login
                        </Button>
                    </div>
                    <div className="home-main-content-users">
                        <div className="home-main-content-users-container">
                            <Image src="/images/avatar1.png" alt="user image" width="49" height="49" />
                            <Image src="/images/avatar2.png" alt="user image" width="49" height="49" />
                            <Image src="/images/avatar3.png" alt="user image" width="49" height="49" />
                            <Image src="/images/avatar4.png" alt="user image" width="49" height="49" />
                            <Image src="/images/avatar5.png" alt="user image" width="49" height="49" />
                        </div>
                        <p className="home-main-content-users-text">Explore our courses</p>
                    </div>
                </div>
                <div className="home-main-animation">
                    <div className="home-main-animation-container">
                        <div style={{backgroundImage: "url(/images/ai_image1.png)"}}>
                            <div>Python Mastery</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image2.png)"}}>
                            <div>Handwritten Digit Recognizer</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image3.png)"}}>
                            <div>Flower Classification</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image4.png)"}}>
                            <div>Predict House Prices</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image5.png)"}}>
                            <div>Python Mastery</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image6.png)"}}>
                            <div>Handwritten Digit Recognizer</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image7.png)"}}>
                            <div>Flower Classification</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image8.png)"}}>
                            <div>Predict House Prices</div>
                        </div>
                    </div>
                    <div className="home-main-animation-container">
                        <div style={{backgroundImage: "url(/images/ai_image1.png)"}}>
                            <div>Python Mastery</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image2.png)"}}>
                            <div>Handwritten Digit Recognizer</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image3.png)"}}>
                            <div>Flower Classification</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image4.png)"}}>
                            <div>Predict House Prices</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image5.png)"}}>
                            <div>Python Mastery</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image6.png)"}}>
                            <div>Handwritten Digit Recognizer</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image7.png)"}}>
                            <div>Flower Classification</div>
                        </div>
                        <div style={{backgroundImage: "url(/images/ai_image8.png)"}}>
                            <div>Predict House Prices</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}   

export default HomePage