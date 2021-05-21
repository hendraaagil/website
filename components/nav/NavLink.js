import Link from 'next/link';
import { Text } from '@chakra-ui/react';

const NavLink = ({ link, name }) => (
  <Link href={link}>
    <Text
      as="a"
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
