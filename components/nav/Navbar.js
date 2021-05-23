import Link from 'next/link';
import { Container, Heading, HStack, Text } from '@chakra-ui/react';

import links from '../../data/navlinks.json';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <HStack
      as="nav"
      pos="fixed"
      justify="space-between"
      py={6}
      mx="auto"
      w="full"
      left={0}
      fontWeight="600"
      shadow="sm"
      zIndex="docked"
      sx={{
        background: 'rgba(239, 244, 246, 0.85)',
        backdropFilter: 'saturate(180%) blur(20px)',
      }}
    >
      <Container maxW="container.lg">
        <HStack justify="space-between">
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
      </Container>
    </HStack>
  );
};

export default Navbar;
