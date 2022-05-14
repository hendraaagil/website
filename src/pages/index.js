import { Heading, Text } from '@chakra-ui/react';

import getAge from '@/lib/age';
import PageContainer from '@/components/PageContainer';

const Home = () => (
  <PageContainer pb="72px" textAlign="center">
    <Heading as="h1" mb={4}>
      Hi! I&apos;m Hendra Agil 👋
    </Heading>
    <Text fontSize="2xl" fontWeight="600">
      Software Developer. {getAge()} years old.
    </Text>
  </PageContainer>
);

export default Home;
