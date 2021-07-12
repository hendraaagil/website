import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const ToggleMode = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle mode"
      icon={useColorModeValue(
        <FaRegMoon size="18px" color="#2A61CC" />,
        <FaRegSun size="18px" color="#2A61CC" />
      )}
      onClick={toggleColorMode}
      pos="fixed"
      mb={4}
      bottom={0}
      zIndex="sticky"
      rounded="md"
      border="2px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      sx={{
        background: useColorModeValue(
          'rgba(239, 244, 246, 0.75)',
          'rgba(29, 31, 37, 0.75)'
        ),
        backdropFilter: 'saturate(180%) blur(20px)',
      }}
    />
  );
};

export default ToggleMode;
