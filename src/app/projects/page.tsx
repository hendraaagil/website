import { allProjects } from 'contentlayer/generated'

import { PageContainer } from '@/components/layout'
import { ProjectCard } from '@/components/project'

export default function Page() {
  const projects = allProjects.sort((a, b) => b.position - a.position)

  return (
    <PageContainer
      title="Projects"
      description="Some of the projects I've worked on, both private and open source."
      withHeader
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </PageContainer>
  )
}
