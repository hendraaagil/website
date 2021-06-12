import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { Divider, Heading, Text, VStack } from '@chakra-ui/react';

import Card from '../../components/blog/Card';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: 'blog' });

  return { props: { blogs: res.items } };
};

const Blog = ({ blogs }) => {
  const title = 'Blog';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />

      <Heading as="h1" mt={8} textAlign="center">
        Blog
      </Heading>
      <Text my={5} fontWeight="600" textAlign="center">
        Sharing by Writing
      </Text>
      <Divider mb={8} />
      <VStack spacing={6}>
        {blogs.map((blog) => {
          const { slug, summary } = blog.fields;
          const { tags } = blog.metadata;
          const { createdAt, id } = blog.sys;

          return (
            <Card
              key={id}
              slug={slug}
              summary={summary}
              title={blog.fields.title}
              tags={tags}
              createdAt={createdAt}
            />
          );
        })}
      </VStack>
    </>
  );
};

export default Blog;
