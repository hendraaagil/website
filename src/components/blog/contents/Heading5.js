import { Heading } from '@chakra-ui/react';
import toLowerDashed from '@/libs/toLowerDashed';

const Heading5 = ({ children }) => {
  const id = toLowerDashed(children);
  return (
    <a href={`#${id}`}>
      <Heading
        as="h5"
        id={id}
        fontSize="lg"
        my={3}
        lineHeight="tall"
        _hover={{ textDecor: 'underline' }}
      >
        {children}
      </Heading>
    </a>
  );
};

export default Heading5;
