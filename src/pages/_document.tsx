import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        <script
          async
          defer
          data-website-id="d7044884-6f55-4a16-8344-9221c0e82832"
          src="https://analytics.hendraaagil.dev/umami.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
