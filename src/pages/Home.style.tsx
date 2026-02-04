// import styled from 'styled-components';

// export const Container = styled.div`
//     width: 100%;
//     border: 2px solid red;
// `

// export const AlertError = styled.p`
//     color: red;
// `;


import styled from 'styled-components';

export const Screen = styled.section<{ color: string }>`
  height: 100vh;
  width: 100vw;
  background: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  font-weight: bold;
`;
