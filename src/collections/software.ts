import { defineCollection, s } from 'velite'

export default defineCollection({
  name: 'Software',
  pattern: 'data/software.json',
  single: true,
  schema: s.object({
    list: s.array(
      s.object({
        name: s.string(),
        items: s.array(s.object({ name: s.string(), link: s.string() })),
      }),
    ),
  }),
})
