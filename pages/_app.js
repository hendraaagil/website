import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';

import SEO from '../next-seo.config';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
