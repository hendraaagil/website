import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';

const NavLink = ({ hasBg, link, name, onClose }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Link href={link} passHref>
      <Text
        as="a"
        onClick={onClose}
        py={hasBg && '2'}
        px={hasBg && '6'}
        w={hasBg && 'full'}
        bg={hasBg && bgColor}
        rounded={hasBg && 'md'}
        fontWeight="600"
        textAlign="center"
        transition="all 0.2s ease-in-out"
        _hover={{
          cursor: 'pointer',
          textDecor: 'underline',
          color: 'brand.blue',
        }}
      >
        {name}
      </Text>
    </Link>
  );
};

export default NavLink;
