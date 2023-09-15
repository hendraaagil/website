import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { BlogContent } from '@/types/blog'

import Image from 'next/image'
import clsx from 'clsx'
import { MDXRemote } from 'next-mdx-remote'
import { FiCalendar } from 'react-icons/fi'
import { useState } from 'react'

import { Heading, Hr, markdownComponents, PageContainer, Tag } from '@/components'
import { Comment } from '@/modules/blog'
import { imageUrl, siteUrl } from '@/constants/url'
import { getBlogBySlug, getBlogs } from '@/libs/blog'
import { getReadingTime } from '@/libs/math'
import { formatDate, toTitleCase } from '@/libs/string'

export const getStaticPaths = async () => {
  const blogs = await getBlogs()
  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ blog: BlogContent }> = async ({ params }) => {
  const blog = await getBlogBySlug(params?.slug as string)
  return { props: { blog } }
}

export default function BlogPost({ blog }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { author, slug, summary, tags, thumbnail, thumbnailPlaceholder, thumbnailCredit, title, createdAt, updatedAt } =
    blog.frontmatter
  const [blur, setBlur] = useState(true)

  const postUrl = `${siteUrl}/blog/${slug}`
  const thumbnailUrl = `${imageUrl}${thumbnail}`
  const readTime = getReadingTime(blog.compiledSource)

  return (
    <PageContainer
      as="article"
      seoProps={{
        title,
        description: summary,
        canonical: postUrl,
        openGraph: {
          title,
          description: summary,
          url: postUrl,
          type: 'article',
          article: {
            publishedTime: createdAt,
            modifiedTime: updatedAt,
            authors: [author],
            tags,
          },
          images: [
            {
              url: thumbnailUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        },
      }}
      className="space-y-4"
    >
      <figure
        className={clsx(
          'overflow-hidden rounded bg-gray-200 text-center',
          'transition-[background-color] duration-300',
          'dark:bg-gray-700'
        )}
      >
        <Image
          src={thumbnailUrl}
          alt={`Image thumbnail for "${title}" post`}
          width={1200}
          height={630}
          placeholder="blur"
          blurDataURL={thumbnailPlaceholder}
          className={blur ? 'blur' : ''}
          onLoadingComplete={() => setBlur(false)}
        />
        <figcaption className="py-2 text-xs">{thumbnailCredit}</figcaption>
      </figure>
      <time dateTime={createdAt} className="flex items-center text-sm font-medium">
        <FiCalendar className="mr-1" />
        {formatDate(createdAt)}・{readTime} minute(s) read
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
      <Hr />
      <Comment />
    </PageContainer>
  )
}
