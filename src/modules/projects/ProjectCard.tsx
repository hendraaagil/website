import Image from 'next/image'

import type { ProjectData } from '@/types/project'
import { CardContainer, Heading, Link } from '@/components'
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
          <Link url={project.github} isExternal>
            GitHub
          </Link>
          {project.demo !== '-' && (
            <Link url={project.demo} isExternal>
              Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  </CardContainer>
)
