import { defineCollection, s } from 'velite'

export default defineCollection({
  name: 'Hardware',
  pattern: 'data/hardware.json',
  single: true,
  schema: s.object({
    list: s.array(
      s.object({
        name: s.string(),
        items: s.array(
          s.object({
            name: s.string(),
            subitems: s.array(s.string()).optional(),
          }),
        ),
      }),
    ),
  }),
})
