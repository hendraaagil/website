import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'

export type PageContainerProps = {
  children: React.ReactNode
  seoProps?: NextSeoProps
}

export const PageContainer = ({ children, seoProps }: PageContainerProps) => (
  <main className="mx-auto flex w-full max-w-5xl flex-col justify-center py-8 px-4 xs:p-9">
    <NextSeo {...seoProps} />
    {children}
  </main>
)
