import Image from 'next/image';
import {
  Button,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

const Card = ({ name, thumbnail, desc, github, demo }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <VStack
      overflow="hidden"
      w="full"
      rounded="md"
      shadow="md"
      transition="all 0.2s ease-in-out"
      _hover={{
        bg: bgColor,
        transform: 'translateY(-3px);',
      }}
    >
      <Image src={thumbnail} alt={name} width={1280} height={720} />
      <VStack p={4} textAlign="center" lineHeight="tall">
        <Heading fontSize="2xl" mt={2}>
          {name}
        </Heading>
        <Text pt={2}>{desc}</Text>
        <HStack py={2}>
          <Button
            onClick={() =>
              window.open(github, '_blank', 'noopener, noreferrer')
            }
            leftIcon={<AiFillGithub />}
            bg="brand.blue"
            color="brand.light"
            _focus={{ bg: bgColor, color: 'brand.blue' }}
            _hover={{ bg: bgColor, color: 'brand.blue' }}
          >
            GitHub
          </Button>
          {demo !== '-' && (
            <Button
              onClick={() =>
                window.open(demo, '_blank', 'noopener, noreferrer')
              }
              leftIcon={<AiOutlineLink />}
              bg="brand.blue"
              color="brand.light"
              _focus={{ bg: bgColor, color: 'brand.blue' }}
              _hover={{ bg: bgColor, color: 'brand.blue' }}
            >
              Demo
            </Button>
          )}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
