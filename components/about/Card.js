import { Heading, Text, VStack } from '@chakra-ui/react';

const Card = ({ title, skills }) => (
  <VStack
    align="start"
    p={4}
    lineHeight="tall"
    rounded="md"
    shadow="md"
    _hover={{
      bg: 'gray.200',
      transform: 'translateY(-3px);',
      transition: 'all 0.2s ease-in-out',
    }}
  >
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    {skills.map((skill, index) => (
      <Text key={index}>{skill}</Text>
    ))}
  </VStack>
);

export default Card;
