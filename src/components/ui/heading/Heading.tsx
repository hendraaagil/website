import React from 'react'
import clsx from 'clsx'

export type HeadingProps = {
  children: React.ReactNode
  className?: string
  variant: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Heading = ({ children, className, variant, ...rest }: HeadingProps) => {
  const baseClass = 'font-bold my-3'

  switch (variant) {
    case 'h2':
      return (
        <h2 className={clsx(baseClass, 'text-2xl', className)} {...rest}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={clsx(baseClass, 'text-xl', className)} {...rest}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 className={clsx(baseClass, 'text-lg', className)} {...rest}>
          {children}
        </h4>
      )
    default:
      return (
        <h1 className={clsx(baseClass, 'text-3xl', className)} {...rest}>
          {children}
        </h1>
      )
  }
}
