import { defineCollection, s } from 'velite'
import { generateBase64Image } from '@/lib/server/utils'

const getFilename = (path: string) =>
  path
    .replace(/\.mdx$/, '')
    .split('\\')
    .at(-1)
    ?.split('-') ?? []

export default defineCollection({
  name: 'Project',
  pattern: 'project/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      thumbnail: s.string(),
      description: s.string(),
      github: s.string().optional(),
      demo: s.string().optional(),
      code: s.mdx(),
    })
    .transform(async (data, { meta }) => {
      const filename = getFilename(meta.path)
      return {
        ...data,
        thumbnailPlaceholder: await generateBase64Image(data.thumbnail),
        position: Number(filename[0]),
        slug: filename.slice(1).join('-'),
      }
    }),
})
