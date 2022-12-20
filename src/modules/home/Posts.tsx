import type { BlogMetadata } from '@/types/blog'

import { FiArrowRight } from 'react-icons/fi'
import { CardContainer, Heading, Link } from '@/components'
import { formatDate } from '@/libs/string'
import { Section } from './layouts'

type PostCardProps = {
  post: BlogMetadata
}

const PostCard = ({ post }: PostCardProps) => (
  <CardContainer className="flex flex-col p-4">
    <time className="text-sm" dateTime={post.createdAt}>
      {formatDate(post.createdAt)}
    </time>
    <Link url={`/blog/${post.slug}`} className="flex items-center">
      <Heading variant="h2">{post.title}</Heading>
    </Link>
    <p className="text-gray-700 dark:text-gray-200">{post.summary}</p>
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
