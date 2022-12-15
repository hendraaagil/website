import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

export type ExternalLinkProps = {
  children: React.ReactNode
  url: string
}

export const ExternalLink = ({ children, url }: ExternalLinkProps) => (
  <a
    href={url}
    className="flex items-center font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <FiExternalLink className="ml-1" />
  </a>
)
