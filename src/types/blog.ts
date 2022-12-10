export type BlogMetadata = {
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
