import type { BlogMetadata } from '@/types/blog'

import { FiArrowRight } from 'react-icons/fi'
import { Heading, Link } from '@/components'
import { PostCard } from './PostCard'

export type PostsProps = {
  posts: BlogMetadata[]
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <section>
      <Heading variant="h2" className="pl-4 xs:pl-0">
        Latest Posts
      </Heading>
      <section className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </section>
      <Link url={`/blog`} className="pl-4 xs:pl-0">
        View all posts <FiArrowRight className="ml-1" />
      </Link>
    </section>
  )
}
