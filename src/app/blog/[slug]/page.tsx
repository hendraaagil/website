import type { Metadata } from 'next'

import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { env } from '@/lib/constants'
import { generateSeoMeta } from '@/lib/seo'
import { formatFullDate, toTitleCase } from '@/lib/format'
import { Heading, ImageBlur, MDXContent } from '@/components/ui'
import { ArticleContainer } from '@/components/layout'
import { Comment } from '@/components/blog'

const getPost = (slug: string) => allPosts.find((post) => post.slug === slug)

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const post = getPost(params.slug)
  if (!post) return {}

  const postUrl = new URL(env.url.website + '/blog/' + params.slug)
  const imageUrl = new URL(env.url.website + post.thumbnail)
  return {
    ...generateSeoMeta({
      title: post.title,
      description: post.summary,
      alternates: { canonical: postUrl },
      openGraph: {
        title: post.title,
        description: post.summary,
        url: postUrl,
        type: 'article',
        publishedTime: post.createdAt,
        modifiedTime: post.updatedAt,
        authors: ['Hendra Agil'],
        tags: post.tags,
        images: [
          {
            url: `/og/content?title=${post.title}&link=${encodeURIComponent(
              postUrl.toString(),
            )}&image=${encodeURIComponent(imageUrl.toString())}`,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
    }),
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return notFound()

  return (
    <ArticleContainer>
      <figure className="overflow-hidden border text-center bg-color-secondary border-color">
        <ImageBlur
          src={post.thumbnail}
          alt={`Thumbnail for article ${post.title}`}
          blurDataURL={post.thumbnailPlaceholder}
          width={1200}
          height={630}
        />
        <figcaption className="py-2 text-xs">{post.thumbnailCredit}</figcaption>
      </figure>
      <div className="flex items-center text-sm font-medium text-color-secondary">
        <time dateTime={post.createdAt} className="flex items-center space-x-2">
          Published at {formatFullDate(post.createdAt)}
        </time>
        <span>・{post.readTime} minute(s) read</span>
      </div>
      <Heading>{post.title}</Heading>
      <p>{post.summary}</p>
      <div className="flex items-center space-x-2">
        {post.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-sm bg-color-secondary">
            {toTitleCase(tag)}
          </span>
        ))}
      </div>
      <hr className="border-color" />
      <MDXContent code={post.body.code} />
      <hr className="pb-4 border-color" />
      <Comment />
    </ArticleContainer>
  )
}
