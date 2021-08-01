import { Heading, Text } from '@chakra-ui/react';

import getAge from '../lib/age';
import PageContainer from '../components/PageContainer';

export default function Home() {
  return (
    <PageContainer pb="72px" textAlign="center">
      <Heading as="h1" mb={4}>
        Hello, I&apos;m Hendra Agil 👋
      </Heading>
      <Text fontSize="2xl" fontWeight="600">
        Student. {getAge()} years old.
      </Text>
    </PageContainer>
  );
}
