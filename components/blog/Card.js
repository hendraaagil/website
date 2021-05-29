import Link from 'next/link';
import { Badge, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { format } from 'date-fns';

const Card = ({ createdAt, slug, summary, tags, title }) => (
  <Link href={`/blog/${slug}`} passHref>
    <VStack
      as="article"
      spacing={4}
      p={6}
      w="full"
      textAlign="center"
      rounded="md"
      shadow="md"
      _hover={{
        bg: 'gray.200',
        cursor: 'pointer',
        transform: 'translateY(-3px);',
        transition: 'all 0.2s ease-in-out',
      }}
    >
      <Text fontWeight="600">
        {format(new Date(createdAt), 'EEEE, MMMM do, yyyy')}
      </Text>
      <Heading size="lg" _hover={{ textDecor: 'underline' }}>
        {title}
      </Heading>
      <Text fontWeight="500" lineHeight="tall" noOfLines={[4, 3]}>
        {summary}
      </Text>
      <HStack>
        {tags.map((tag) => (
          <Badge
            key={tag.sys.id}
            variant="solid"
            py={1}
            px={2}
            bg="gray.700"
            fontWeight="500"
            textTransform="capitalize"
            rounded="md"
            shadow="inner"
          >
            {tag.sys.id}
          </Badge>
        ))}
      </HStack>
    </VStack>
  </Link>
);

export default Card;
