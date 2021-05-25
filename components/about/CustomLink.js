import { Link } from '@chakra-ui/react';

const CustomLink = ({ children, link }) => (
  <Link
    href={link}
    isExternal
    color="brand.blue"
    fontWeight="600"
    _hover={{
      textDecor: 'underline',
    }}
  >
    {children}
  </Link>
);

export default CustomLink;
