import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { Divider, Heading, Text, VStack } from '@chakra-ui/react';

import Card from '@/components/blog/Card';
import PageContainer from '@/components/PageContainer';
import { getBlogs } from '@/libs/blog';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticProps = async () => {
  // const res = await client.getEntries({
  //   content_type: 'blog',
  //   order: '-sys.createdAt',
  // });
  const blogs = await getBlogs();
  console.dir(blogs, { depth: null });

  return { props: { blogs: blogs.map((blog) => blog.frontmatter) } };
};

const Blog = ({ blogs }) => {
  const title = 'Blog';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog`;

  const router = useRouter();
  const { query } = router;
  const [blogLists, setBlogLists] = useState(blogs);

  // useEffect(() => {
  //   if (!query) return;

  //   const fetchBlogByTag = async () => {
  //     const res = await client.getEntries({
  //       content_type: 'blog',
  //       'metadata.tags.sys.id[in]': query.tag,
  //       order: '-sys.createdAt',
  //     });
  //     setBlogLists(res.items);
  //   };

  //   fetchBlogByTag();
  // }, [query]);

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
        <VStack spacing={6}>
          {blogLists.map((blog) => {
            const { createdAt, slug, summary, tags } = blog;

            return (
              <Card
                key={slug}
                slug={slug}
                summary={summary}
                title={blog.title}
                tags={tags}
                createdAt={createdAt}
                router={router}
              />
            );
          })}
        </VStack>
      </PageContainer>
    </>
  );
};

export default Blog;
