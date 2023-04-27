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
            data-website-id="d7044884-6f55-4a16-8344-9221c0e82832"
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
