import Image from 'next/image';
import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

const Card = ({ name, thumbnail, desc, github, demo }) => (
  <VStack
    overflow="hidden"
    w="full"
    rounded="md"
    shadow="md"
    _hover={{
      bg: 'gray.200',
      cursor: 'pointer',
      transform: 'translateY(-3px);',
      transition: 'all 0.2s ease-in-out',
    }}
  >
    <Image src={thumbnail} alt={name} width={1280} height={720} />
    <VStack p={4} lineHeight="tall">
      <Heading fontSize="2xl" mt={2}>
        {name}
      </Heading>
      <Text pt={2} textAlign="center">
        {desc}
      </Text>
      <HStack py={2}>
        <Button
          onClick={() => window.open(github, '_blank', 'noopener, noreferrer')}
          leftIcon={<AiFillGithub />}
          bg="brand.blue"
          color="brand.light"
          _hover={{ bg: 'brand.light', color: 'brand.blue' }}
        >
          GitHub
        </Button>
        <Button
          onClick={() => window.open(demo, '_blank', 'noopener, noreferrer')}
          leftIcon={<AiOutlineLink />}
          bg="brand.blue"
          color="brand.light"
          _hover={{ bg: 'brand.light', color: 'brand.blue' }}
        >
          Demo
        </Button>
      </HStack>
    </VStack>
  </VStack>
);

export default Card;