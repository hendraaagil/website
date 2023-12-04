import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        {process.env.NODE_ENV === 'production' && (
          <Script
            async
            defer
            strategy="afterInteractive"
            data-website-id="a39d1c1b-20ad-4d93-89a8-0378f8c1e16c"
            src="https://analytics.hendraaagil.dev/script.js"
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
