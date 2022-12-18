import React from 'react'

export type OrderedListProps = {
  children: React.ReactNode
}

export const OrderedList = ({ children }: OrderedListProps) => <ol className="list-decimal pl-6">{children}</ol>
