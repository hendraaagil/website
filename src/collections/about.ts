import { defineCollection, s } from 'velite'

export default defineCollection({
  name: 'About',
  pattern: 'data/about.json',
  single: true,
  schema: s.object({
    avatar: s.image({ absoluteRoot: 'public' }),
    name: s.string(),
    username: s.string(),
    summary: s.string(),
    description: s.array(s.string()),
    skills: s.array(
      s.object({
        name: s.string(),
        items: s.array(s.string()),
      }),
    ),
    social: s.object({
      description: s.string(),
      links: s.array(
        s.object({
          name: s.string(),
          url: s.string(),
        }),
      ),
    }),
  }),
})
