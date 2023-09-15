import fs from 'fs/promises'
import path from 'path'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import { serialize } from 'next-mdx-remote/serialize'

import type { BlogContent } from '@/types/blog'
import { imageUrl } from '@/constants/url'
import { generateBase64Image } from './image'

const contentDirectory = path.join(process.cwd(), 'src/_blogs')

const getAllBlogPaths = async () => {
  const files = await fs.readdir(contentDirectory)
  return files.filter((file) => /\.mdx?$/.test(file))
}

const getMdxContent = async (contentPath: string): Promise<BlogContent> => {
  const filePath = path.join(`${contentDirectory}`, contentPath)
  const file = await fs.readFile(filePath, 'utf8')
  const content = await serialize(file, {
    mdxOptions: { remarkPlugins: [remarkGfm, remarkUnwrapImages], rehypePlugins: [rehypePrism] },
    parseFrontmatter: true,
  })
  const thumbnailPlaceholder = await generateBase64Image(`${imageUrl}${content.frontmatter?.thumbnail}`)

  return {
    ...content,
    frontmatter: {
      ...content.frontmatter,
      slug: contentPath.replace('.mdx', ''),
      thumbnailPlaceholder,
    },
  } as BlogContent
}

export const getBlogs = async () => {
  const paths = await getAllBlogPaths()
  const files = paths.map(async (p) => getMdxContent(p))
  const blogs = await Promise.all(files)
  return (
    await Promise.all(
      blogs.map(async (blog) => {
        const thumbnailPlaceholder = await generateBase64Image(`${imageUrl}${blog.frontmatter.thumbnail}`)
        return { ...blog.frontmatter, thumbnailPlaceholder }
      })
    )
  ).sort((first, second) => second.createdAt.localeCompare(first.createdAt))
}

export const getBlogBySlug = async (slug: string) => getMdxContent(`${slug}.mdx`)
