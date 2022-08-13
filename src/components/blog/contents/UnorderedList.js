import { UnorderedList as ChakraUnorderedList } from '@chakra-ui/react';

const UnorderedList = ({ children }) => (
  <ChakraUnorderedList pl={4}>{children}</ChakraUnorderedList>
);

export default UnorderedList;
