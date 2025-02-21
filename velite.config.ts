import rehypeShiki from '@shikijs/rehype'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import { transformerNotationHighlight } from '@shikijs/transformers'
import { defineConfig } from 'velite'
import { about, hardware, post, project, software } from '@/collections'

export default defineConfig({
  collections: { about, hardware, software, post, project },
  mdx: {
    gfm: true,
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: 'github-dark-dimmed',
          transformers: [
            transformerNotationHighlight({ matchAlgorithm: 'v3' }),
          ],
        },
      ],
      rehypeUnwrapImages,
    ],
  },
})
