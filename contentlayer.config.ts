import {
  type ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
  },
}

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    thumbnailPlaceholder: { type: 'string' },
    thumbnailCredit: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    author: { type: 'string', required: true },
    createdAt: { type: 'string', required: true },
    updatedAt: { type: 'string', required: true },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'src/_content',
  documentTypes: [Post],
})
