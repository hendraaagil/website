import { theme as defaultTheme, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '425px',
  md: '768px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1440px',
});

export const theme = extendTheme({
  fonts: {
    heading: `'Lexend', ${defaultTheme.fonts.heading}`,
    body: `'Lexend', ${defaultTheme.fonts.body}`,
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
