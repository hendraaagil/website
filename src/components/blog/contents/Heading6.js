import { Heading } from '@chakra-ui/react';
import toLowerDashed from '@/libs/toLowerDashed';

const Heading6 = ({ children }) => {
  const id = toLowerDashed(children);
  return (
    <a href={`#${id}`}>
      <Heading
        as="h6"
        id={id}
        fontSize="md"
        my={3}
        lineHeight="tall"
        _hover={{ textDecor: 'underline' }}
      >
        {children}
      </Heading>
    </a>
  );
};

export default Heading6;
