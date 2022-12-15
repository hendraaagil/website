import React from 'react'
import clsx from 'clsx'

export type CardContainerProps = {
  children: React.ReactNode
  className?: string
}

export const CardContainer = ({ children, className }: CardContainerProps) => (
  <div
    className={clsx(
      'overflow-hidden rounded shadow-sm',
      'transition-[background-color,transform]',
      'hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700',
      className
    )}
  >
    {children}
  </div>
)
