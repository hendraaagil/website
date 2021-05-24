import { Link, Text, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <VStack as="footer" py={8} fontWeight="600" fontSize="sm">
      <Text>
        Created by{' '}
        <Link
          href="https://github.com/hendraaagil"
          isExternal
          color="brand.blue"
          fontWeight="700"
          textDecor="underline"
        >
          Hendra Agil
        </Link>{' '}
      </Text>
      <Text>
        With{' '}
        <Link
          href="https://contentful.com"
          isExternal
          color="brand.blue"
          fontWeight="700"
          textDecor="underline"
        >
          Contentful
        </Link>
        ,{' '}
        <Link
          href="https://nextjs.org"
          isExternal
          color="brand.blue"
          fontWeight="700"
          textDecor="underline"
        >
          Next.js
        </Link>{' '}
        and{' '}
        <Link
          href="https://chakra-ui.com"
          isExternal
          color="brand.blue"
          fontWeight="700"
          textDecor="underline"
        >
          Chakra UI
        </Link>
      </Text>
    </VStack>
  );
};

export default Footer;
