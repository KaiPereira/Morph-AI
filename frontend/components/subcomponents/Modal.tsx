// States
import { useState } from "react"


type ModalProps = {
    header: string,
    description: string,
    children: any,
    modalState: boolean,
    modalStateHandler: any
}

const Modal = ({
    header,
    description,
    children,
    modalState,
    modalStateHandler
}: ModalProps) => {
    return (
        <div className={`modal-align modal-${modalState ? "open" : "closed"}`}>
            <div className="modal">
                <div className="modal-top">
                    <div>
                        <p>{header}</p>
                        <p>{description}</p>
                    </div>
                    <button onClick={modalStateHandler}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal