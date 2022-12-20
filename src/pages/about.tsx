import { PageContainer, PageHeader } from '@/components'
import { siteUrl } from '@/constants/url'

export default function About() {
  return (
    <PageContainer seoProps={{ title: 'About', canonical: siteUrl + '/about' }}>
      <PageHeader title="About Me" />
    </PageContainer>
  )
}
