import type { Post } from 'contentlayer/generated'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { format } from 'date-fns'

import { Heading, ImageBlur } from '@/components/ui'

export const PostCard = ({ post }: { post: Post }) => (
  <Link href={`/blog/${post.slug}`} className="block" aria-label="Link post">
    <article className="group border transition-colors border-color hover:bg-slate-200 hover:dark:bg-slate-800">
      <div className="relative flex h-32 flex-col justify-center overflow-hidden">
        <ImageBlur
          blurDataURL={post.thumbnailPlaceholder}
          src={post.thumbnail}
          alt={`Thumbnail for article ${post.title}`}
          width={1200}
          height={630}
          className="object-cover group-hover:scale-105"
        />
        <time className="absolute bottom-0 z-10 bg-slate-50/50 px-2 py-1 text-sm backdrop-blur-sm dark:bg-slate-900/50">
          {format(new Date(post.createdAt), 'MMMM d, yyyy')}
        </time>
        <div className="absolute flex h-full w-full items-center justify-center space-x-2 opacity-0 transition-opacity group-hover:bg-slate-50/75 group-hover:opacity-100 dark:group-hover:bg-slate-900/75">
          <span className="text-color">Read more</span>
          <ChevronRight size={16} />
        </div>
      </div>
      <div className="space-y-1 px-3 py-2">
        <Heading variant="h3">{post.title}</Heading>
        <p className="text-color-secondary">{post.summary}</p>
      </div>
    </article>
  </Link>
)
