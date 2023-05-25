// Hooks
import { useEffect, useState, useRef } from "react"

// Functions
import { markdownToHtml, runLessonTest, prettifyUrl } from "@/api/client/courses"

// Libraries
import Editor from '@monaco-editor/react';

// Components
import Button from "../subcomponents/Button"
import Modal from "../subcomponents/Modal"


type lessonCategorySectionProps = {
    mode: "light" | "dark",
    text: string,
    icon: string,
    border?: "double" | "bottom",
    children: any
}

const LessonCategorySection = ({
    mode,
    text,
    icon,
    border,
    children
}: lessonCategorySectionProps) => {
    return (
        <>
            <div className={`lesson-category-tab lesson-category-tab-${mode} lesson-category-tab-${border}`}>
                <i className={icon}></i>
                <p>{text}</p>
            </div>
            <div className="lesson-category-tab-content">
                {children}
            </div>
        </>
    )
}



const LessonMarkdown = ({
    exercise
}: any) => {
    const [exerciseHtml, setExerciseHtml] = useState<any>()

    useEffect(() => {
        async function getHTML() {
            const exerciseHtmlPromise = await markdownToHtml(exercise)

            setExerciseHtml(exerciseHtmlPromise)
        }

        getHTML()
    }, [])


    return (
        <div className="lesson-markdown">
            <div dangerouslySetInnerHTML={{ __html: exerciseHtml }}></div>
        </div>
    )
}

const LessonCode = ({
    code,
    handleEditorCodeChange,
    defaultCode,
    handleRunTests
}: any) => {
    const editorOptions: any = {
        minimap: {
            enabled: false
        }
    }

    return (
        <>
            <Editor 
                onChange={handleEditorCodeChange} 
                className="lesson-code-editor"
                theme="vs-dark" 
                defaultLanguage="python" 
                value={code} 
                options={{...editorOptions}}
            />
            <div className="lesson-code-buttons">
                <Button
                    type="primary"
                    onClick={handleRunTests}
                >
                    Run Tests
                </Button>
                <button className="lesson-code-buttons-reset" onClick={() => handleEditorCodeChange(defaultCode)}>
                    <i className="fa-solid fa-undo"></i>
                </button>
            </div>
        </>
    )
}


type LessonInstructionProps = {
    hint: string,
    codeAssertion: string,
    runTestSwitch: boolean,
    editorCode: string,
    lessonHintCompletedPosition: number,
    setLessonHintCompletedHandler: any,
    grabLessonHintCompleted: any
}

const LessonInstruction = ({
    hint,
    codeAssertion,
    runTestSwitch,
    editorCode,
    lessonHintCompletedPosition,
    setLessonHintCompletedHandler,
    grabLessonHintCompleted
}: LessonInstructionProps) => {
    const [completed, setCompleted ]= useState(grabLessonHintCompleted(lessonHintCompletedPosition))
    const isMounted = useRef(false)

    useEffect(() => {
        async function test() {
            try {
                const testResult = await runLessonTest(editorCode, codeAssertion)

                setLessonHintCompletedHandler(lessonHintCompletedPosition, testResult.result)
                setCompleted(testResult.result)
            } catch (err) {
                setLessonHintCompletedHandler(lessonHintCompletedPosition, false)
                setCompleted(false)
            }
        }

        if (isMounted.current) {
            test()
        } else {
            isMounted.current = true
        }
    }, [runTestSwitch])


    return (
        <div className="lesson-instruction">
            <div>
                {typeof completed == "undefined" ?
                    <i className="fa-solid fa-flask"></i>
                 : completed == false ? 
                    <i className="fa-solid fa-xmark"></i>
                 :
                    <i className="fa-solid fa-check"></i>
                }
            </div>
            <p>{hint}</p>
        </div>
    )
}


