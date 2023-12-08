import Link from 'next/link'
import htmr from 'htmr'
import { ChevronRight } from 'lucide-react'
import { allAbouts, allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { Heading } from '@/components/ui'
import { PostCard } from '@/components/home'

export default function Home() {
  const { summary } = allAbouts[0]
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
    .slice(0, 3)

  return (
    <section className="flex flex-col space-y-4 px-2 py-8 sm:px-4">
      <div className="flex space-x-2">
        <Heading>Hi there!</Heading>
        <div className="animate-wiggle motion-reduce:animate-none">
          <p className="text-4xl">👋</p>
        </div>
      </div>
      <p>{htmr(summary)}</p>
      <section className="space-y-4 border-t pt-4 border-color">
        <div className="flex items-center justify-between">
          <Heading variant="h2">Latest Posts</Heading>
          <Link
            href="/blog"
            className="flex items-center space-x-2 hover:underline hover:underline-offset-4"
          >
            <span>All posts</span>
            <ChevronRight
              size={16}
              className="animate-bounce-right motion-reduce:animate-none"
            />
          </Link>
        </div>
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </section>
  )
}
