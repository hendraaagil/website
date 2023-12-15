import type { Metadata } from 'next'

import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { ExternalLink as ExternalLinkIcon, Github } from 'lucide-react'

import { env } from '@/lib/constants'
import { generateSeoMeta } from '@/lib/seo'
import { ExternalLink, Heading, ImageBlur, MDXContent } from '@/components/ui'
import { ArticleContainer } from '@/components/layout'

const getProject = (slug: string) =>
  allProjects.find((project) => project.slug === slug)

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const project = getProject(params.slug)
  if (!project) return {}

  const projectUrl = new URL(env.url.website + '/projects/' + params.slug)
  const imageUrl = new URL(env.url.website + project.thumbnail)
  return {
    ...generateSeoMeta({
      title: project.title,
      description: project.description,
      alternates: { canonical: projectUrl },
      openGraph: {
        title: project.title,
        description: project.description,
        url: projectUrl,
        images: [
          {
            url: `/og/content?title=${encodeURIComponent(
              project.title,
            )}&link=${encodeURIComponent(
              projectUrl.toString(),
            )}&image=${encodeURIComponent(imageUrl.toString())}`,
            width: 1200,
            height: 630,
            alt: project.title,
          },
        ],
      },
      robots: {
        index: false,
        follow: true,
        googleBot: {
          index: false,
          follow: true,
        },
      },
    }),
  }
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
