import type { BlogMetadata } from '@/types/blog'

import { PostCard } from './PostCard'
import { Section } from './layouts'

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
