import { Container, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container my={20}>
      <Heading as="h1">Hello, I'm Hendra Agil 👋</Heading>
      <Text my={10} fontWeight="medium" fontSize="xl">
        Coming Soon ...
      </Text>
    </Container>
  );
}
