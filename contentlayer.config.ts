import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypePrism from 'rehype-prism-plus'

import {
  type ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'
import { generateBase64Image } from './src/lib/server/utils'
import { Hardware, Skill, Social, Software } from './src/types/content'

// Common computed fields
const computedFields: ComputedFields = {
  thumbnailPlaceholder: {
    type: 'string',
    resolve: async (doc) => await generateBase64Image(doc.thumbnail),
  },
}

// Document types
const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `data/about.json`,
  contentType: 'data',
  fields: {
    avatar: { type: 'string', required: true },
    name: { type: 'string', required: true },
    username: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    description: { type: 'list', of: { type: 'string' }, required: true },
    skills: { type: 'list', of: Skill, required: true },
    social: { type: 'nested', of: Social, required: true },
  },
  computedFields: {
    avatarPlaceholder: {
      type: 'string',
      resolve: async (doc) => await generateBase64Image(doc.avatar),
    },
  },
}))

const Equipment = defineDocumentType(() => ({
  name: 'Equipment',
  filePathPattern: `data/equipment.json`,
  contentType: 'data',
  fields: {
    software: { type: 'nested', of: Software, required: true },
    hardware: { type: 'nested', of: Hardware, required: true },
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    thumbnailCredit: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    author: { type: 'string', required: true },
    createdAt: { type: 'string', required: true },
    updatedAt: { type: 'string', required: true },
  },
  computedFields: {
    ...computedFields,
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
    },
    readTime: {
      type: 'number',
      resolve: (doc) => Math.ceil(doc.body.raw.split(' ').length / 200),
    },
    createdAt: { type: 'string', resolve: (doc) => doc.createdAt.trim() },
    updatedAt: { type: 'string', resolve: (doc) => doc.updatedAt.trim() },
  },
}))

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `project/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    description: { type: 'string', required: true },
    github: { type: 'string' },
    demo: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    // 01-foo-bar.mdx -> 1
    position: {
      type: 'number',
      resolve: (doc) =>
        Number(
          doc._raw.sourceFileName
            .replace(/\.mdx/, '')
            .split('-')
            .slice(0, 1)
            .toString(),
        ),
    },
    // 01-foo-bar.mdx -> foo-bar
    slug: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.sourceFileName
          .replace(/\.mdx/, '')
          .split('-')
          .slice(1)
          .join('-'),
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/_content',
  documentTypes: [About, Equipment, Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm, remarkUnwrapImages],
    rehypePlugins: [rehypePrism],
  },
})
