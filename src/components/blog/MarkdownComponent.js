import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import {
  Box,
  Divider,
  Heading,
  Image,
  Link,
  OrderedList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';

const MarkdownComponent = ({ markdownContent }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  const toLowerDashed = (string) => {
    const result = string.toString().toLowerCase().replace(/\s/g, '-');
    return result;
  };

  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      rehypePlugins={[rehypePrism]}
      components={{
        a: ({ children, href }) => (
          <Link
            href={href}
            isExternal
            color="brand.blue"
            fontWeight="600"
            textDecor="underline"
          >
            {children}
          </Link>
        ),
        blockquote: ({ children }) => (
          <Box
            as="blockquote"
            my={3}
            pl={3}
            py={0.5}
            bg={bgColor}
            borderLeftWidth="4px"
            borderColor="brand.blue"
            rounded="sm"
          >
            {children}
          </Box>
        ),
        h1: ({ children }) => {
          const id = toLowerDashed(children);
          return (
            <a href={`#${id}`}>
              <Heading
                as="h1"
                id={id}
                fontSize="4xl"
                my={3}
                lineHeight="tall"
                _hover={{ textDecor: 'underline' }}
              >
                {children}
              </Heading>
            </a>
          );
        },
        h2: ({ children }) => {
          const id = toLowerDashed(children);
          return (
            <a href={`#${id}`}>
              <Heading
                as="h2"
                id={id}
                fontSize="3xl"
                my={3}
                lineHeight="tall"
                _hover={{ textDecor: 'underline' }}
              >
                {children}
              </Heading>
            </a>
          );
        },
        h3: ({ children }) => {
          const id = toLowerDashed(children);
          return (
            <a href={`#${id}`}>
              <Heading
                as="h3"
                id={id}
                fontSize="2xl"
                my={3}
                lineHeight="tall"
                _hover={{ textDecor: 'underline' }}
              >
                {children}
              </Heading>
            </a>
          );
        },
        h4: ({ children }) => {
          const id = toLowerDashed(children);
          return (
            <a href={`#${id}`}>
              <Heading
                as="h4"
                id={id}
                fontSize="xl"
                my={3}
                lineHeight="tall"
                _hover={{ textDecor: 'underline' }}
              >
                {children}
              </Heading>
            </a>
          );
        },
        h5: ({ children }) => {
          const id = toLowerDashed(children);
          return (
            <a href={`#${id}`}>
              <Heading
                as="h5"
                id={id}
                fontSize="lg"
                my={3}
                lineHeight="tall"
                _hover={{ textDecor: 'underline' }}
              >
                {children}
              </Heading>
            </a>
          );
        },
        h6: ({ children }) => {
          const id = toLowerDashed(children);
          return (
            <a href={`#${id}`}>
              <Heading
                as="h6"
                id={id}
                fontSize="md"
                my={3}
                lineHeight="tall"
                _hover={{ textDecor: 'underline' }}
              >
                {children}
              </Heading>
            </a>
          );
        },
        hr: () => <Divider my={3} />,
        img: ({ alt, src }) => (
          <>
            <Image src={src} alt={alt} />
            <Text as="figcaption" my={2} fontSize="sm">
              {alt}
            </Text>
          </>
        ),
        ol: ({ children }) => <OrderedList pl={4}>{children}</OrderedList>,
        p: ({ node, children }) => {
          if (node.children[0].tagName === 'img') {
            return (
              <Box
                as="figure"
                my={3}
                mx="auto"
                w="fit-content"
                bg={bgColor}
                textAlign="center"
                rounded="md"
                overflow="hidden"
              >
                {children}
              </Box>
            );
          }
          return (
            <Text my={3} fontWeight="400">
              {children}
            </Text>
          );
        },
        ul: ({ children }) => <UnorderedList pl={4}>{children}</UnorderedList>,
        table: ({ children }) => (
          <Table bg={bgColor} rounded="md" overflow="hidden">
            {children}
          </Table>
        ),
        tbody: ({ children }) => <Tbody>{children}</Tbody>,
        td: ({ children }) => (
          <Td py={[1.5, 1.5, 3]} px={[3, 3, 6]} fontSize={['sm', 'sm', 'md']}>
            {children}
          </Td>
        ),
        th: ({ children }) => (
          <Th
            py={[1.5, 1.5, 3]}
            px={[3, 3, 6]}
            bg="brand.blue"
            color="brand.light"
            fontSize={['sm', 'sm', 'md']}
            fontWeight="600"
            textTransform="capitalize"
          >
            {children}
          </Th>
        ),
        thead: ({ children }) => <Thead>{children}</Thead>,
        tr: ({ children }) => <Tr>{children}</Tr>,
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
};

export default MarkdownComponent;
