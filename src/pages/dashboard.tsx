import { Hr, PageContainer, PageHeader } from '@/components'
import { siteUrl } from '@/constants/url'
import { Github, Music, Website, Youtube } from '@/modules/dashboard'

export default function Dashboard() {
  return (
    <PageContainer seoProps={{ title: 'Dashboard', canonical: siteUrl + '/dashboard' }}>
      <PageHeader title="Dashboard" />
      <section className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
        <Github />
        <Website />
        <Youtube />
      </section>
      <Hr className="mt-4" />
      <Music />
    </PageContainer>
  )
}
