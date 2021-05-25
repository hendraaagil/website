import Image from 'next/image';
import {
  Box,
  Code,
  Divider,
  Heading,
  Link,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

export const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <Heading as="h1" size="xl" py={2} fontWeight="600">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading as="h2" size="lg" py={2} fontWeight="600">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading as="h3" size="md" py={2} fontWeight="600">
        {children}
      </Heading>
    ),
    [BLOCKS.HR]: () => <Divider py={2} />,
    [BLOCKS.PARAGRAPH]: (node, children) => <Text py={2}>{children}</Text>,
    [BLOCKS.QUOTE]: (node, children) => (
      <Box
        as="blockquote"
        pl={4}
        py={0.5}
        bg="gray.200"
        borderLeft="2px"
        borderColor="brand.blue"
        rounded="sm"
      >
        {children}
      </Box>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <OrderedList pl={5}>{children}</OrderedList>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <UnorderedList pl={5}>{children}</UnorderedList>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <Link
        href={node.data.uri}
        isExternal
        color="brand.blue"
        textDecor="underline"
      >
        {children}
      </Link>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      const { url, details } = file;
      const { width, height } = details.image;

      return (
        <Box
          as="figure"
          my={2}
          mx="auto"
          w="fit-content"
          bg="gray.200"
          textAlign="center"
          rounded="md"
          overflow="hidden"
        >
          <Image
            src={`https:${url}`}
            alt={title}
            width={width}
            height={height}
          />
          <Text as="figcaption" mt={1} mb={2} fontSize="sm">
            {title}
          </Text>
        </Box>
      );
    },
  },
  renderMark: {
    [MARKS.CODE]: (text) => (
      <Code py={2} px={4} bg="gray.200" rounded="sm">
        {text}
      </Code>
    ),
  },
};
