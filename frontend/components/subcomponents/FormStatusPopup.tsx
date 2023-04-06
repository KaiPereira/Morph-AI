type FormStatusPopupProps = {
    type: "error" | "success",
    className?: string,
    children?: any,
    setState?: any
}

const FormStatusPopup = ({ 
    type,
    className,
    children,
    setState 
}: FormStatusPopupProps) => {


    return (
        <>
            { children &&
            <div className={`form-status-popup ${className} form-status-${type}`}>
                <p>{children}</p>
                <button onClick={() => setState()}>
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
            }
        </>
    )
}

export default FormStatusPopup