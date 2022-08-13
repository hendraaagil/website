import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { MDXRemote } from 'next-mdx-remote';
import {
  Badge,
  Box,
  Divider,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';

import Comments from '@/components/blog/Comments';
import { getBlogBySlug, getBlogs } from '@/libs/blog';
import markdownComponents from '@/components/blog/contents';

export const getStaticPaths = async () => {
  const blogs = (await getBlogs())
    .map((blog) => blog.frontmatter)
    .sort((first, second) => second.createdAt.localeCompare(first.createdAt));
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug);
  return { props: { blog } };
};

const DetailBlog = ({ blog }) => {
  console.log('Blog >>', blog);
  const {
    author,
    slug,
    summary,
    tags,
    thumbnail,
    thumbnailCredit,
    title,
    createdAt,
    updatedAt,
  } = blog.frontmatter;
  // const { description, file } = thumbnail.fields;
  // const { width, height } = file.details.image;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;
  const router = useRouter();

  const tagBg = useColorModeValue('brand.light', 'brand.dark');
  const tagColor = useColorModeValue('brand.dark', 'brand.light');

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
            authors: [author],
            tags,
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}${thumbnail}`,
              width: 1200,
              height: 630,
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
        bg={useColorModeValue('gray.200', 'gray.700')}
        textAlign="center"
        rounded="md"
        overflow="hidden"
      >
        <Image src={thumbnail} alt={title} width={1200} height={630} />
        <Text as="figcaption" mt={0.5} mb={2} fontSize="sm">
          {thumbnailCredit}
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
            key={tag}
            onClick={() => router.push(`/blog?tag=${tag}`)}
            py={1}
            px={2}
            bg={tagBg}
            color={tagColor}
            fontWeight="500"
            textTransform="capitalize"
            rounded="md"
            shadow="inner"
            transition="all 0.2s ease-in-out"
            _hover={{
              textDecor: 'underline',
              cursor: 'pointer',
            }}
          >
            {tag}
          </Badge>
        ))}
      </HStack>
      <Divider mt={4} mb={2} />
      <Box as="article" lineHeight="tall">
        <MDXRemote {...blog} components={markdownComponents} />
      </Box>
      <Divider my={4} />
      <Comments />
    </>
  );
};

export default DetailBlog;
