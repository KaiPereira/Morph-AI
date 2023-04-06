// Styles
import '@/styles/globals.scss'

// Libraries
import type { AppProps } from 'next/app'
import Head from "next/head"

// Functions
import { updateLoginDate } from "../api/user"

// States
import { useEffect } from "react"


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    updateLoginDate()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
