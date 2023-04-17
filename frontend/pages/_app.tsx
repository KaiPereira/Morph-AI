// Styles
import '@/styles/globals.scss'

// Libraries
import type { AppProps } from 'next/app'
import Head from "next/head"

// Functions
import { fetchProfileDetails } from "../api/client/user"

// States
import { useEffect, useState } from "react"


export default function App({ Component, pageProps }: AppProps) {
  const [profileDetails, changeProfileDetails] = useState<any>()
  const [loading, changeLoading] = useState(true)

  useEffect(() => {
    fetchProfileDetails()
      .then(data => {
        changeProfileDetails(data.data)
        changeLoading(false)
      })
      .catch(err => {
        console.log(err)
        changeLoading(false)
      }) 
  }, [])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="description" content="Unlock your AI/ML programming potential with Morph, an innovative education platform that offers hands-on projects, project-based courses, and the latest AI/ML libraries. From beginners to experienced programmers, Morph helps learners develop skills at their own pace and build confidence through practical application. Join Morph today and achieve your AI/ML programming goals!" />
        <meta name="keywords" content="AI/ML education, innovative learning platform, hands-on projects, project-based courses, AI/ML libraries, AI/ML languages, learn from scratch, self-paced learning, practical application of AI/ML, confidence building, beginner-friendly programming, experienced programmer training, Morph education platform, AI/ML programming skills, achieve your programming goals" />
        <meta name="author" content="Kai Pereira" />
        <meta name="google-site-verification" content="7unymZJOcMHrEjiCh1qz8oudMsDd0K40Z_bF3HDHYWM" />
        <title>Morph AI - Learn AI/ML Programming</title>
      </Head>{ !loading &&
        <Component {...pageProps} 
          profileDetails={profileDetails} 
          loading={loading} 
        />
      }
    </>
  )
}
