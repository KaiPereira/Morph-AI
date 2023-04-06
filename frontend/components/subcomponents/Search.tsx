type SearchProps = {
    placeholder: string,
    icon?: any,
    onChange?: any
}


// This is the second input (used right now in the dashboard) that has an icon on the right side
const Search = ({ 
    placeholder, 
    icon, 
    onChange
}: SearchProps) => {
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder} />
            <div>
                <i className={icon}></i>
            </div>
        </div>
    )
}

export default Search