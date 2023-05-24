type ModalProps = {
    header: string,
    description: string,
    children: any
}

const Modal = ({
    header,
    description,
    children
}: ModalProps) => {
    return (
        <div className="modal-align">
            <div className="modal">

            </div>
        </div>
    )
}

export default Modal