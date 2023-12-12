import React from 'react'
import Link, { type LinkProps } from 'next/link'

import { cn } from '@/lib/utils'

export const NavigationLink = ({
  href,
  currentPath,
  children,
  isCollapse,
  ...rest
}: {
  href: string
  currentPath: string
  children: React.ReactNode
  isCollapse?: boolean
} & LinkProps) => {
  const regEx = new RegExp(`^${href}`)
  const isActive = href === '/' ? currentPath === href : regEx.test(currentPath)

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center space-x-2 border-2 border-transparent bg-slate-200 bg-opacity-25 px-3 py-2 font-medium tracking-wide transition-colors hover:border-color',
        'dark:bg-slate-800 dark:bg-opacity-25',
        {
          'md:min-w-[10rem] ': !isCollapse,
          'bg-opacity-50 border-color dark:bg-opacity-50': isActive,
        },
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
