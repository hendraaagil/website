import { defineCollection, s } from 'velite'

const getFilename = (path: string) =>
  path
    .replace(/\.mdx$/, '')
    .split(/[\\/]/)
    .at(-1)
    ?.split('-') ?? []

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
      const filename = getFilename(meta.path)
      return {
        ...data,
        position: Number(filename[0]),
        slug: filename.slice(1).join('-'),
      }
    }),
})
