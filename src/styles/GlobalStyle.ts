import { createGlobalStyle } from 'styled-components';
import { flex } from '../mixins/setFlex';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${flex('column', 'center', 'center')}

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Helvetica Neue', Arial, sans-serif;

    background-color: rgba(245, 245, 247, 1);
    color: rgba(29, 29, 31, 1);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
