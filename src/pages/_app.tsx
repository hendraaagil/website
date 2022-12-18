import '@fontsource/fira-code'
import '@fontsource/plus-jakarta-sans/variable.css'
import '@fontsource/plus-jakarta-sans/variable-italic.css'
import '@/styles/globals.css'
import '@/styles/prism-one-dark.css'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'

import defaultSeoConfig from '@/configs/next-seo'
import { RootContainer, Navbar } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...defaultSeoConfig} />
      <RootContainer>
        <Navbar />
        <Component {...pageProps} />
      </RootContainer>
    </ThemeProvider>
  )
}
