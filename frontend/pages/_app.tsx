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
        <title>Morph - Master Machine Learning Coding</title>
      </Head>
      { !loading &&
        <Component {...pageProps} 
          profileDetails={profileDetails} 
          loading={loading} 
        />
      }
    </>
  )
}
