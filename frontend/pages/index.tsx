// Components
import SignupSignin from "../components/pages/SignupSignin"
import Nav from "../components/common/Nav"
import Dashboard from "../components/pages/Dashboard"

// API functions
import { fetchProfileDetails } from "../api/user"

// States
import { useEffect, useState } from "react"


// This is our signup and also our home page
const Home = () => {
  const [profileDetails, changeProfileDetails] = useState<any>()
  const [loading, changeLoading] = useState(true)

  useEffect(() => {
    changeLoading(true)

    fetchProfileDetails()
      .then(data => {
        changeProfileDetails(data)
        changeLoading(false)
      })
      .catch(err => {
        console.log(err)
        changeLoading(false)
      }) 
  }, [])

  return (
    <>{ !loading &&
      <>
        { profileDetails ?
          <>
            <Nav 
              type="small"
            />
            <Dashboard />
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