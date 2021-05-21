import { Global, css } from '@emotion/react';

export const GlobalStyle = ({ children }) => {
  return (
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
          html {
            scoll-behavior: smooth;
            cursor: default;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #eff4f6;
            color: #1d1f28;
          }
        `}
      />
      {children}
    </>
  );
};
