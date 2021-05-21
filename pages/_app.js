import Router from 'next/router';
import NProgress from 'nprogress';
import { DefaultSeo } from 'next-seo';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import SEO from '../next-seo.config';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';
import '../styles/css/nprogress.css';

import Navbar from '../components/nav/Navbar';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MotionBox = motion(Box);

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />

      <GlobalStyle>
        <Container maxW="container.lg">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <MotionBox
              key={router.route}
              animate="enter"
              as="main"
              exit="exit"
              flexGrow={1}
              initial="initial"
              variants={{
                initial: { opacity: 0, y: -25 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 25 },
              }}
            >
              <Component {...pageProps} />
            </MotionBox>
          </AnimatePresence>
        </Container>
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
