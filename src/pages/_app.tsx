import '@fontsource/fira-code'
import '@fontsource/plus-jakarta-sans'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Container } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}
