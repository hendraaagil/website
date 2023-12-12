import type { Metadata, Viewport } from 'next'

import {
  Gabarito as FontSans,
  JetBrains_Mono as FontMono,
} from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Hendra Agil',
  description: 'Generated by create next app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
