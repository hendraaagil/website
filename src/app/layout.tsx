import type { Metadata, Viewport } from 'next'

import Script from 'next/script'
import {
  Gabarito as FontSans,
  JetBrains_Mono as FontMono,
} from 'next/font/google'
import { generateSeoMeta } from '@/lib/seo'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'
import '@/styles/one-dark.css'

import { ThemeProvider } from '@/components/provider'
import { Navigation } from '@/components/layout'

const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-sans',
})
const fontMono = FontMono({ subsets: ['latin'], variable: '--font-mono' })

export const generateMetadata = async (): Promise<Metadata> => generateSeoMeta()

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen overflow-y-scroll font-sans antialiased bg-color text-color',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <main className="mx-auto flex max-w-5xl">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            {children}
          </ThemeProvider>
        </main>
        {process.env.NODE_ENV === 'production' && (
          <Script
            data-website-id="d7044884-6f55-4a16-8344-9221c0e82832"
            src="https://analytics.hendraaagil.dev/script.js"
            async
            defer
          />
        )}
      </body>
    </html>
  )
}
