import React from 'react'
import clsx from 'clsx'

export type TagProps = {
  children: React.ReactNode
  className?: string
}

export const Tag = ({ children, className }: TagProps) => (
  <span
    className={clsx('rounded px-2 py-1 text-xs capitalize', 'transition-[background-color] duration-300', className)}
  >
    {children}
  </span>
)
