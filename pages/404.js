import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const NotFound = () => (
  <Flex align="center" justify="center" minH="100vh">
    <Box
      textAlign="center"
      bgGradient="linear(to-t, brand.dark, brand.blue)"
      bgClip="text"
    >
      <Heading as="h1" mb={4} size="3xl">
        404
      </Heading>
      <Text fontSize="2xl" fontWeight="600">
        Halaman tidak ditemukan.
      </Text>
    </Box>
  </Flex>
);

export default NotFound;
