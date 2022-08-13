import { Heading } from '@chakra-ui/react';
import toLowerDashed from '@/libs/toLowerDashed';

const Heading4 = ({ children }) => {
  const id = toLowerDashed(children);
  return (
    <a href={`#${id}`}>
      <Heading
        as="h4"
        id={id}
        fontSize="xl"
        my={3}
        lineHeight="tall"
        _hover={{ textDecor: 'underline' }}
      >
        {children}
      </Heading>
    </a>
  );
};

export default Heading4;
