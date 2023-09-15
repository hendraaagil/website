import type { BlogMetadata } from '@/types/blog'

import Image from 'next/image'
import { useState } from 'react'

import { CardContainer, Heading, Link, Tag } from '@/components'
import { imageUrl } from '@/constants/url'
import { formatDate, toTitleCase } from '@/libs/string'

export type BlogCardProps = {
  blog: BlogMetadata
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const [blur, setBlur] = useState(true)

  return (
    <CardContainer>
      <div className="relative flex max-h-64 items-center overflow-hidden">
        <div className="absolute bottom-0 right-0 mr-4 mb-4 space-x-2">
          {blog.tags.map((tag) => (
            <Tag key={tag} className="bg-brand-light text-brand-dark dark:bg-brand-dark dark:text-brand-light">
              {toTitleCase(tag)}
            </Tag>
          ))}
        </div>
        <Image
          src={`${imageUrl}${blog.thumbnail}`}
          width={1200}
          height={630}
          alt={`Image thumbnail for "${blog.title}" post`}
          placeholder="blur"
          blurDataURL={blog.thumbnailPlaceholder}
          className={blur ? 'blur' : ''}
          onLoadingComplete={() => setBlur(false)}
        />
      </div>
      <div className="space-y-2 p-4 xs:p-6">
        <time className="text-sm" dateTime={blog.createdAt}>
          {formatDate(blog.createdAt)}
        </time>
        <Link url={`/blog/${blog.slug}`}>
          <Heading variant="h2">{blog.title}</Heading>
        </Link>
        <p className="text-gray-700 dark:text-gray-200">{blog.summary}</p>
      </div>
    </CardContainer>
  )
}
