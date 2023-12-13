import React from 'react'
import { allAbouts } from 'contentlayer/generated'

import { htmr } from '@/lib/transform'
import { PageContainer } from '@/components/layout'
import { ExternalLink, Heading } from '@/components/ui'

const SectionContainer = ({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) => (
  <section className="space-y-4 border-t pt-4 border-color">
    <Heading variant="h2">{title}</Heading>
    {children}
  </section>
)

export default function Page() {
  const { description, skills, social } = allAbouts[0]

  return (
    <PageContainer
      title="About me"
      description="A little about myself."
      withHeader
    >
      <section className="space-y-2">
        {description.map((desc, i) => (
          <p key={i}>{htmr(desc)}</p>
        ))}
      </section>
      <SectionContainer title="Skills">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border px-3 py-2 transition-colors border-color hover:bg-color-secondary"
            >
              <Heading variant="h3">{skill.name}</Heading>
              <ul className="mt-2 space-y-1 border-t pt-2 border-color">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer title="Get in touch">
        <div className="space-y-2">
          <p>{htmr(social.description)}</p>
          <ul className="list-disc space-y-1 pl-6">
            {social.links.map((link) => (
              <li key={link.name}>
                <span className="font-medium">{link.name}</span>
                {' - '}
                <ExternalLink href={link.url}>{link.url}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </PageContainer>
  )
}
