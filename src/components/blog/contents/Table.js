import { Table as ChakraTable, useColorModeValue } from '@chakra-ui/react';

const Table = ({ children }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <ChakraTable bg={bgColor} rounded="md" overflow="hidden">
      {children}
    </ChakraTable>
  );
};

export default Table;
