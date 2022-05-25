import { Divider, Heading, Text } from '@chakra-ui/react';

import PageContainer from '@/components/PageContainer';

const Home = () => (
  <PageContainer pb="72px" textAlign="center">
    <Heading as="h1">Hi! I&apos;m Hendra Agil 👋</Heading>
    <Divider mx="auto" my={4} maxW={64} />
    <Text fontSize="2xl" fontWeight="600">
      Software Developer
    </Text>
  </PageContainer>
);

export default Home;
