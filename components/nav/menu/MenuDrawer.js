import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  VStack,
} from '@chakra-ui/react';

import NavLink from '../NavLink';

const MenuDrawer = ({ isOpen, onClose, links }) => (
  <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent roundedTop="xl" overflow="hidden">
      <DrawerBody py={6} bg="brand.light">
        <VStack spacing={4}>
          {links.map((link) => (
            <NavLink
              key={link.name}
              link={link.url}
              name={link.name}
              hasBg
              onClose={onClose}
            />
          ))}
        </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default MenuDrawer;
