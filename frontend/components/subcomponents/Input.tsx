type InputProps = {
    label: string,
    required: boolean,
    placeholder: string,
    type: string,
    onChange: any
}

// This is the first input used for forms
const Input = ({ 
    label, 
    required, 
    placeholder, 
    type,
    onChange
}: InputProps) => {
    return (
        <div className="input-container">
            <p>{required ? "*" : ""} {label.charAt(0).toUpperCase() + label.slice(1)}</p>
            <input type={type} placeholder={placeholder} required={required} name={label} onChange={onChange} />
        </div>
    )
}

export default Input