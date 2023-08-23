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
    className={clsx(
      'rounded-md px-4 py-3',
      'transition-[background-color] duration-300',
      'hover:bg-gray-200 dark:hover:bg-gray-700',
      'md:py-2',
      className
    )}
    aria-label={label}
    {...rest}
  >
    {children}
  </button>
)
