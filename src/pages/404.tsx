import { Link, PageContainer, PageHeader } from '@/components'

export default function NotFound() {
  const title = '404'

  return (
    <PageContainer seoProps={{ title, noindex: true, nofollow: true }}>
      <PageHeader title="Oops! Page not found" />
      <Link url="/">Back to Home</Link>
    </PageContainer>
  )
}
