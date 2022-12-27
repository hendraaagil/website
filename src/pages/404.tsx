import { Link, PageContainer, PageHeader } from '@/components'

export default function NotFound() {
  const title = '404'

  return (
    <PageContainer seoProps={{ title, noindex: true }}>
      <PageHeader title="404 | Page not found!" />
      <Link url="/">Back to Home</Link>
    </PageContainer>
  )
}
