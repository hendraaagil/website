import fs from 'fs/promises';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'src/_content');

const getAllBlogPaths = async () => {
  const files = await fs.readdir(contentDirectory);
  return files.filter((file) => /\.mdx?$/.test(file));
};

// eslint-disable-next-line
export const getBlogs = async () => {
  const paths = await getAllBlogPaths();

  const files = paths.map(async (p) => {
    const filePath = path.join(`${contentDirectory}`, p);
    const file = await fs.readFile(filePath, 'utf8');
    const source = await serialize(file, { parseFrontmatter: true });

    return {
      ...source,
      frontmatter: {
        ...source.frontmatter,
        slug: p.replace('.mdx', ''),
      },
    };
  });

  return Promise.all(files);
};

// export const getBlogBySlug = async (slug) => {};
