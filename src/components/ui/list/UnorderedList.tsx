import React from 'react'

export type UnorderedListProps = {
  children: React.ReactNode
}

export const UnorderedList = ({ children }: UnorderedListProps) => <ul className="list-disc pl-6">{children}</ul>
