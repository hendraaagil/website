import type { BlogMetadata } from '@/types/blog'

import { Hr, PageContainer } from '@/components'
import { Hero, Posts } from '@/modules/home'
import { getBlogs } from '@/libs/blog'

export const getStaticProps = async () => {
  const blogs = await getBlogs()
  return { props: { blogs: blogs.slice(0, 3) } }
}

export type HomeProps = {
  blogs: BlogMetadata[]
}

export default function Home({ blogs }: HomeProps) {
  return (
    <PageContainer>
      <Hero />
      <Hr className="mb-4 mt-9" />
      <Posts posts={blogs} />
    </PageContainer>
  )
}
