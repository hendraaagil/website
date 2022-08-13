import { Heading } from '@chakra-ui/react';
import toLowerDashed from '@/libs/toLowerDashed';

const Heading3 = ({ children }) => {
  const id = toLowerDashed(children);
  return (
    <a href={`#${id}`}>
      <Heading
        as="h3"
        id={id}
        fontSize="2xl"
        my={3}
        lineHeight="tall"
        _hover={{ textDecor: 'underline' }}
      >
        {children}
      </Heading>
    </a>
  );
};

export default Heading3;
