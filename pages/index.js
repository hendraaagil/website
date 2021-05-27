import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { getAge } from '../lib/age';

export default function Home() {
  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box pb="72px" textAlign="center">
        <Heading as="h1" mb={4}>
          Hello, I'm Hendra Agil 👋
        </Heading>
        <Text fontSize="2xl" fontWeight="600">
          Student. {getAge()} years old.
        </Text>
      </Box>
    </Flex>
  );
}
