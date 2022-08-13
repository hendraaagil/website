import { Heading } from '@chakra-ui/react';
import toLowerDashed from '@/libs/toLowerDashed';

const Heading2 = ({ children }) => {
  const id = toLowerDashed(children);
  return (
    <a href={`#${id}`}>
      <Heading
        as="h2"
        id={id}
        fontSize="3xl"
        my={3}
        lineHeight="tall"
        _hover={{ textDecor: 'underline' }}
      >
        {children}
      </Heading>
    </a>
  );
};

export default Heading2;
