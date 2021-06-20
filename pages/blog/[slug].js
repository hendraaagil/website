import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { Badge, Box, Divider, Heading, HStack, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

import MarkdownComponent from '../../components/blog/MarkdownComponent';
import Comments from '../../components/blog/Comments';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'blog' });
  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

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
  const { markdownContent, slug, summary, thumbnail, title } = blog.fields;
  const { tags } = blog.metadata;
  const { createdAt, id, updatedAt } = blog.sys;
  const { description, file } = thumbnail.fields;
  const { width, height } = file.details.image;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          title,
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
      <Box
        as="figure"
        mt={0.5}
        mb={2}
        mx="auto"
        w="fit-content"
        bg="gray.200"
        textAlign="center"
        rounded="md"
        overflow="hidden"
      >
        <Image
          src={`https:${file.url}`}
          alt={thumbnail.fields.title}
          width={width}
          height={height}
        />
        <Text as="figcaption" mt={0.5} mb={2} fontSize="sm">
          {description}
        </Text>
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
            onClick={() => router.push(`/blog?tag=${tag.sys.id}`)}
            py={1}
            px={2}
            bg="brand.light"
            color="brand.dark"
            fontWeight="500"
            textTransform="capitalize"
            rounded="md"
            shadow="inner"
            transition="all 0.2s ease-in-out"
            _hover={{
              bg: 'gray.200',
              textDecor: 'underline',
              cursor: 'pointer',
            }}
          >
            {tag.sys.id}
          </Badge>
        ))}
      </HStack>
      <Divider mt={4} mb={2} />
      <Box as="article" lineHeight="tall">
        <MarkdownComponent markdownContent={markdownContent} />
      </Box>
      <Divider my={4} />
      <Comments pageUrl={url} pageId={id} pageTitle={title} />
    </>
  );
};

export default DetailBlog;