const LessonPage = ({
    lessonData
}: any) => {
    const [hintElements, changeHintElements] = useState()
    const [editorCode, setEditorCode] = useState(lessonData.preset)
    const [runTestSwitch, setRunTestSwitch] = useState(false)
    const [modalState, setModalState] = useState(false)
    // We're using this to keep track of all completed states of the hints
    const [lessonHintsCompleted, setLessonHintsCompleted] = useState<any>([])

    console.log(lessonData)


    const modalStateHandler = () => {
        setModalState(!modalState)
    }

    // We need all of this gibberish so we can use the parent to keep track of the lesson hints completed state
    const setLessonHintCompletedHandler = (index: any, completed: any) => {
        setLessonHintsCompleted((prevState: any) => {
            const newCompletedStates = [...prevState];
            newCompletedStates[index] = completed;
            return newCompletedStates;
        })
    }

    const grabLessonHintCompleted = (index: any) => {
        return lessonHintsCompleted[index]
    }

    useEffect(() => {
        changeHintElements(
            lessonData.hints.map((hint: any, index: any) => {
                // Set the completed state of the hint
                setLessonHintsCompleted((prevState: any) => {
                    const newCompletedStates = [...prevState];
                    newCompletedStates[index] = false;
                    return newCompletedStates;
                })

                return (
                    <LessonInstruction 
                        key={index}
                        hint={hint.description}
                        codeAssertion={hint.code}
                        runTestSwitch={runTestSwitch}
                        editorCode={editorCode}
                        lessonHintCompletedPosition={index}
                        setLessonHintCompletedHandler={setLessonHintCompletedHandler}
                        grabLessonHintCompleted={grabLessonHintCompleted}
                    />
                )
            })
        )
    }, [runTestSwitch])

    // Display the completed modal if all hints are completed
    useEffect(() => {
        // Ensure it doesn't trigger on-start
        if (lessonHintsCompleted.length > 0) {
            lessonHintsCompleted.every((hint: any) => hint == true) ? modalStateHandler() : null
        }
    }, [lessonHintsCompleted])

    const handleEditorCodeChange = (action: any) => {
        setEditorCode(action);
    }

    const handleRunTests = () => {
        setRunTestSwitch(!runTestSwitch)
    }
    return (
        <>
            <main className="lesson-main">
                <div className="lesson-content">
                    <LessonCategorySection 
                        mode="light"
                        text="Exercise"
                        icon="fa-solid fa-book"
                        border="bottom"
                    >
                        <LessonMarkdown 
                            exercise={lessonData.exercise}
                        />
                    </LessonCategorySection>
                    <LessonCategorySection 
                        mode="light"
                        text="Exercise"
                        icon="fa-solid fa-book"
                        border="bottom"
                    >
                        <div className="lesson-instructions">
                            {hintElements}
                        </div>
                    </LessonCategorySection>
                </div>
                <div className="lesson-code-env">
                    <LessonCategorySection 
                        mode="dark"
                        text="Solution"
                        icon="fa-regular fa-square-check"
                    >
                        <LessonCode 
                            code={editorCode}
                            handleEditorCodeChange={handleEditorCodeChange}
                            defaultCode={lessonData.preset}
                            handleRunTests={handleRunTests}
                        />
                    </LessonCategorySection>
                </div>
            </main>
            <main className="lesson-error">
                <h1>We&apos;re sorry, please continue on a computer!</h1>
                <p>Morph is currently unavailable on mobile as of this moment. Programming on a phone is really difficult too. Don&apos;t worry, we&apos;re currently working on making it available!</p>
                <img src="https://media4.giphy.com/media/CHSHxWaOEmlFwEVRmk/giphy.gif?cid=ecf05e47m8wokwyjrus956du5s9nwk8gt1nmle0yiomxzmga&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Kitty Giphy" />
            </main>
            <Modal 
                header="Let&apos;s go! Nice job!"
                description="Nice job completing that lesson! Let's continue!"
                modalStateHandler={modalStateHandler}
                modalState={modalState}
            >
                <div className="lesson-modal">
                    <div className="lesson-modal-checkmark">
                        <i className="fa-solid fa-check"></i>
                    </div>
                    <p>{lessonData.name}</p>
                    <p>{lessonData.completedPercentage}% Done!</p>
                    <Button
                        type="primary"
                        arrow={true}
                        link={`/courses/${prettifyUrl(lessonData.courseName)}/${lessonData.currentLessonIndex + 1}`}
                    >
                        Next Lesson
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default LessonPage