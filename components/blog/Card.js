import Link from 'next/link';
import {
  Badge,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { format } from 'date-fns';

const Card = ({ createdAt, router, slug, summary, tags, title }) => (
  <VStack
    as="article"
    spacing={4}
    p={6}
    w="full"
    textAlign="center"
    rounded="md"
    shadow="md"
    transition="all 0.2s ease-in-out"
    _hover={{
      bg: useColorModeValue('gray.200', 'gray.700'),
      transform: 'translateY(-3px);',
    }}
  >
    <Text fontWeight="600">
      {format(new Date(createdAt), 'EEEE, MMMM do, yyyy')}
    </Text>
    <Link href={`/blog/${slug}`} passHref>
      <Heading size="lg" _hover={{ textDecor: 'underline', cursor: 'pointer' }}>
        {title}
      </Heading>
    </Link>
    <Text fontWeight="500" lineHeight="tall" noOfLines={[4, 3]}>
      {summary}
    </Text>
    <HStack>
      {tags.map((tag) => (
        <Badge
          key={tag.sys.id}
          onClick={() => router.replace(`/blog?tag=${tag.sys.id}`)}
          variant="solid"
          py={1}
          px={2}
          bg="gray.700"
          fontWeight="500"
          textTransform="capitalize"
          rounded="md"
          shadow="inner"
          _hover={{ textDecor: 'underline', cursor: 'pointer' }}
        >
          {tag.sys.id}
        </Badge>
      ))}
    </HStack>
  </VStack>
);

export default Card;
