import { defineCollection, s } from 'velite'
import { getFilename } from '@/lib/utils'

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
    .transform(async (data, { meta }) => {
      const filename = getFilename(meta.path)
      console.info('[Post] Generated slug:', filename)
      return {
        ...data,
        slug: filename,
      }
    }),
})
