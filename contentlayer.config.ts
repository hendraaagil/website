import {
  type ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'
import { generateBase64Image } from './src/lib/server/utils'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
  },
  thumbnailPlaceholder: {
    type: 'string',
    resolve: async (doc) => await generateBase64Image(doc.thumbnail),
  },
}

const Skill = defineNestedType(() => ({
  name: 'Skill',
  fields: {
    name: { type: 'string', required: true },
    items: { type: 'list', of: { type: 'string' }, required: true },
  },
}))

const SocialLink = defineNestedType(() => ({
  name: 'SocialLink',
  fields: {
    name: { type: 'string', required: true },
    url: { type: 'string', required: true },
  },
}))

const Social = defineNestedType(() => ({
  name: 'Social',
  fields: {
    description: { type: 'string', required: true },
    links: { type: 'list', of: SocialLink, required: true },
  },
}))

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
  computedFields,
}))

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `project/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    position: { type: 'number', required: true },
    title: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    description: { type: 'string', required: true },
    github: { type: 'string' },
    demo: { type: 'string' },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'src/_content',
  documentTypes: [About, Post, Project],
})
