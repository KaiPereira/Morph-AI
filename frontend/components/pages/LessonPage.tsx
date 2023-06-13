// Hooks
import { useEffect, useState, useRef } from "react"

// Functions
import { markdownToHtml, runLessonTest, nextLesson } from "@/api/client/courses"

// Libraries
import Editor from '@monaco-editor/react';
import { useRouter } from "next/router";

// Components
import Button from "../subcomponents/Button"
import Modal from "../subcomponents/Modal"
import Loader from "../subcomponents/Loader"


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
        <div>
            <div className={`lesson-category-tab lesson-category-tab-${mode} lesson-category-tab-${border}`}>
                <i className={icon}></i>
                <p>{text}</p>
            </div>
            <div className="lesson-category-tab-content">
                {children}
            </div>
        </div>
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
    handleRunTests,
    runTestsIsLoading
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
                    disabled={runTestsIsLoading}
                >
                    {!runTestsIsLoading ? "Run Tests" : <Loader className="lessonPageLoader" />}
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
    grabLessonHintCompleted: any,
    setTestsRunning: any,
    addErrorHandler: Function
}

// This is the component for each little lesson instruction that makes up the lesson
const LessonInstruction = ({
    hint,
    codeAssertion,
    runTestSwitch,
    editorCode,
    lessonHintCompletedPosition,
    setLessonHintCompletedHandler,
    grabLessonHintCompleted,
    setTestsRunning,
    addErrorHandler
}: LessonInstructionProps) => {
    const [completed, setCompleted]= useState(grabLessonHintCompleted(lessonHintCompletedPosition))
    const [hintMarkdown, setHintMarkdown] = useState<any>(hint)
    const isMounted = useRef(false)

    useEffect(() => {
        const convertHintToMarkdown = async () => {
            let hintMarkdownPromise: any = await markdownToHtml(hint)
            hintMarkdownPromise = hintMarkdownPromise.value

            setHintMarkdown(hintMarkdownPromise)
        }

        async function test() {
            try {
                const testResult: any = await runLessonTest(editorCode, codeAssertion)

                // We want to put our errors into the error console
                if (testResult.result.error) {
                    addErrorHandler(testResult.result.error)
                    setLessonHintCompletedHandler(lessonHintCompletedPosition, false)
                    // Our loading
                    setTestsRunning((prevStatus: any) => {
                        const updatedStatus = [...prevStatus];
                        updatedStatus[lessonHintCompletedPosition] = false; // Set the test status of the child to true
                        return updatedStatus;
                    });

                    setCompleted(false)

                } else {
                    setLessonHintCompletedHandler(lessonHintCompletedPosition, testResult.result)

                    // Our loading
                    setTestsRunning((prevStatus: any) => {
                        const updatedStatus = [...prevStatus];
                        updatedStatus[lessonHintCompletedPosition] = false; // Set the test status of the child to true
                        return updatedStatus;
                    });

                    setCompleted(testResult.result)
                }
            } catch (err) {
                setLessonHintCompletedHandler(lessonHintCompletedPosition, false)

                setTestsRunning((prevStatus: any) => {
                    const updatedStatus = [...prevStatus];
                    updatedStatus[lessonHintCompletedPosition] = false; // Set the test status of the child to true
                    return updatedStatus;
                });
                
                setCompleted(false)
            }
        }

        if (isMounted.current) {
            test()
        } else {
            isMounted.current = true
        }

        convertHintToMarkdown()
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
            <p dangerouslySetInnerHTML={{ __html: hintMarkdown }}></p>
        </div>
    )
}

type LessonConsoleProps = {
    consoleErrors: string[]
}

const LessonConsole = ({
    consoleErrors
}: LessonConsoleProps) => {
    const [errorElements, setErrorElements] = useState<any>()

    useEffect(() => {
        // Remove console error duplicated
        const uniqueErrors = [...new Set(consoleErrors)]

        setErrorElements(
            uniqueErrors.map((error: String, index: any) => {
            return <p key={index}>{error}</p>
        }))
    }, [consoleErrors])

    return (
        <div className="lesson-console">
            {errorElements}
        </div>
    )
}


const LessonPage = ({
    lessonData,
    courseData
}: any) => {
    const router = useRouter()
    // Use this to reset state
    const dynamicPath = router.asPath

    const [hintElements, changeHintElements] = useState()
    const [editorCode, setEditorCode] = useState(lessonData.preset)
    const [runTestSwitch, setRunTestSwitch] = useState(false)
    const [modalState, setModalState] = useState(false)
    // Use this to track all of the console errors in order...
    const [consoleErrors, setConsoleErrors] = useState<any>([])
    // We're using this to keep track of all completed states of the hints
    const [lessonHintsCompleted, setLessonHintsCompleted] = useState<any>([])
    const [testsRunning, setTestsRunning] = useState<any>([])
    const isMounted = useRef(false)

    const runTestsIsLoading = testsRunning.length > 0 ? testsRunning.every((test: any) => test == true) : false

    // Handle adding errors to the console
    const addErrorHandler = (error: String) => {
        setConsoleErrors((prevState: any) => [...prevState, error])
    }

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
        // Reset the error console
        setConsoleErrors([])
        // Tests don't run on first render so we don't want to set our loading to true
        isMounted.current && setTestsRunning(Array(lessonData.hints.length).fill(true));

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
                        setTestsRunning={setTestsRunning}
                        addErrorHandler={addErrorHandler}
                    />
                )
            })
        )

        isMounted.current = true
    }, [runTestSwitch, dynamicPath])

    // Display the completed modal if all hints are completed
    useEffect(() => {
        // Ensure it doesn't trigger on-start
        if (lessonHintsCompleted.length > 0) {
            lessonHintsCompleted.every((hint: any) => hint == true) ? modalStateHandler() : null
        }
    }, [lessonHintsCompleted, dynamicPath])

    const handleEditorCodeChange = (action: any) => {
        setEditorCode(action);
    }

    const handleRunTests = () => {
        setRunTestSwitch(!runTestSwitch)
    }

    const completeLesson = async () => {
        const nextLessonUrl = await nextLesson(courseData, lessonData)
        router.push(nextLessonUrl).then(() => router.reload());
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
                            runTestsIsLoading={runTestsIsLoading}
                        />
                    </LessonCategorySection>
                    <LessonCategorySection 
                        mode="dark"
                        text="Console"
                        icon="fa-solid fa-terminal"
                    >
                        <LessonConsole 
                            consoleErrors={consoleErrors}
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
                    <p>{lessonData.courseName}</p>
                    <p>{lessonData.completedPercentage}% Done!</p>
                    <Button
                        type="primary"
                        arrow={true}
                        onClick={completeLesson}
                    >
                        Next Lesson
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default LessonPage