import { Link as ChakraLink } from '@chakra-ui/react';

const Link = ({ children, href }) => (
  <ChakraLink
    href={href}
    isExternal
    color="brand.blue"
    fontWeight="600"
    textDecor="underline"
  >
    {children}
  </ChakraLink>
);

export default Link;
