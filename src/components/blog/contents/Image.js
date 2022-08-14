import { Image as ChakraImage, Text } from '@chakra-ui/react';

const Image = ({ alt, src }) => (
  <>
    <ChakraImage src={src} alt={alt} />
    <Text as="figcaption" my={2} fontSize="sm">
      {alt}
    </Text>
  </>
);

export default Image;
