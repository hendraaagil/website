import { MetadataRoute } from 'next'
import { env } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `${env.url.website}/sitemap.xml`,
    host: env.url.website,
  }
}
