import { Hr, PageContainer, PageHeader } from '@/components'
import { Description, Skillset, Social } from '@/modules/about'
import { siteUrl } from '@/constants/url'

export default function About() {
  const title = 'About'
  const url = siteUrl + '/about'

  return (
    <PageContainer seoProps={{ title, canonical: url, openGraph: { title, url } }}>
      <PageHeader title="About Me" />
      <section>
        <Description />
        <Hr className="mt-4" />
        <Skillset />
        <Hr className="mt-4" />
        <Social />
      </section>
    </PageContainer>
  )
}
