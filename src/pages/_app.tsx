import '@fontsource/fira-code'
import '@fontsource/plus-jakarta-sans/variable.css'
import '@fontsource/plus-jakarta-sans/variable-italic.css'
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
