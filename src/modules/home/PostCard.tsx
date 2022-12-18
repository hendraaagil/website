import { FiArrowRight } from 'react-icons/fi'

import type { BlogMetadata } from '@/types/blog'
import { CardContainer, Heading, Link } from '@/components'
import { formatDate } from '@/libs/string'

export type PostCardProps = {
  post: BlogMetadata
}

export const PostCard = ({ post }: PostCardProps) => (
  <CardContainer className="flex flex-col justify-between space-y-4 p-4">
    <div className="mb-2 space-y-2">
      <time className="text-sm" dateTime={post.createdAt}>
        {formatDate(post.createdAt)}
      </time>
      <div className="space-y-2">
        <Heading variant="h2">{post.title}</Heading>
        <p className="text-gray-700 dark:text-gray-200">{post.summary}</p>
      </div>
    </div>
    <Link url={`/blog/${post.slug}`} className="flex items-center">
      Read more <FiArrowRight className="ml-1" />
    </Link>
  </CardContainer>
)
