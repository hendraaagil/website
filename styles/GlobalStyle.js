import { Global, css } from '@emotion/react';

export const GlobalStyle = ({ children }) => (
  <>
    <Global
      styles={css`
        ::selection {
          background-color: #2a61cc;
          color: #eff4f6;
        }
        ::-moz-selection {
          background-color: #2a61cc;
          color: #eff4f6;
        }
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #eff4f6;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #2a61cc;
          border-radius: 4px;
          border: 2px solid #eff4f6;
        }
        html {
          scoll-behavior: smooth;
          cursor: default;
        }
        b,
        strong {
          font-weight: 600;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-weight: 500;
          background: #eff4f6;
          color: #1d1f28;
        }
      `}
    />
    {children}
  </>
);
