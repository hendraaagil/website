import React from 'react'
import { cn } from '@/lib/utils'

export const ArticleContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => (
  <article
    className={cn(
      'w-full space-y-4 border-l px-2 py-8 border-color sm:px-4',
      className,
    )}
  >
    {children}
  </article>
)
