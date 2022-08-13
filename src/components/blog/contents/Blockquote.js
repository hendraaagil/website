import { Box, useColorModeValue } from '@chakra-ui/react';

const Blockquote = ({ children }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as="blockquote"
      my={3}
      pl={3}
      py={0.5}
      bg={bgColor}
      borderLeftWidth="4px"
      borderColor="brand.blue"
      rounded="sm"
    >
      {children}
    </Box>
  );
};

export default Blockquote;
