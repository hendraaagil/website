import type { Post } from 'contentlayer/generated'

import clsx from 'clsx'
import { Link } from 'next-view-transitions'
import { ChevronRight } from 'lucide-react'

import { Heading, ImageBlur, headingVariants } from '@/components/ui'
import { toTitleCase } from '@/lib/format'
import { PublishedTime } from './published-time'

export const PostCard = ({ post }: { post: Post }) => (
  <article className="group border border-color">
    <div className="relative flex h-[10rem] flex-col justify-center overflow-hidden">
      <ImageBlur
        blurDataURL={post.thumbnailPlaceholder}
        src={post.thumbnail}
        alt={`Thumbnail for article ${post.title}`}
        width={1200}
        height={630}
        className="object-cover group-hover:scale-105"
      />
      <PublishedTime
        date={post.createdAt}
        className="absolute bottom-0 z-10 bg-slate-50/50 px-2 py-1 text-sm backdrop-blur-sm dark:bg-slate-900/50"
      />
      <div className="absolute top-0 right-0 z-10 m-1 space-x-1">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-50/50 px-2 py-1 text-xs backdrop-blur-sm dark:bg-slate-900/50"
          >
            {toTitleCase(tag)}
          </span>
        ))}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`View details of post: ${post.title}`}
        className={clsx(
          'absolute flex h-full w-full items-center justify-center space-x-2 opacity-0 transition-opacity',
          'group-hover:bg-slate-50/75 group-hover:opacity-100 group-hover:backdrop-blur-xs dark:group-hover:bg-slate-900/75',
          'focus:bg-slate-50/75 focus:opacity-100 focus:backdrop-blur-xs dark:focus:bg-slate-900/75',
        )}
      >
        <span className="text-color">Continue reading</span>
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
    <div className="space-y-1 px-3 py-2 transition-colors group-hover:bg-color-secondary">
      <Heading variant="h2" className={headingVariants({ variant: 'h3' })}>
        {post.title}
      </Heading>
      <p className="text-color-secondary">{post.summary}</p>
    </div>
  </article>
)
