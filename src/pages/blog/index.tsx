import type { BlogMetadata, BlogTag } from '@/types/blog'

import { useEffect, useState } from 'react'
import { PageContainer, PageHeader } from '@/components'
import { BlogCard, Search } from '@/modules/blog'
import { getBlogs } from '@/libs/blog'
import { toTitleCase } from '@/libs/string'

export const getStaticProps = async () => {
  const blogs = await getBlogs()

  const blogTags = blogs.map((blog) => blog.tags).flat(1)
  const tags = Array.from(new Set(blogTags))
    .sort((a, b) => a.localeCompare(b))
    .map((tag) => {
      return {
        value: tag,
        label: toTitleCase(tag),
      }
    })

  return { props: { blogs, tags } }
}

export type BlogProps = {
  blogs: BlogMetadata[]
  tags: BlogTag[]
}

export default function Blog({ blogs, tags }: BlogProps) {
  const [posts, setPosts] = useState<BlogMetadata[]>(blogs)
  const [tag, setTag] = useState<string | undefined>()

  useEffect(() => {
    const findBlogByTag = () => {
      setPosts(blogs.filter((blog) => blog.tags.includes(tag as string)))
    }

    if (tag) {
      findBlogByTag()
    } else {
      setPosts(blogs)
    }
  }, [blogs, tag])

  const handleChangeTag = (selectedTag?: string) => {
    setTag(selectedTag)
  }

  return (
    <PageContainer seoProps={{ title: 'Blog' }}>
      <PageHeader title="Blog" />
      <Search tags={tags} setTag={handleChangeTag} currentTag={tag} />
      <section className="flex flex-col space-y-4">
        {posts.map((post) => (
          <BlogCard blog={post} key={post.slug} />
        ))}
      </section>
    </PageContainer>
  )
}
