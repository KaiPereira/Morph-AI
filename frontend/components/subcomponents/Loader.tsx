import { ThreeDots } from  'react-loader-spinner'

type LoaderProps = {
    className?: string
}

const Loader = ({
    className
}: LoaderProps) => {
    return (
        <div className={className}>
            <ThreeDots 
                height="10" 
                width="20" 
                radius="9"
                color="#FFF" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </div>
    )
}

export default Loader