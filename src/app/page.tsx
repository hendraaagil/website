import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { Heading } from '@/components/ui'
import { PostCard } from '@/components/home'
import { generateBase64Image } from '@/lib/server/utils'

export default async function Home() {
  const posts = await Promise.all(
    allPosts
      .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
      .slice(0, 3)
      .map(async (post) => ({
        ...post,
        thumbnailPlaceholder: await generateBase64Image(post.thumbnail),
      })),
  )

  return (
    <section className="flex flex-col space-y-4 px-2 py-8 sm:px-4">
      <div className="flex space-x-2">
        <Heading>Hi there!</Heading>
        <div className="animate-wiggle motion-reduce:animate-none">
          <p className="text-4xl">👋</p>
        </div>
      </div>
      <p>
        My name is <strong>Hendra Agil</strong>, I&apos;m a web developer
        specializing in JavaScript. With expertise in the full software
        development life cycle, I create scalable web applications with a focus
        on clean, maintainable code and effective problem-solving.
      </p>
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
