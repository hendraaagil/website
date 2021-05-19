import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';

import SEO from '../next-seo.config';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />

      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
