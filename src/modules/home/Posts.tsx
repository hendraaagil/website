import type { BlogMetadata } from '@/types/blog'

import { FiArrowRight } from 'react-icons/fi'
import { CardContainer, Heading, Link } from '@/components'
import { formatDate } from '@/libs/string'
import { Section } from './layouts'

type PostCardProps = {
  post: BlogMetadata
}

const PostCard = ({ post }: PostCardProps) => (
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

export type PostsProps = {
  posts: BlogMetadata[]
}

export const Posts = ({ posts }: PostsProps) => (
  <Section title="Latest Posts" link="/blog" linkTitle="View all posts">
    {posts.map((post) => (
      <PostCard post={post} key={post.slug} />
    ))}
  </Section>
)
