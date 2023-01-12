import React from 'react'
import uses from '@/_data/uses.json'
import { Heading, Link, UnorderedList } from '@/components'

const LinkWrapper = ({ children, link }: { children: React.ReactNode; link?: string }) =>
  link ? (
    <Link url={link} isExternal>
      {children}
    </Link>
  ) : (
    <>{children}</>
  )

export const Hardware = () => {
  const { heading, lists } = uses.hardware

  return (
    <>
      <Heading variant="h2">{heading}</Heading>
      {lists.map((list) => (
        <div key={list.heading}>
          <Heading variant="h3">{list.heading}</Heading>
          <UnorderedList className="space-y-1">
            {list.lists.map((item) => (
              <li key={item.name || item.title}>
                <LinkWrapper link={item.link}>
                  {item.title && <strong>{item.title}</strong>} {item.name}
                </LinkWrapper>
                {item.specs && (
                  <UnorderedList className="space-y-1">
                    {item.specs?.map((spec) => (
                      <li key={spec.title}>
                        <strong>{spec.title}</strong> {spec.name}
                      </li>
                    ))}
                  </UnorderedList>
                )}
              </li>
            ))}
          </UnorderedList>
        </div>
      ))}
    </>
  )
}
