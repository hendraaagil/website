import { createClient } from 'contentful';
import { Heading, VStack } from '@chakra-ui/react';
import Card from '../../components/blog/Card';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: 'blog' });

  return {
    props: { blogs: res.items },
  };
};

const Blog = ({ blogs }) => {
  return (
    <>
      <Heading as="h1" my={8} textAlign="center">
        Blog
      </Heading>
      <VStack spacing={6}>
        {blogs.map((blog) => {
          const { slug, summary, title } = blog.fields;
          const { tags } = blog.metadata;
          const { createdAt, id } = blog.sys;

          return (
            <Card
              key={id}
              slug={slug}
              summary={summary}
              title={title}
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
