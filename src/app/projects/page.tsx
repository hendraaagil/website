import { allProjects } from 'contentlayer/generated'

import { Heading } from '@/components/ui'
import { ProjectCard } from '@/components/project'

export default function Page() {
  const projects = allProjects.sort((a, b) => b.position - a.position)

  return (
    <section className="flex flex-col space-y-4 px-2 py-8 sm:px-4">
      <header className="space-y-4 border-b pb-4 border-color">
        <Heading>Projects</Heading>
        <p className="text-color-secondary">
          Some of the projects I&apos;ve worked on, both private and open
          source.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  )
}
