import React from 'react'

export type ParagraphProps = {
  children: React.ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => <p className="my-3">{children}</p>
