import NextLink from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { FiExternalLink } from 'react-icons/fi'

export type LinkProps = {
  children: React.ReactNode
  className?: string
  url: string
  isExternal?: boolean
}

export const Link = ({ children, className, url, isExternal }: LinkProps) => {
  const classNameStr = clsx(
    'flex items-center font-medium',
    'hover:text-brand-blue hover:underline dark:hover:text-brand-sky',
    className
  )

  if (isExternal) {
    return (
      <a href={url} className={classNameStr} target="_blank" rel="noopener noreferrer">
        {children}
        <FiExternalLink className="ml-1" />
      </a>
    )
  }

  return (
    <NextLink href={url} className={classNameStr}>
      {children}
    </NextLink>
  )
}
