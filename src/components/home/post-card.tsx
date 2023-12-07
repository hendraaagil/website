import type { Post } from 'contentlayer/generated'
import Link from 'next/link'
import { format } from 'date-fns'

import { Heading, ImageBlur } from '@/components/ui'

export const PostCard = ({ post }: { post: Post }) => (
  <Link href={`/blog/${post.slug}`} className="block" aria-label="Link post">
    <article className="group border transition-colors border-color hover:bg-slate-200 hover:dark:bg-slate-800">
      <div className="relative z-10 flex h-32 flex-col justify-center overflow-hidden">
        <ImageBlur
          blurDataURL={post.thumbnailPlaceholder}
          src={post.thumbnail}
          alt={`Thumbnail for article ${post.title}`}
          width={1200}
          height={630}
          className="object-cover"
        />
        <time className="absolute bottom-0 bg-slate-50/50 px-2 py-1 text-sm backdrop-blur-sm dark:bg-slate-900/50">
          {format(new Date(post.createdAt), 'MMMM d, yyyy')}
        </time>
      </div>
      <div className="space-y-1 px-3 py-2">
        <Heading variant="h3">{post.title}</Heading>
        <p>{post.summary}</p>
      </div>
    </article>
  </Link>
)
