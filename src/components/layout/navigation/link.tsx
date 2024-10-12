import type { LinkProps } from 'next/link'

import React from 'react'
import { Link } from 'next-view-transitions'

import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui'

const TooltipContainer = ({
  children,
  content,
}: { children: React.ReactNode; content: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent side="right">
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export const NavigationLink = ({
  href,
  currentPath,
  name,
  children,
  isCollapse,
  ...rest
}: {
  href: string
  currentPath: string
  name: string
  children: React.ReactNode
  isCollapse?: boolean
} & LinkProps) => {
  const regEx = new RegExp(`^${href}`)
  const isActive = href === '/' ? currentPath === href : regEx.test(currentPath)

  const link = (
    <Link
      href={href}
      className={cn(
        'flex items-center space-x-2 border border-color px-3 py-2 font-medium transition-colors hover:bg-color-secondary',
        {
          'md:min-w-[10rem] ': !isCollapse,
          'justify-center': isCollapse,
          'border-color bg-color-secondary bg-opacity-100 dark:bg-opacity-100':
            isActive,
        },
      )}
      {...rest}
    >
      {children}
    </Link>
  )

  if (isCollapse) {
    return <TooltipContainer content={name}>{link}</TooltipContainer>
  }

  return link
}
