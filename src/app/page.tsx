import { compareDesc } from 'date-fns'
import { about, post, project } from '@/.velite'

import { htmr } from '@/lib/transform'
import { Heading } from '@/components/ui'
import { PageContainer } from '@/components/layout'
import { SectionContainer } from '@/components/home'
import { PostCard } from '@/components/blog'
import { ProjectCard } from '@/components/project'

export default function Home() {
  const { summary } = about
  const posts = post
    .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
    .slice(0, 3)
  const projects = [...project].reverse().slice(0, 4)

  return (
    <PageContainer withFooter>
      <div className="flex space-x-2">
        <Heading>Hi there!</Heading>
        <div className="animate-wiggle motion-reduce:animate-none">
          <p className="text-4xl">👋</p>
        </div>
      </div>
      <p>{htmr(summary)}</p>
      <SectionContainer title="posts" path="/blog">
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer title="projects" path="/projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  )
}
