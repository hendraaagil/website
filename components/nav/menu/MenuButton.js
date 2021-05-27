import { IconButton } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const MenuButton = ({ onOpen }) => (
  <IconButton
    aria-label="Open menu"
    icon={<GiHamburgerMenu size="24px" color="#2A61CC" />}
    onClick={onOpen}
    pos="fixed"
    bottom={0}
    right={0}
    mr={4}
    mb={4}
    zIndex="sticky"
    rounded="md"
    border="2px"
    borderColor="gray.200"
    sx={{
      background: 'rgba(239, 244, 246, 0.75)',
      backdropFilter: 'saturate(180%) blur(20px)',
    }}
  />
);

export default MenuButton;
