import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { ExternalLink as ExternalLinkIcon, Github } from 'lucide-react'

import { ExternalLink, Heading, ImageBlur, MDXContent } from '@/components/ui'
import { ArticleContainer } from '@/components/layout'

const getProject = (slug: string) =>
  allProjects.find((project) => project.slug === slug)

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) return notFound()

  return (
    <ArticleContainer>
      <div className="overflow-hidden border border-color">
        <ImageBlur
          src={project.thumbnail}
          alt={`Thumbnail for project ${project.title}`}
          blurDataURL={project.thumbnailPlaceholder}
          width={1200}
          height={720}
        />
      </div>
      <Heading>{project.title}</Heading>
      <div className="space-y-2">
        <p className="text-color-secondary">{project.description}</p>
        <div className="flex items-center space-x-4">
          {project.github && (
            <ExternalLink
              href={project.github}
              className="flex items-center space-x-1"
            >
              <Github size={16} />
              <span>Source code</span>
            </ExternalLink>
          )}
          {project.demo && (
            <ExternalLink
              href={project.demo}
              className="flex items-center space-x-1"
            >
              <ExternalLinkIcon size={16} />
              <span>Live demo</span>
            </ExternalLink>
          )}
        </div>
      </div>
      <hr className="border-color" />
      <MDXContent code={project.body.code} />
    </ArticleContainer>
  )
}
