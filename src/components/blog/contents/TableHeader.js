import { Th } from '@chakra-ui/react';

const TableHeader = ({ children }) => (
  <Th
    py={[1.5, 1.5, 3]}
    px={[3, 3, 6]}
    bg="brand.blue"
    color="brand.light"
    fontSize={['sm', 'sm', 'md']}
    fontWeight="600"
    textTransform="capitalize"
  >
    {children}
  </Th>
);

export default TableHeader;
