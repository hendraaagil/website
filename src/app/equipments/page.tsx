import { allEquipment } from 'contentlayer/generated'

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
  <section className="space-y-2 odd:border-t odd:border-color even:pb-2">
    <Heading variant="h2" className="border-b py-2 border-color">
      {title}
    </Heading>
    {children}
  </section>
)

export default function Page() {
  const { software, hardware } = allEquipment[0]

  return (
    <PageContainer
      className="space-y-0"
      title="Equipments"
      description="Some of the tools / peripherals that I'm using."
      withHeader
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
