import { Global, css } from '@emotion/react';
import { useColorModeValue } from '@chakra-ui/react';

const GlobalStyle = ({ children }) => (
  <>
    <Global
      styles={css`
        ::selection {
          background-color: #2a61cc;
          color: ${useColorModeValue('#eff4f6', '#1d1f28')};
        }
        ::-moz-selection {
          background-color: #2a61cc;
          color: ${useColorModeValue('#eff4f6', '#1d1f28')};
        }
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: ${useColorModeValue('#eff4f6', '#1d1f28')};
        }
        ::-webkit-scrollbar-thumb {
          background-color: #2a61cc;
          border-radius: 4px;
          border: 2px solid ${useColorModeValue('#eff4f6', '#1d1f28')};
        }
        html {
          scoll-behavior: smooth;
          cursor: default;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-weight: 500;
          background: ${useColorModeValue('#eff4f6', '#1d1f28')};
          color: ${useColorModeValue('#1d1f28', '#eff4f6')};
          transition: background 100ms ease;
        }
      `}
    />
    {children}
  </>
);

export default GlobalStyle;
