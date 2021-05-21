import Link from 'next/link';
import { Heading, HStack, Text } from '@chakra-ui/react';

import links from '../../data/navlinks.json';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <HStack
      as="nav"
      justify="space-between"
      py={6}
      mx="auto"
      w="full"
      fontFamily="heading"
      fontWeight="600"
      borderBottom="1px"
      borderBottomColor="gray.200"
    >
      <Link href="/">
        <Heading
          as="h1"
          size="md"
          _hover={{
            cursor: 'pointer',
            textDecor: 'underline',
            color: 'brand.blue',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          hendraaagil
        </Heading>
      </Link>
      <HStack spacing={10}>
        {links.map((link, index) => (
          <NavLink key={index} link={link.url} name={link.name} />
        ))}
      </HStack>
    </HStack>
  );
};

export default Navbar;
