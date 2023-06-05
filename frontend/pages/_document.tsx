import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="description" content="Morph is the best place to learn machine learning. Our interactive machine learning courses with Python are meant for everyone regardless of any skill level!" />
        <meta name="keywords" content="AI/ML education, innovative learning platform, hands-on projects, project-based courses, AI/ML libraries, AI/ML languages, learn from scratch, self-paced learning, practical application of AI/ML, confidence building, beginner-friendly programming, experienced programmer training, Morph education platform, AI/ML programming skills, achieve your programming goals" />
        <meta name="author" content="Kai Pereira" />
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
