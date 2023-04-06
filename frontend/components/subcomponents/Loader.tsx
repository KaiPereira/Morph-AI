import { ColorRing } from  'react-loader-spinner'


const Loader = () => {
    return (
        <div className="loader">
            <ColorRing
                visible={true}
                height="50"
                width="50"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#4633FF', '#4633FF', '#4633FF', '#4633FF', '#4633FF']}
            />
        </div>
    )
}

export default Loader