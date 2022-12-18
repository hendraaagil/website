export type BlogMetadata = Record<string, string> & {
  title: string
  thumbnail: string
  thumbnailCredit: string
  summary: string
  tags: string[]
  author: string
  createdAt: string
  updatedAt: string
  slug: string
}

export type BlogContent = {
  compiledSource: string
  frontmatter: BlogMetadata
}