import rehypeUnwrapImages from 'rehype-unwrap-images'
import { defineConfig } from 'velite'
import { about, hardware, post, project, software } from '@/collections'

export default defineConfig({
  collections: { about, hardware, software, post, project },
  mdx: {
    gfm: true,
    rehypePlugins: [rehypeUnwrapImages],
  },
})
