import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'

import type { ProjectData } from '@/types/project'
import { CardContainer, Heading, Hr, Link } from '@/components'
import { imageUrl } from '@/constants/url'

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
    <div className="flex h-full flex-col justify-between px-4 pb-4 pt-2 xs:px-6 xs:pb-6 xs:pt-3">
      <div className="space-y-2">
        <Heading variant="h2" key={project.title}>
          {project.title}
        </Heading>
        <p className="text-gray-700 dark:text-gray-200">{project.description}</p>
      </div>
      <div>
        <Hr className="my-3 border-gray-200 transition-[border-color] duration-300 dark:border-gray-700" />
        <div className="flex justify-end space-x-4">
          <Link url={project.github} className="flex items-center" isExternal>
            GitHub
            <FiExternalLink className="ml-1" />
          </Link>
          {project.demo !== '-' && (
            <Link url={project.demo} className="flex items-center" isExternal>
              Demo
              <FiExternalLink className="ml-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </CardContainer>
)
