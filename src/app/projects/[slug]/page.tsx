import type { Metadata } from 'next'

import { project } from '@/.velite'
import { notFound } from 'next/navigation'
import { ExternalLink as ExternalLinkIcon, Github } from 'lucide-react'

import { env } from '@/lib/constants'
import { generateSeoMeta } from '@/lib/seo'
import { ExternalLink, Heading, ImageBlur, MDXContent } from '@/components/ui'
import { ArticleContainer } from '@/components/layout'

const getProject = (slug: string) =>
  project.find((project) => project.slug === slug)

export async function generateStaticParams() {
  return project.map((project) => ({
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
  const imageUrl = new URL(env.url.website + project.thumbnail.src)
  return {
    ...generateSeoMeta({
      title: project.title,
      description: project.description,
      alternates: { canonical: projectUrl.toString() },
      openGraph: {
        title: project.title,
        description: project.description,
        url: projectUrl,
        type: 'website',
        siteName: 'Hendra Agil',
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
          blurDataURL={project.thumbnail.blurDataURL}
          width={project.thumbnail.width}
          height={project.thumbnail.height}
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
              <Github className="h-4 w-4" />
              <span>Source code</span>
            </ExternalLink>
          )}
          {project.demo && (
            <ExternalLink
              href={project.demo}
              className="flex items-center space-x-1"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              <span>Live demo</span>
            </ExternalLink>
          )}
        </div>
      </div>
      <hr className="border-color" />
      <MDXContent code={project.code} />
    </ArticleContainer>
  )
}
