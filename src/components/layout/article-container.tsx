import React from 'react'
import { cn } from '@/lib/utils'

import { Footer } from '@/components/layout'

export const ArticleContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => (
  <article
    className={cn(
      'w-full space-y-4 border-color border-l px-2 pt-8 pb-4 sm:px-4',
      className,
    )}
  >
    {children}
    <Footer />
  </article>
)
