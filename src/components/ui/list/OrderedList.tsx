import React from 'react'
import clsx from 'clsx'

export type OrderedListProps = {
  children: React.ReactNode
  className?: string
}

export const OrderedList = ({ children, className }: OrderedListProps) => (
  <ol className={clsx('list-decimal pl-6', className)}>{children}</ol>
)
