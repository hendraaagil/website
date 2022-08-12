import { theme as defaultTheme, extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '425px',
  md: '768px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1440px',
};

const theme = extendTheme({
  fonts: {
    heading: `'Lexend', ${defaultTheme.fonts.heading}`,
    body: `'Lexend', ${defaultTheme.fonts.body}`,
    mono: `'Fira Code', ${defaultTheme.fonts.mono}`,
  },
  colors: {
    brand: {
      blue: '#2A61CC',
      dark: '#1D1F28',
      light: '#EFF4F6',
    },
  },
  breakpoints,
});

export default theme;
