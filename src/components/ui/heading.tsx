import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva('scroll-m-20 font-bold tracking-tight', {
  variants: {
    variant: { h1: 'text-4xl', h2: 'text-3xl', h3: 'text-2xl', h4: 'text-xl' },
  },
  defaultVariants: { variant: 'h1' },
})

export interface HeadingProps
  extends React.BaseHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = ({ className, variant, ...props }: HeadingProps) =>
  React.createElement(variant ?? 'h1', {
    className: cn(headingVariants({ variant, className })),
    ...props,
  })

export { Heading, headingVariants }
