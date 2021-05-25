import { Box, Heading, Text } from '@chakra-ui/react';

const NotFound = () => (
  <Box py={40} textAlign="center">
    <Heading as="h1" mb={4} size="3xl">
      404
    </Heading>
    <Text fontSize="2xl" fontWeight="600">
      Halaman tidak ditemukan.
    </Text>
  </Box>
);

export default NotFound;
