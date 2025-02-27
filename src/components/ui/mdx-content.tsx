/* eslint-disable @next/next/no-img-element */
import type { MDXComponents } from 'mdx/types'
import * as runtime from 'react/jsx-runtime'
import {
  ExternalLink,
  Heading,
  LinkPreview,
  type LinkPreviewProps,
} from '@/components/ui'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components: MDXComponents = {
  a: ({ href, children }) => (
    <ExternalLink href={href}>{children}</ExternalLink>
  ),
  p: ({ children }) => <p className="[&:not(:first-child)]:mt-4">{children}</p>,
  code: ({ children }) => {
    if (typeof children === 'string') {
      return (
        <code className="bg-color-secondary px-1 py-0.5 font-medium text-sm">
          {children}
        </code>
      )
    }
    return children
  },
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-l-4 border-l-blue-600 bg-color-secondary py-1 pl-2 dark:border-l-blue-500">
      {children}
    </blockquote>
  ),
  h1: ({ children }) => (
    <Heading variant="h1" className="my-4" withLink>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading variant="h2" className="my-4" withLink>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading variant="h3" className="my-4" withLink>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading variant="h4" className="my-4" withLink>
      {children}
    </Heading>
  ),
  hr: () => <hr className="my-4 border-color" aria-orientation="horizontal" />,
  img: ({ src, alt }) => (
    <figure className="mt-4 border border-color bg-color-secondary text-center">
      <img src={src} alt={alt} className="w-full" />
      <figcaption className="py-2 text-xs">{alt}</figcaption>
    </figure>
  ),
  ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
  li: ({ children }) => <li className="my-1">{children}</li>,
  table: ({ children }) => (
    <div className="overflow-auto">
      <table className="border-collapse border-color">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-color bg-color-secondary px-2 py-1 text-start">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <th className="border border-color px-2 py-1 text-start">{children}</th>
  ),

  // Custom component
  LinkPreview: ({ ...props }: LinkPreviewProps) => <LinkPreview {...props} />,
}

export const MDXContent = ({ code }: { code: string }) => {
  const Content = useMDXComponent(code)
  return <Content components={components} />
}
