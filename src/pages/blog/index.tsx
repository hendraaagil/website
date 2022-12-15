import type { BlogMetadata } from '@/types/blog'

import { PageContainer, PageHeader } from '@/components'
import { BlogCard } from '@/modules/blog'
import { getBlogs } from '@/libs/blog'

export const getStaticProps = async () => {
  const blogs = (await getBlogs())
    .map((blog) => blog.frontmatter)
    .sort((first, second) => second.createdAt.localeCompare(first.createdAt))

  return { props: { blogs } }
}

export type BlogProps = {
  blogs: BlogMetadata[]
}

export default function Blog({ blogs }: BlogProps) {
  // console.log(blogs)

  return (
    <PageContainer seoProps={{ title: 'Blog' }}>
      <PageHeader title="Blog" />
      <section className="flex flex-col space-y-6">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.slug} />
        ))}
      </section>
    </PageContainer>
  )
}
