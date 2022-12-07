import '@fontsource/fira-code'
import '@fontsource/plus-jakarta-sans'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
