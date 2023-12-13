import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { PageContainer } from '@/components/layout'
import { PostCard } from '@/components/blog'

export default function Page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  )

  return (
    <PageContainer
      title="Blog"
      description="Some of the posts that I've written, not only about code."
      withHeader
    >
      <div className="flex flex-col space-y-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </PageContainer>
  )
}
