import fs from 'fs/promises';
import path from 'path';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'src/_content');

const getAllBlogPaths = async () => {
  const files = await fs.readdir(contentDirectory);
  return files.filter((file) => /\.mdx?$/.test(file));
};

const getMdxContent = async (contentPath) => {
  const filePath = path.join(`${contentDirectory}`, contentPath);
  const file = await fs.readFile(filePath, 'utf8');
  const content = await serialize(file, {
    mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism] },
    parseFrontmatter: true,
  });

  return {
    ...content,
    frontmatter: {
      ...content.frontmatter,
      slug: contentPath.replace('.mdx', ''),
    },
  };
};

export const getBlogs = async () => {
  const paths = await getAllBlogPaths();
  const files = paths.map(async (p) => getMdxContent(p));
  return Promise.all(files);
};

export const getBlogBySlug = async (slug) => getMdxContent(`${slug}.mdx`);
