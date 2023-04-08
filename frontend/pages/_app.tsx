// Styles
import '@/styles/globals.scss'

// Libraries
import type { AppProps } from 'next/app'
import Head from "next/head"

// Functions
import { fetchProfileDetails } from "../api/user"

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
      </Head>
      <Component {...pageProps} 
        profileDetails={profileDetails} 
        loading={loading} 
      />
    </>
  )
}
