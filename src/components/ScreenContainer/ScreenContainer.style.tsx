import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  /* Mobile scroll limpio */
  -webkit-overflow-scrolling: touch;

  /* Evita scroll horizontal fantasma */
  overflow-x: hidden;
`;
