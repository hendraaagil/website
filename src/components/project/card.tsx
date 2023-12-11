import type { Project } from 'contentlayer/generated'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Heading, ImageBlur } from '@/components/ui'

export const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    href={`/projects/${project.slug}`}
    className="block"
    aria-label="Link project"
  >
    <article className="group h-full border transition-colors border-color hover:bg-color-secondary">
      <div className="relative flex flex-col justify-center overflow-hidden">
        <ImageBlur
          blurDataURL={project.thumbnailPlaceholder}
          src={project.thumbnail}
          alt={`Thumbnail for project ${project.title}`}
          width={1200}
          height={630}
          className="object-cover group-hover:scale-105"
        />
        <div className="absolute flex h-full w-full items-center justify-center space-x-2 opacity-0 transition-opacity group-hover:bg-slate-50/75 group-hover:opacity-100 dark:group-hover:bg-slate-900/75">
          <span className="text-color">View project</span>
          <ChevronRight size={16} />
        </div>
      </div>
      <div className="justify-center space-y-1 px-3 py-2">
        <Heading variant="h3">{project.title}</Heading>
        <p className="text-color-secondary">{project.description}</p>
      </div>
    </article>
  </Link>
)
