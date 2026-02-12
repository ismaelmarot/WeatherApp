import styled from 'styled-components'
import { GeneralColors } from '../../constants/GeneralColors'
import { flex, size } from '../../mixins'

export const Container = styled.div`
  position: relative;
  ${flex('column', 'center', 'flex-start')}
  ${size('100%', '100%')}
  padding-top: 8rem;
`

export const SearchWrapper = styled.div`
  position: relative;
  ${flex('row', 'center', 'center')}
  width: 90%;
  max-width: 22rem;
`

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  pointer-events: none;
  color: ${GeneralColors.darkGrey};
  
`

export const Input = styled.input`
  ${size('100%','4rem')}
  font-size: 2rem;
  outline: none;
  border-radius: 999px;
  border: 2px solid ${GeneralColors.grey};
  background-color: ${GeneralColors.white};

  -webkit-appearance: none;
  appearance: none;

  &:focus {
    border-color: ${GeneralColors.blue};
    box-shadow: 0 0 0 3px rgba(39, 88, 137, 0.15);
  }

  &::placeholder {
    color: ${GeneralColors.darkGrey};
  }
`

export const ListPlacesSearch = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  max-height: 20rem;
  border-radius: .5rem;
  z-index: 100;
  overflow-y: auto;
  background: ${GeneralColors.white};
  border: 2px solid ${GeneralColors.darkGrey};
`

export const ItemPlace = styled.div`
  ${flex('column', 'flex-start', 'center')}
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  border-bottom: 1px solid ${GeneralColors.darkGrey};
  font-size: 1.4rem;

  &:hover {
    background-color: ${GeneralColors.grey};
  }
`

export const LocationPlace = styled.div`
  font-size: 1rem;
  opacity: .7;
`
