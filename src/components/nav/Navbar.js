import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  HStack,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';

import links from '@/data/navlinks.json';
import NavLink from './NavLink';
import MenuButton from './menu/MenuButton';
import MenuDrawer from './menu/MenuDrawer';

const Navbar = () => {
  const [isLargerThan425] = useMediaQuery('(min-width: 425px)');
  const [larger, setLarger] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setLarger(isLargerThan425);
  }, [isLargerThan425]);

  return (
    <>
      <Box
        as="nav"
        pos="fixed"
        py={6}
        mx="auto"
        w="full"
        left={0}
        shadow="sm"
        transition="background 100ms ease"
        zIndex="docked"
        sx={{
          background: useColorModeValue(
            'rgba(239, 244, 246, 0.75)',
            'rgba(29, 31, 37, 0.75)'
          ),
          backdropFilter: 'saturate(180%) blur(20px)',
        }}
      >
        <Container maxW="container.lg">
          <HStack justify="space-between">
            <Link href="/" passHref>
              <Heading
                as="h1"
                size="md"
                transition="all 0.2s ease-in-out"
                _hover={{
                  cursor: 'pointer',
                  textDecor: 'underline',
                  color: 'brand.blue',
                }}
              >
                hendraaagil
              </Heading>
            </Link>
            {larger && (
              <HStack spacing={10}>
                {links.map((link) => (
                  <NavLink key={link.name} link={link.url} name={link.name} />
                ))}
              </HStack>
            )}
          </HStack>
        </Container>
      </Box>
      {!larger && (
        <>
          <MenuButton onOpen={onOpen} />
          <MenuDrawer isOpen={isOpen} onClose={onClose} links={links} />
        </>
      )}
    </>
  );
};

export default Navbar;
