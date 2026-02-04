// import { createGlobalStyle } from 'styled-components';
// import { flex } from '../mixins/setFlex';

// export const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     ${flex('column', 'center', 'center')}

//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
//       'Helvetica Neue', Arial, sans-serif;

//     background-color: rgba(245, 245, 247, 1);
//     color: rgba(29, 29, 31, 1);

//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
// `;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;

    background-color: #0f0f0f;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-family: inherit;
  }
`;
