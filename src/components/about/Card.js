import { Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';

const Card = ({ title, skills }) => (
  <VStack
    align="start"
    p={4}
    lineHeight="tall"
    rounded="md"
    shadow="md"
    transition="all 0.2s ease-in-out"
    _hover={{
      bg: useColorModeValue('gray.200', 'gray.700'),
      transform: 'translateY(-3px);',
    }}
  >
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    {skills.map((skill) => (
      <Text key={skill}>{skill}</Text>
    ))}
  </VStack>
);

export default Card;
