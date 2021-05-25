import Link from 'next/link';
import { Text } from '@chakra-ui/react';

const NavLink = ({ hasBg, link, name, onClose }) => (
  <Link href={link}>
    <Text
      as="a"
      onClick={onClose}
      py={hasBg && '2'}
      px={hasBg && '6'}
      w={hasBg && 'full'}
      bg={hasBg && 'gray.200'}
      rounded={hasBg && 'md'}
      fontWeight="600"
      textAlign="center"
      _hover={{
        cursor: 'pointer',
        textDecor: 'underline',
        color: 'brand.blue',
        transition: 'all 0.2s ease-in-out',
      }}
    >
      {name}
    </Text>
  </Link>
);

export default NavLink;
