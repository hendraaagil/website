import Image from 'next/image';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Badge, Box, Divider, Heading, HStack, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

import { renderOptions } from '../../lib/renderOptions';

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
  const { content, summary, thumbnail, title } = blog.fields;
  const { tags } = blog.metadata;
  const { createdAt } = blog.sys;

  console.log(thumbnail);

  return (
    <>
      <Box my={2}>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={thumbnail.fields.title}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </Box>
      <Text pt={1} fontWeight="600">
        Published on {format(new Date(createdAt), 'EEEE, MMMM do, yyyy')}
      </Text>
      <Heading my={3}>{title}</Heading>
      <Text py={2} lineHeight="tall">
        {summary}
      </Text>
      <HStack>
        {tags.map((tag) => (
          <Badge
            key={tag.sys.id}
            variant="solid"
            colorScheme="whiteAlpha"
            py={1}
            px={2}
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
      <Box lineHeight="tall">
        {documentToReactComponents(content, renderOptions)}
      </Box>
    </>
  );
};

export default DetailBlog;
