import styled from 'styled-components';

export const ScreensWrapper = styled.div`
  width: 100%;
`;

export const Screen = styled.section`
  width: 100vw;
  height: 100vh;

  scroll-snap-align: start;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  font-weight: 600;

  /* solo visual, luego se borra */
  background: #111;
  border-bottom: 1px solid rgba(255,255,255,0.08);

  &:nth-child(even) {
    background: #181818;
  }
`;
