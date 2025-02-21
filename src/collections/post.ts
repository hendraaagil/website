import { defineCollection, s } from 'velite'
import { generateBase64Image } from '@/lib/server/utils'

const getFilename = (path: string) =>
  path
    .replace(/\.mdx$/, '')
    .split('\\')
    .at(-1) ?? ''

export default defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      metadata: s.metadata(),
      title: s.string(),
      thumbnail: s.string(),
      thumbnailCredit: s.string(),
      summary: s.string(),
      tags: s.array(s.string()),
      author: s.string(),
      createdAt: s.string(),
      updatedAt: s.string(),
      code: s.mdx(),
    })
    .transform(async (data, { meta }) => ({
      ...data,
      thumbnailPlaceholder: await generateBase64Image(data.thumbnail),
      slug: getFilename(meta.path),
    })),
})
