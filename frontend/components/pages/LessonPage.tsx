// Hooks
import { useEffect, useState, useRef } from "react"

// Functions
import { markdownToHtml, runLessonTest } from "@/api/client/courses"

// Libraries
import Editor from '@monaco-editor/react';

// Components
import Button from "../subcomponents/Button"


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
    return (
        <>
            <Editor 
                onChange={handleEditorCodeChange} 
                className="lesson-code-editor"
                theme="vs-dark" 
                defaultLanguage="python" 
                value={code} 
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
    editorCode: string
}

const LessonInstruction = ({
    hint,
    codeAssertion,
    runTestSwitch,
    editorCode
}: LessonInstructionProps) => {
    const [completed, setCompleted] = useState<any>()
    const isMounted = useRef(false)

    useEffect(() => {
        async function test() {
            const testResult = await runLessonTest(editorCode, codeAssertion)

            setCompleted(testResult.result)
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

    useEffect(() => {
        changeHintElements(
            lessonData.hints.map((hint: any, index: any) => {
                return (
                    <LessonInstruction 
                        key={index}
                        hint={hint.description}
                        codeAssertion={hint.code}
                        runTestSwitch={runTestSwitch}
                        editorCode={editorCode}
                    />
                )
            })
        )
    }, [runTestSwitch])

    const handleEditorCodeChange = (action: any) => {
        setEditorCode(action);
    }

    const handleRunTests = () => {
        setRunTestSwitch(!runTestSwitch)
    }
    return (
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
    )
}

export default LessonPage