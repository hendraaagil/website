import type { BlogMetadata } from '@/types/blog'

import { Heading, PageContainer } from '@/components'
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
    <PageContainer>
      <Heading variant="h1">Blog</Heading>
      {blogs.map((blog) => (
        <Heading variant="h2" key={blog.slug}>
          {blog.title}
        </Heading>
      ))}
    </PageContainer>
  )
}
