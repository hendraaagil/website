import htmr from 'htmr'
import { allAbouts } from 'contentlayer/generated'

import { PageContainer } from '@/components/layout'
import { Heading } from '@/components/ui'

export default function Page() {
  const { description, skills } = allAbouts[0]

  return (
    <PageContainer title="About me" description="A little about myself.">
      <section className="space-y-2">
        {description.map((desc, i) => (
          <p key={i}>{htmr(desc)}</p>
        ))}
      </section>
      <section className="space-y-4 border-t pt-4 border-color">
        <Heading variant="h2">Skills</Heading>
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
      </section>
    </PageContainer>
  )
}
