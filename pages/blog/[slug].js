import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Badge, Box, Divider, Heading, HStack, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

import { renderOptions } from '../../lib/renderOptions';
import Disqus from '../../components/blog/Disqus';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'blog' });
  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  });

  return { props: { blog: items[0] } };
};

const DetailBlog = ({ blog }) => {
  const { content, slug, summary, thumbnail, title } = blog.fields;
  const { tags } = blog.metadata;
  const { createdAt, id, updatedAt } = blog.sys;
  const { width, height } = thumbnail.fields.file.details.image;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          title: title,
          description: summary,
          url,
          type: 'article',
          article: {
            publishedTime: createdAt,
            modifiedTime: updatedAt,
            authors: ['Hendra Agil'],
            tags: tags.map((tag) => tag.sys.id),
          },
          images: [
            {
              url: `https:${thumbnail.fields.file.url}`,
              width,
              height,
              alt: title,
            },
          ],
        }}
      />
      <Box my={2} textAlign="center">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={thumbnail.fields.title}
          width={width}
          height={height}
        />
      </Box>
      <Text pt={1} fontWeight="600">
        Published on {format(new Date(createdAt), 'EEEE, MMMM do, yyyy')}
      </Text>
      <Heading as="h1" my={3}>
        {title}
      </Heading>
      <Text pb={2} lineHeight="tall">
        {summary}
      </Text>
      <HStack>
        {tags.map((tag) => (
          <Badge
            key={tag.sys.id}
            py={1}
            px={2}
            bg="brand.light"
            color="brand.dark"
            fontWeight="500"
            textTransform="capitalize"
            rounded="md"
            shadow="inner"
          >
            {tag.sys.id}
          </Badge>
        ))}
      </HStack>
      <Divider mt={4} mb={2} />
      <Box as="article" lineHeight="tall">
        {documentToReactComponents(content, renderOptions)}
      </Box>
      <Divider my={4} />
      <Disqus url={url} identifier={id} title={title} />
    </>
  );
};

export default DetailBlog;
