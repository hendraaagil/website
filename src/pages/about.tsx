import { Hr, PageContainer, PageHeader } from '@/components'
import { Description, Skillset, Social } from '@/modules/about'
import { siteUrl } from '@/constants/url'

export default function About() {
  return (
    <PageContainer seoProps={{ title: 'About', canonical: siteUrl + '/about' }}>
      <PageHeader title="About Me" />
      <section>
        <Description />
        <Hr className="my-4" />
        <Skillset />
        <Hr className="mt-4" />
        <Social />
      </section>
    </PageContainer>
  )
}
