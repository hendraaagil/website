import { PageContainer, PageHeader } from '@/components'
import { ProjectCard } from '@/modules/projects'

import projects from '@/_data/projects.json'

export default function Projects() {
  return (
    <PageContainer seoProps={{ title: 'Projects' }}>
      <PageHeader title="Projects" />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </PageContainer>
  )
}