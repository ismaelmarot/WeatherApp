import { createGlobalStyle } from 'styled-components'
import { size } from './../mixins'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    ${size('100%','100%')}
    margin: 0;
    padding: 0;
    /* background: rgba(90, 180, 228, 0.85); */
    background: rgb(0, 0, 0);
    overflow: hidden;

    font-family: system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;

    -webkit-font-smoothing: antialiased;
  }

   #root {
    min-height: 100dvh;
  }
`