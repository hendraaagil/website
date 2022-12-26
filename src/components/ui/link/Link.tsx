import NextLink from 'next/link'
import React from 'react'
import clsx from 'clsx'

export type LinkProps = {
  children: React.ReactNode
  className?: string
  url: string
  isExternal?: boolean
}

export const Link = ({ children, className, url, isExternal }: LinkProps) => {
  const classNameStr = clsx('font-medium', 'hover:text-brand-blue hover:underline dark:hover:text-brand-sky', className)

  if (isExternal) {
    return (
      <a href={url} className={classNameStr} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <NextLink href={url} className={classNameStr}>
      {children}
    </NextLink>
  )
}
