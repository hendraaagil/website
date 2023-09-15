import type { ProjectData } from '@/types/project'

import { PageContainer, PageHeader } from '@/components'
import { ProjectCard } from '@/modules/projects'
import { siteUrl } from '@/constants/url'

import projectData from '@/_data/projects.json'
import { generateBase64Image } from '@/libs/image'

export const getStaticProps = async () => {
  const projectsWithPlaceholder = await Promise.all(
    projectData.map(async (project) => {
      const thumbnailPlaceholder = await generateBase64Image(project.thumbnail)

      return {
        ...project,
        thumbnailPlaceholder,
      }
    })
  )

  return { props: { projects: projectsWithPlaceholder } }
}

export type ProjectProps = {
  projects: ProjectData[]
}

export default function Projects({ projects }: ProjectProps) {
  const title = 'Projects'
  const url = siteUrl + '/projects'

  return (
    <PageContainer seoProps={{ title, canonical: url, openGraph: { title, url } }}>
      <PageHeader title="Projects" />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </PageContainer>
  )
}
