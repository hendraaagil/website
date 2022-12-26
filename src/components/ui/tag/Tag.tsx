import React from 'react'
import clsx from 'clsx'

export type TagProps = {
  children: React.ReactNode
  className?: string
}

export const Tag = ({ children, className }: TagProps) => (
  <span
    className={clsx('rounded py-1 px-2 text-xs capitalize', 'transition-[background-color] duration-300', className)}
  >
    {children}
  </span>
)
