import React from 'react'
import clsx from 'clsx'

export type UnorderedListProps = {
  children: React.ReactNode
  className?: string
}

export const UnorderedList = ({ children, className }: UnorderedListProps) => (
  <ul className={clsx('list-disc pl-6', className)}>{children}</ul>
)
