import type { Metadata } from 'next'
import { allEquipment } from 'contentlayer/generated'

import { env } from '@/lib/constants'
import { htmr } from '@/lib/transform'
import { generateSeoMeta } from '@/lib/seo'
import { PageContainer } from '@/components/layout'
import { ExternalLink, Heading } from '@/components/ui'

const SectionContainer = ({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) => (
  <section className="space-y-2 odd:border-color odd:border-t odd:pb-4 even:pb-2">
    <Heading variant="h2" className="border-color border-b py-2">
      {title}
    </Heading>
    {children}
  </section>
)

export const generateMetadata = async (): Promise<Metadata> => {
  const url = new URL(env.url.website + '/equipments')

  return {
    ...generateSeoMeta({
      title: 'Equipments',
      alternates: { canonical: url.toString() },
      newOg: { url: url },
    }),
  }
}

export default function Page() {
  const { software, hardware } = allEquipment[0]

  return (
    <PageContainer
      className="space-y-0"
      title="Equipments"
      description="Some of the tools / peripherals that I'm using."
      withHeader
      withFooter
    >
      <SectionContainer title={software.title}>
        {software.details.map((detail) => (
          <div key={detail.subtitle} className="space-y-1">
            <Heading variant="h3">{detail.subtitle}</Heading>
            <ul className="list-disc space-y-1 pl-6">
              {detail.items.map((item) => (
                <li key={item.name}>
                  <ExternalLink
                    href={item.link}
                    className="no-underline hover:underline"
                  >
                    {htmr(item.name)}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </SectionContainer>
      <SectionContainer title={hardware.title}>
        {hardware.details.map((detail) => (
          <div key={detail.subtitle} className="space-y-1">
            <Heading variant="h3">{detail.subtitle}</Heading>
            <ul className="list-disc space-y-1 pl-6">
              {detail.items.map((item) => (
                <li key={item.name}>
                  {htmr(item.name)}
                  {item.subitems && (
                    <ul className="list-square space-y-1 pl-6">
                      {item.subitems.map((subitem) => (
                        <li key={subitem}>{htmr(subitem)}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </SectionContainer>
    </PageContainer>
  )
}
