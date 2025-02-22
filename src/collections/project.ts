import { defineCollection, s } from 'velite'
import { getFilename } from '@/lib/utils'

export default defineCollection({
  name: 'Project',
  pattern: 'project/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      thumbnail: s.image({ absoluteRoot: 'public' }),
      description: s.string(),
      github: s.string().optional(),
      demo: s.string().optional(),
      code: s.mdx(),
    })
    .transform(async (data, { meta }) => {
      const filename = getFilename(meta.path).split('-')
      console.info('[Project] Generated slug:', filename)
      return {
        ...data,
        position: Number(filename[0]),
        slug: filename.slice(1).join('-'),
      }
    }),
})
