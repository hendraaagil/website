import { MDXProvider } from '@mdx-js/react'
import { Blockquote, Code, Heading, Hr, Img, Link, ListItem, OrderedList, Paragraph, UnorderedList } from './ui'

export const markdownComponents: React.ComponentProps<typeof MDXProvider>['components'] = {
  a: ({ children, href }) => (
    <Link url={href as string} className="underline" isExternal>
      {children}
    </Link>
  ),
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  h1: ({ children }) => <Heading variant="h1">{children}</Heading>,
  h2: ({ children }) => <Heading variant="h2">{children}</Heading>,
  h3: ({ children }) => <Heading variant="h3">{children}</Heading>,
  h4: ({ children }) => <Heading variant="h4">{children}</Heading>,
  hr: () => <Hr />,
  img: ({ src, alt }) => <Img src={src as string} alt={alt as string} />,
  ol: ({ children }) => <OrderedList>{children}</OrderedList>,
  ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  code: ({ children }) => <Code>{children}</Code>,
}
