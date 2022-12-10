import React from 'react'
import clsx from 'clsx'

export type IconButtonProps = {
  children: React.ReactNode
  className?: string
  label: string
  onClick: () => void
}

export const IconButton = ({ children, className, label, ...rest }: IconButtonProps) => (
  <button
    className={clsx('rounded-md py-3 px-4 transition-all hover:bg-gray-200 dark:hover:bg-gray-700 md:py-2', className)}
    aria-label={label}
    {...rest}
  >
    {children}
  </button>
)
