import React from 'react'
import { Heading } from '@/components/ui'
import { cn } from '@/lib/utils'

type PageContainerProps = {
  title: string
  description: string
  children?: React.ReactNode
  className?: string
}

export const PageContainer = ({
  title,
  description,
  children,
  className,
}: PageContainerProps) => (
  <section
    className={cn(
      'flex w-full flex-col space-y-4 px-2 py-8 sm:px-4',
      className,
    )}
  >
    <header className="space-y-4 border-b pb-4 border-color">
      <Heading>{title}</Heading>
      <p className="text-color-secondary">{description}</p>
    </header>
    {children}
  </section>
)
