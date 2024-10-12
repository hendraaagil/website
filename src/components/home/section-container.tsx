import React from 'react'
import { Link } from 'next-view-transitions'
import { ChevronRight } from 'lucide-react'

import { Heading } from '@/components/ui'

type SectionContainerProps = {
  children?: React.ReactNode
  title: string
  path: string
}

export const SectionContainer = ({
  children,
  title,
  path,
}: SectionContainerProps) => (
  <section className="space-y-4 border-color border-t pt-4">
    <div className="flex items-center justify-between">
      <Heading variant="h2">Latest {title}</Heading>
      <Link
        href={path}
        className="flex items-center space-x-2 hover:underline hover:underline-offset-4"
      >
        <span className="tracking-wide">All {title}</span>
        <ChevronRight className="h-4 w-4 animate-bounce-right motion-reduce:animate-none" />
      </Link>
    </div>
    {children}
  </section>
)
