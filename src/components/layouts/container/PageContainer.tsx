import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import clsx from 'clsx'

export type PageContainerProps = {
  as?: string
  children: React.ReactNode
  className?: string
  seoProps?: NextSeoProps
}

const wrapper = (type: string, props: any, children: React.ReactNode[]) => React.createElement(type, props, ...children)

export const PageContainer = ({ as, children, className, seoProps }: PageContainerProps) => {
  return wrapper(
    as || 'main',
    { className: clsx('mx-auto flex w-full max-w-5xl flex-col justify-center py-6 px-4 xs:py-6 xs:px-9', className) },
    [<NextSeo {...seoProps} key="next-seo" />, children]
  )
}
