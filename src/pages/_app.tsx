import '@fontsource/fira-code'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/400-italic.css'
import '@fontsource/plus-jakarta-sans/500-italic.css'
import '@fontsource/plus-jakarta-sans/600-italic.css'
import '@fontsource/plus-jakarta-sans/700-italic.css'
import '@/styles/globals.css'
import '@/styles/prism-one-dark.css'

import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'

import defaultSeoConfig from '@/configs/next-seo'
import { RootContainer, Navbar, Footer } from '@/components'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...defaultSeoConfig} />
      <RootContainer>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </RootContainer>
    </ThemeProvider>
  )
}
