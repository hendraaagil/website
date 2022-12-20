import { PageContainer, PageHeader } from '@/components'
import { siteUrl } from '@/constants/url'

export default function Uses() {
  return (
    <PageContainer seoProps={{ title: 'Uses', canonical: siteUrl + '/uses' }}>
      <PageHeader title="Uses" />
    </PageContainer>
  )
}
