import { defineCollection, s } from 'velite'

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
      thumbnail: s.image({ absoluteRoot: 'public' }),
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
      slug: getFilename(meta.path),
    })),
})
