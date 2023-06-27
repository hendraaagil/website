import clsx from 'clsx'
import { PropsWithChildren, ReactElement } from 'react'

export type CodeProps = PropsWithChildren & {}

export const Code = ({ children }: CodeProps) => {
  if (typeof children === 'string') {
    return (
      <code
        className={clsx(
          'rounded bg-gray-200 px-1 py-0.5 text-sm',
          'transition-[background-color] duration-300',
          'dark:bg-gray-700'
        )}
      >
        {children}
      </code>
    )
  }

  return children as ReactElement
}
