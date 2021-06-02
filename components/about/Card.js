import { Heading, Text, VStack } from '@chakra-ui/react';

const Card = ({ title, skills }) => (
  <VStack
    align="start"
    p={4}
    lineHeight="tall"
    rounded="md"
    shadow="md"
    transition="all 0.2s ease-in-out"
    _hover={{
      bg: 'gray.200',
      transform: 'translateY(-3px);',
    }}
  >
    <Heading as="h3" size="md" mb={2} fontWeight="600">
      {title}
    </Heading>
    {skills.map((skill, index) => (
      <Text key={index}>{skill}</Text>
    ))}
  </VStack>
);

export default Card;
