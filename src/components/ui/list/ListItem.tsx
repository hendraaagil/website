import React from 'react'
import clsx from 'clsx'

export type ListItemProps = {
  children: React.ReactNode
  className?: string
}

export const ListItem = ({ children, className }: ListItemProps) => (
  <li className={clsx('my-2', className)}>{children}</li>
)
