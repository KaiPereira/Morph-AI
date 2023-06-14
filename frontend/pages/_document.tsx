import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="description" content="Morph is the best place to master machine learning. Our interactive machine learning courses with Python are meant for everyone regardless of any skill level!" />
        <meta name="keywords" content="AI/ML education, innovative learning platform, hands-on projects, project-based courses, AI/ML libraries, AI/ML languages, learn from scratch, self-paced learning, practical application of AI/ML, confidence building, beginner-friendly programming, experienced programmer training, Morph education platform, AI/ML programming skills, achieve your programming goals" />
        <meta name="author" content="Kai Pereira" />
        <link rel="manifest" href="/manifest.json" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Morph - Master Machine Learning Coding" />
        <meta property="og:site_name" content="Morph" />
        <meta property="og:url" content="https://www.morph-ai.com/" />
        <meta property="og:description" content="Morph is the best place to master machine learning. Our interactive machine learning courses with Python are meant for everyone regardless of any skill level!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://morph-ai.com/images/Promotional_Poster.png" />
        {/* Twitter card tags */}
        <meta name="twitter:title" content="Morph - Master Machine Learning Coding" />
        <meta name="twitter:description" content="Morph is the best place to master machine learning. Our interactive machine learning courses with Python are meant for everyone regardless of any skill level!" />
        <meta name="twitter:url" content="http://morph-ai.com/images/Promotional_Poster.png" />
        <meta name="twitter:card" content="summary" />

        <Script src="https://cdn.jsdelivr.net/pyodide/v0.23.2/full/pyodide.js"></Script>
        <link rel="apple-touch-icon" sizes="180x180" href="/branding/Favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/branding/Favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/branding/Favicon.png" />
        <meta name="google-site-verification" content="7unymZJOcMHrEjiCh1qz8oudMsDd0K40Z_bF3HDHYWM" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
