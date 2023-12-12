import React from 'react'

export type ExternalLinkProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string
    children?: React.ReactNode
  }

const ExternalLink = ({ href, children, ...rest }: ExternalLinkProps) => (
  <a
    href={href}
    className="underline underline-offset-2 transition-colors hover:text-blue-600 dark:hover:text-blue-500"
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  >
    {children}
  </a>
)

export { ExternalLink }
