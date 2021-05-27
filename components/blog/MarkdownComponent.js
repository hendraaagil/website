import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {
  Box,
  Code,
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
} from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const MarkdownComponent = ({ markdownContent }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      children={markdownContent}
      components={{
        a: ({ children, href }) => (
          <Link href={href} isExternal color="brand.blue" textDecor="underline">
            {children}
          </Link>
        ),
        blockquote: ({ children }) => (
          <Box
            as="blockquote"
            my={3}
            pl={3}
            py={0.5}
            bg="gray.200"
            borderLeftWidth="4px"
            borderColor="brand.blue"
            rounded="sm"
          >
            {children}
          </Box>
        ),
        code: ({ inline, className, children }) => {
          const match = /language-(\w+)/.exec(className || '');
          return inline ? (
            <Code
              py={0.5}
              px={1.5}
              bg="gray.200"
              fontFamily="Fira Code"
              fontWeight="500"
              rounded="sm"
            >
              {children}
            </Code>
          ) : (
            <SyntaxHighlighter
              style={nord}
              language={match[1]}
              children={String(children).replace(/\n$/, '')}
              showLineNumbers
            />
          );
        },
        h1: ({ children }) => (
          <Heading
            as="h1"
            fontSize="4xl"
            my={3}
            fontWeight="600"
            lineHeight="tall"
          >
            {children}
          </Heading>
        ),
        h2: ({ children }) => (
          <Heading
            as="h2"
            fontSize="3xl"
            my={3}
            fontWeight="600"
            lineHeight="tall"
          >
            {children}
          </Heading>
        ),
        h3: ({ children }) => (
          <Heading
            as="h3"
            fontSize="2xl"
            my={3}
            fontWeight="600"
            lineHeight="tall"
          >
            {children}
          </Heading>
        ),
        h4: ({ children }) => (
          <Heading
            as="h4"
            fontSize="xl"
            my={3}
            fontWeight="600"
            lineHeight="tall"
          >
            {children}
          </Heading>
        ),
        h5: ({ children }) => (
          <Heading
            as="h5"
            fontSize="lg"
            my={3}
            fontWeight="600"
            lineHeight="tall"
          >
            {children}
          </Heading>
        ),
        h6: ({ children }) => (
          <Heading
            as="h6"
            fontSize="md"
            my={3}
            fontWeight="600"
            lineHeight="tall"
          >
            {children}
          </Heading>
        ),
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
                bg="gray.200"
                textAlign="center"
                rounded="md"
                overflow="hidden"
              >
                {children}
              </Box>
            );
          }
          return <Text my={3}>{children}</Text>;
        },
        ul: ({ children }) => <UnorderedList pl={4}>{children}</UnorderedList>,
        table: ({ children }) => (
          <Table bg="gray.200" rounded="md" overflow="hidden">
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
    />
  );
};

export default MarkdownComponent;
