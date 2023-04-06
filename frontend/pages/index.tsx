// Components
import SignupSignin from "../components/pages/SignupSignin"
import Nav from "../components/common/Nav"
import Dashboard from "../components/pages/Dashboard"


// This is our signup and also our home page
const Home = ({
  loading,
  profileDetails
}: any) => {

  return (
    <>{ !loading &&
      <>
        { profileDetails ?
          <>
            <Nav 
              type="small"
            />
            <Dashboard 
              profileDetails={profileDetails}
            />
          </>
          :
          <SignupSignin type="signup" />
        }
      </>
    }
    </>
  )
}

export default Home