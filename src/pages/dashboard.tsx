import { PageContainer, PageHeader } from '@/components'
import { siteUrl } from '@/constants/url'

export default function Dashboard() {
  return (
    <PageContainer seoProps={{ title: 'Dashboard', canonical: siteUrl + '/dashboard' }}>
      <PageHeader title="Dashboard" />
    </PageContainer>
  )
}
