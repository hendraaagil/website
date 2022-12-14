import React from 'react'
import clsx from 'clsx'

export type TagProps = {
  children: React.ReactNode
  className?: string
}

export const Tag = ({ children, className }: TagProps) => (
  <span
    className={clsx(
      'rounded bg-brand-light py-1 px-2 text-xs capitalize text-brand-dark',
      'transition-[background-color] duration-300',
      'dark:bg-brand-dark dark:text-brand-light',
      className
    )}
  >
    {children}
  </span>
)
