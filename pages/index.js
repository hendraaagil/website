import { Box, Heading, Text } from '@chakra-ui/react';

import { getAge } from '../utils/age';

export default function Home() {
  return (
    <Box py={40} textAlign="center" lineHeight="taller">
      <Heading as="h1">Hello, I'm Hendra Agil 👋</Heading>
      <Text fontSize="2xl" fontWeight="700">
        Student. {getAge(new Date('2003, 09, 26'))} years old.
      </Text>
    </Box>
  );
}
