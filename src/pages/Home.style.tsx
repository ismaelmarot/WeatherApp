import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border: 2px solid red;
`

export const AlertError = styled.p`
    color: red;
`;




//==========================================================================
// import styled from 'styled-components';

// export const ScreensWrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   overflow-y: scroll;

//   scroll-snap-type: y mandatory;  /* Snap vertical */
//   -webkit-overflow-scrolling: touch; /* Smooth scroll iOS */
//   scroll-behavior: smooth;          /* Smooth scroll moderno */

//   margin: 0;
//   padding: 0;
// `;

// export const Screen = styled.section`
//   width: 100vw;
//   height: 100vh;
//   scroll-snap-align: start;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 2rem;
//   font-weight: 600;
//   background-color: rgba(0,0,0,0.05);
//   border-bottom: 1px solid rgba(0,0,0,0.1);

//   /* Tablet: mostrar solo las primeras 3 pantallas */
//   @media (min-width: 768px) and (max-width: 1023px) {
//     &:nth-child(n + 4) {
//       display: none;
//     }
//   }

//   /* Desktop: mostrar solo la primera pantalla */
//   @media (min-width: 1024px) {
//     &:nth-child(n + 2) {
//       display: none;
//     }
//   }
// `;


