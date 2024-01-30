/* eslint-disable @next/next/no-img-element */
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import {
  ExternalLink,
  Heading,
  LinkPreview,
  type LinkPreviewProps,
} from '@/components/ui'

export const MDXContent = ({ code }: { code: string }) => {
  const Content = useMDXComponent(code)

  const components: MDXComponents = {
    a: ({ href, children }) => (
      <ExternalLink href={href}>{children}</ExternalLink>
    ),
    p: ({ children }) => (
      <p className="[&:not(:first-child)]:mt-4">{children}</p>
    ),
    code: ({ children }) => {
      if (typeof children === 'string') {
        return (
          <code className="px-1 py-0.5 text-sm font-medium bg-color-secondary">
            {children}
          </code>
        )
      }
      return children
    },
    blockquote: ({ children }) => (
      <blockquote className="mt-4 border-l-4 border-l-blue-600 py-1 pl-2 bg-color-secondary dark:border-l-blue-500">
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
    hr: () => (
      <hr className="my-4 border-color" aria-orientation="horizontal" />
    ),
    img: ({ src, alt }) => (
      <figure className="mt-4 border text-center bg-color-secondary border-color">
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
      <th className="border px-2 py-1 text-start bg-color-secondary border-color">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <th className="border px-2 py-1 text-start border-color">{children}</th>
    ),

    // Custom component
    LinkPreview: ({ ...props }: LinkPreviewProps) => <LinkPreview {...props} />,
  }

  return <Content components={components} />
}
