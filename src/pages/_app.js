import Router from 'next/router';
import NProgress from 'nprogress';
import { DefaultSeo } from 'next-seo';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import SEO from 'next-seo.config';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/style';
import '@/styles/css/globals.css';
import '@/styles/css/nprogress.css';
import '@/styles/css/prism-one-dark.css';

import Navbar from '@/components/nav/Navbar';
import ToggleMode from '@/components/nav/ToggleMode';
import Footer from '@/components/Footer';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MotionBox = motion(Box);

const MyApp = ({ Component, pageProps, router }) => (
  <ChakraProvider resetCSS theme={theme}>
    <DefaultSeo {...SEO} />

    <GlobalStyle>
      <Container maxW="container.lg">
        <Navbar />
        <ToggleMode />
        <AnimatePresence mode="wait">
          <MotionBox
            key={router.route}
            animate="enter"
            as="main"
            exit="exit"
            flexGrow={1}
            pt="72px"
            initial="initial"
            variants={{
              initial: { opacity: 0, y: -10 },
              enter: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 10 },
            }}
          >
            <Component {...pageProps} />
          </MotionBox>
        </AnimatePresence>
        <Footer />
      </Container>
    </GlobalStyle>
  </ChakraProvider>
);

export default MyApp;
