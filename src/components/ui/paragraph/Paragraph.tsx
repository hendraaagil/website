import React from 'react'
import clsx from 'clsx'

export type ParagraphChildNode = React.ReactNode & {
  type?: { name: string }
}

export type ParagraphProps = {
  children: ParagraphChildNode
}

export const Paragraph = ({ children }: ParagraphProps) => {
  if (children.type && ['Image', 'img', 'P', 'H'].includes(children.type.name)) {
    return (
      <figure
        className={clsx(
          'overflow-hidden rounded bg-gray-200 text-center',
          'transition-[background-color] duration-300',
          'dark:bg-gray-700'
        )}
      >
        {children}
      </figure>
    )
  }

  return <p className="my-3">{children}</p>
}
