import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import clsx from 'clsx'
import { MDXRemote } from 'next-mdx-remote'
import { FiCalendar } from 'react-icons/fi'

import type { BlogContent } from '@/types/blog'
import { Heading, Hr, markdownComponents, PageContainer, Tag } from '@/components'
import { imageUrl } from '@/constants/url'
import { getBlogBySlug, getBlogs } from '@/libs/blog'
import { formatDate, toTitleCase } from '@/libs/string'

export const getStaticPaths = async () => {
  const blogs = await getBlogs()
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{ blog: BlogContent }> = async ({ params }) => {
  const blog = await getBlogBySlug(params?.slug as string)
  return { props: { blog } }
}

export default function BlogPost({ blog }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { author, slug, summary, tags, thumbnail, thumbnailCredit, title, createdAt, updatedAt } = blog.frontmatter
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`

  return (
    <PageContainer as="article" seoProps={{ title }} className="space-y-4">
      <figure
        className={clsx(
          'overflow-hidden rounded bg-gray-200 text-center',
          'transition-[background-color] duration-300',
          'dark:bg-gray-700'
        )}
      >
        <Image src={`${imageUrl}${thumbnail}`} alt={`Image thumbnail for "${title}" post`} width={1200} height={630} />
        <figcaption className="py-2 text-xs">{thumbnailCredit}</figcaption>
      </figure>
      <time dateTime={createdAt} className="flex items-center text-sm font-medium">
        <FiCalendar className="mr-1" />
        {formatDate(createdAt)}
      </time>
      <Heading variant="h1">{title}</Heading>
      <p>{summary}</p>
      <div className="space-x-2">
        {tags.map((tag) => (
          <Tag key={tag} className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
            {toTitleCase(tag)}
          </Tag>
        ))}
      </div>
      <Hr />
      <section>
        <MDXRemote {...blog} components={markdownComponents} />
      </section>
    </PageContainer>
  )
}
