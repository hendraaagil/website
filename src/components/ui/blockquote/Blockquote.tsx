import React from 'react'
import clsx from 'clsx'

export type BlockquoteProps = {
  children: React.ReactNode
}

export const Blockquote = ({ children }: BlockquoteProps) => (
  <blockquote
    className={clsx(
      'my-2 border-l-4 border-l-brand-blue py-1 pl-3',
      'bg-gray-200',
      'transition-[background-color] duration-300',
      'dark:bg-gray-700'
    )}
  >
    {children}
  </blockquote>
)
