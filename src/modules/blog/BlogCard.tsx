import Image from 'next/image'
import clsx from 'clsx'

import type { BlogMetadata } from '@/types/blog'
import { Heading, Tag } from '@/components'
import { imageUrl } from '@/constants/url'
import { toTitleCase } from '@/libs/string'

export type BlogCardProps = {
  blog: BlogMetadata
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <article
      className={clsx(
        'overflow-hidden rounded shadow-sm',
        'transition-[background-color,transform]',
        'hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700'
      )}
    >
      <div className="relative max-h-64 overflow-hidden">
        <div className="absolute bottom-0 right-0 mr-4 mb-4 space-x-2">
          {blog.tags.map((tag) => (
            <Tag key={tag}>{toTitleCase(tag)}</Tag>
          ))}
        </div>
        <Image
          src={`${imageUrl}${blog.thumbnail}`}
          width={1200}
          height={630}
          alt={`Image thumbnail for "${blog.title}" post`}
        />
      </div>
      <div className="space-y-2 p-4 xs:p-6">
        <Heading variant="h2">{blog.title}</Heading>
        <p className="text-gray-700 dark:text-gray-200">{blog.summary}</p>
      </div>
    </article>
  )
}
