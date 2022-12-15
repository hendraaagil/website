import Image from 'next/image'

import type { ProjectData } from '@/types/project'
import { CardContainer, ExternalLink, Heading } from '@/components'
import { imageUrl } from '@/constants/url'
import { FiExternalLink } from 'react-icons/fi'

export type ProjectCardProps = {
  project: ProjectData
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <CardContainer className="flex flex-col">
    <Image
      src={`${imageUrl}${project.thumbnail}`}
      alt={`Image preview of ${project.title} project`}
      width={1280}
      height={720}
    />
    <div className="flex h-full flex-col justify-between p-4 xs:p-6">
      <div className="space-y-2">
        <Heading variant="h2" key={project.title}>
          {project.title}
        </Heading>
        <p className="text-gray-700 dark:text-gray-200">{project.description}</p>
      </div>
      <div>
        <hr className="my-3" />
        <div className="flex justify-end space-x-4">
          <ExternalLink url={project.github}>GitHub</ExternalLink>
          {project.demo !== '-' && <ExternalLink url={project.demo}>Demo</ExternalLink>}
        </div>
      </div>
    </div>
  </CardContainer>
)
