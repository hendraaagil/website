/* eslint-disable @next/next/no-img-element */
'use server'

import { JSDOM } from 'jsdom'
import { ExternalLink } from '@/components/ui'
import { cn } from '@/lib/utils'

async function getOpenGraphTags(url: URL | string) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`)
    }

    const html = await response.text()
    const dom = new JSDOM(html)
    const document = dom.window.document

    // Find and extract Open Graph tags
    const ogData: { [key: string]: string } = {}
    const metaTags = document.querySelectorAll('meta[property^="og:"]')
    metaTags.forEach((tag) => {
      if (tag.hasAttribute('property') && tag.hasAttribute('content')) {
        const property = (tag.getAttribute('property') as string).replace(
          'og:',
          '',
        )
        const content = tag.getAttribute('content') as string
        ogData[property] = content
      }
    })

    return ogData
  } catch (error) {
    console.error(error)
  }
}

export type LinkPreviewProps = {
  href: string
  withImage?: boolean
  fullImage?: boolean
}

export const LinkPreview = async ({
  href,
  withImage,
  fullImage,
}: LinkPreviewProps) => {
  const url = new URL(href)
  const data = await getOpenGraphTags(url)

  return (
    <div
      className={cn('group mb-4 mt-2 border bg-color-secondary border-color', {
        'max-w-lg': fullImage,
      })}
    >
      <ExternalLink
        href={data?.url || url.toString() || '#'}
        className="no-underline"
      >
        {withImage && (
          <div className="overflow-hidden">
            <img
              src={
                (data?.image as string) ||
                '/assets/main/placeholder-content.png'
              }
              alt={(data?.title as string) || 'Link preview image'}
              className={cn('w-full', {
                'max-h-24 object-cover sm:max-h-32': !fullImage,
              })}
            />
          </div>
        )}
        <div className="px-2 py-1.5">
          <p className="line-clamp-1 font-medium group-hover:underline">
            {data?.title || 'No title'}
          </p>
          <p className="line-clamp-3 text-sm text-color-secondary">
            {data?.description || 'No description'}
          </p>
        </div>
      </ExternalLink>
    </div>
  )
}
