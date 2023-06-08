type LoadingProps = {
    loading: boolean
}

const Loading = ({
    loading
}: LoadingProps) => {
    return (
        <>
            { loading &&
                <div className="loading-container">
                    <div className="loading">
                        
                    </div>
                </div>
            }
        </>
    )
}