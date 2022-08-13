import { OrderedList as ChakraOrderedList } from '@chakra-ui/react';

const OrderedList = ({ children }) => (
  <ChakraOrderedList pl={4}>{children}</ChakraOrderedList>
);

export default OrderedList;
