import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Paragraph = ({ children }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  if (children.type && children.type.name === 'Image') {
    return (
      <Box
        as="figure"
        my={3}
        mx="auto"
        w="fit-content"
        bg={bgColor}
        textAlign="center"
        rounded="md"
        overflow="hidden"
      >
        {children}
      </Box>
    );
  }

  return (
    <Text my={3} fontWeight="400">
      {children}
    </Text>
  );
};

export default Paragraph;
