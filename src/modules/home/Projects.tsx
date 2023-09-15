import type { ProjectData } from '@/types/project'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { CardContainer, Heading } from '@/components'
import { Section } from './layouts'
import { imageUrl } from '@/constants/url'

type ProjectCardProps = {
  project: ProjectData
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [blur, setBlur] = useState(true)

  return (
    <CardContainer className="flex flex-col">
      <div className="flex max-h-32 items-center overflow-hidden">
        <Image
          src={`${imageUrl}${project.thumbnail}`}
          alt={`Image preview of ${project.title} project`}
          width={640}
          height={360}
          placeholder="blur"
          blurDataURL={project.thumbnailPlaceholder}
          className={clsx('w-full', blur ? 'blur' : '')}
          onLoadingComplete={() => setBlur(false)}
        />
      </div>
      <div className="px-4 pb-4">
        <Heading variant="h2">{project.title}</Heading>
        <p className="text-gray-700 dark:text-gray-200">{project.description}</p>
      </div>
    </CardContainer>
  )
}

export type ProjectsProps = {
  projects: ProjectData[]
}

export const Projects = ({ projects }: ProjectsProps) => (
  <Section title="Latest Projects" link="/projects" linkTitle="View all projects" containerClass="md:grid-cols-3">
    {projects.map((project) => (
      <ProjectCard project={project} key={project.title} />
    ))}
  </Section>
)
