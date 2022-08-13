import { Td } from '@chakra-ui/react';

const TableData = ({ children }) => (
  <Td py={[1.5, 1.5, 3]} px={[3, 3, 6]} fontSize={['sm', 'sm', 'md']}>
    {children}
  </Td>
);

export default TableData;
