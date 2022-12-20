import type { BlogMetadata } from '@/types/blog'
import type { ProjectData } from '@/types/project'

import projects from '@/_data/projects.json'
import { Hr, PageContainer } from '@/components'
import { Hero, Posts, Projects } from '@/modules/home'
import { getBlogs } from '@/libs/blog'

export const getStaticProps = async () => {
  const blogs = await getBlogs()
  return { props: { blogs: blogs.slice(0, 3), projects: projects.slice(0, 3) } }
}

export type HomeProps = {
  blogs: BlogMetadata[]
  projects: ProjectData[]
}

export default function Home({ blogs, projects }: HomeProps) {
  return (
    <PageContainer>
      <Hero />
      <Hr className="mb-4 mt-9" />
      <Posts posts={blogs} />
      <Hr className="mb-4 mt-9" />
      <Projects projects={projects} />
    </PageContainer>
  )
}
