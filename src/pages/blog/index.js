import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Divider, Heading, Text } from '@chakra-ui/react';

import BlogList from '@/components/blog/BlogList';
import PageContainer from '@/components/PageContainer';
import { getBlogs } from '@/libs/blog';

export const getStaticProps = async () => {
  const blogs = (await getBlogs())
    .map((blog) => blog.frontmatter)
    .sort((first, second) => second.createdAt.localeCompare(first.createdAt));

  return { props: { blogs } };
};

const Blog = ({ blogs }) => {
  const title = 'Blog';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog`;

  const router = useRouter();
  const { query } = router;
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    if (!query.tag) return;

    const fetchBlogByTag = () => {
      setFilteredBlogs(blogs.filter((blog) => blog.tags.includes(query.tag)));
    };

    fetchBlogByTag();
  }, [blogs, query]);

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />

      <PageContainer>
        <Heading as="h1" mt={8} textAlign="center">
          Blog
        </Heading>
        <Text my={5} fontWeight="600" textAlign="center">
          Sharing by Writing
        </Text>
        <Divider mb={8} />
        {query.tag ? (
          <BlogList blogs={filteredBlogs} router={router} />
        ) : (
          <BlogList blogs={blogs} router={router} />
        )}
      </PageContainer>
    </>
  );
};

export default Blog;
