import { defineCollection, s } from 'velite'
import { generateBase64Image } from '@/lib/server/utils'

export default defineCollection({
  name: 'About',
  pattern: 'data/about.json',
  single: true,
  schema: s
    .object({
      avatar: s.string(),
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
    })
    .transform(async (data) => ({
      ...data,
      avatarPlaceholder: await generateBase64Image(data.avatar),
    })),
})
