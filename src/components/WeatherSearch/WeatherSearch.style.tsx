// import styled from 'styled-components'
// import { GeneralColors } from '../../constants/GeneralColors'
// import { flex, size } from '../../mixins'
// import { sizeMax } from '../../mixins/setSize'

// export const Container = styled.div`
//   position: relative;
//   ${flex('row','flex-start','center')}
//   ${size('100%','100%')}
//   border: 3px solid red;
//   border-radius: .5rem;
//   padding-top: 10rem;
// `

// export const SearchWrapper = styled.div`
//   position: relative;
//   ${flex('row','center','center')}
//   ${size('80%','auto')}
//   ${sizeMax('30rem','4rem')}
// `

// export const SearchIcon = styled.div`
//   position: absolute;
//   top: 50%;
//   right: 1rem;
//   transform: translateY(-50%);
//   color: ${GeneralColors.darkGrey};
//   font-size: 2.5rem;
//   pointer-events: none;
// `

// export const Input = styled.input`
//   width: 100%;
//   color: ${GeneralColors.darkGrey};
//   font-size: 2.5rem;
//   padding-left: 1rem;
//   border-radius: .5rem;
//   border: 2px solid ${GeneralColors.grey};
//   background-color: ${GeneralColors.white};
//   outline: none;
//   transition: border-color 0.2s ease, box-shadow 0.2s ease;

//   &:focus {
//     border-color: ${GeneralColors.blue};
//     box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
//   }

//   &::placeholder {
//     color: ${GeneralColors.black};
//   }
// `

// export const ListPlacesSearch = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   right: 0;
//   overflow: hidden;
//   border: 2px solid ${GeneralColors.black};
//   border-radius: 8px;
//   z-index: 10;
//   background: ${GeneralColors.white};
// `

// export const ItemPlace = styled.div`
//   ${flex('column','flex-start','center')}
//   min-height: 3rem;
//   cursor: pointer;
//   padding: 0.6rem 0.8rem;
//   border-bottom: 1px solid ${GeneralColors.black};
//   color: ${GeneralColors.black};

//   &:hover {
//     background-color: ${GeneralColors.grey};
//   }
// `

// export const LocationPlace = styled.div`
//   width: 100%;
//   font-size: .8rem;
//   opacity: .7;
//   color: ${GeneralColors.black};
// `


import styled from 'styled-components'
import { GeneralColors } from '../../constants/GeneralColors'
import { flex, size } from '../../mixins'

/* CONTENEDOR GENERAL DEL SCREEN */
export const Container = styled.div`
  position: relative;
  ${flex('column', 'center', 'flex-start')}
  ${size('100%', '100%')}
  padding-top: 8rem;
`

/* WRAPPER DEL INPUT */
export const SearchWrapper = styled.div`
  position: relative;
  ${flex('row', 'center', 'center')}
  width: 100%;
  max-width: 30rem;
`

/* ICONO */
export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: ${GeneralColors.darkGrey};
  font-size: 2.5rem;
  pointer-events: none;
`

/* INPUT */
export const Input = styled.input`
  width: 100%;
  height: 4rem;
  font-size: 3rem;
  padding: 0 1rem;
  border-radius: .5rem;
  border: 2px solid ${GeneralColors.grey};
  background-color: ${GeneralColors.white};
  outline: none;

  &:focus {
    border-color: ${GeneralColors.blue};
    box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
  }

  &::placeholder {
    color: ${GeneralColors.black};
  }
`

/* LISTA DESPLEGABLE */
export const ListPlacesSearch = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;

  background: ${GeneralColors.white};
  border: 2px solid ${GeneralColors.black};
  border-radius: .5rem;
  z-index: 100;

  max-height: 20rem;
  overflow-y: auto;
`

/* ITEM */
export const ItemPlace = styled.div`
  ${flex('column', 'flex-start', 'center')}
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  border-bottom: 1px solid ${GeneralColors.black};
  color: black;
  font-size: 1.4rem;

  &:hover {
    background-color: ${GeneralColors.grey};
  }
`

export const LocationPlace = styled.div`
  font-size: 1rem;
  opacity: .7;
`
