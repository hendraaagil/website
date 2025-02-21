import type { Metadata } from 'next'
import { project } from '@/.velite'

import { env } from '@/lib/constants'
import { generateSeoMeta } from '@/lib/seo'
import { PageContainer } from '@/components/layout'
import { ProjectCard } from '@/components/project'

export const generateMetadata = async (): Promise<Metadata> => {
  const url = new URL(env.url.website + '/projects')

  return {
    ...generateSeoMeta({
      title: 'Projects',
      alternates: { canonical: url.toString() },
      newOg: { url: url },
    }),
  }
}

export default function Page() {
  const projects = [...project].reverse()

  return (
    <PageContainer
      title="Projects"
      description="Some of the projects I've worked on, both private and open source."
      withHeader
      withFooter
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </PageContainer>
  )
}
