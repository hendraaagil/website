import { Box, Heading, Text } from '@chakra-ui/react';

import { getAge } from '../lib/age';

export default function Home() {
  return (
    <Box py={40} textAlign="center">
      <Heading as="h1" mb={4}>
        Hello, I'm Hendra Agil 👋
      </Heading>
      <Text fontSize="2xl" fontWeight="600">
        Student. {getAge()} years old.
      </Text>
    </Box>
  );
}
