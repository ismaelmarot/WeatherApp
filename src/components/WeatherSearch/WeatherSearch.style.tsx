import styled from 'styled-components'
import { GeneralColors } from '../../constants/GeneralColors'
import { flex, size } from '../../mixins'
import { sizeMax } from '../../mixins/setSize'

export const Container = styled.div`
  position: relative;
  ${flex('row','center','center')}
  height: 10rem;
  border-radius: .5rem;
  background-color: ${GeneralColors.darkGrey};
`

export const SearchWrapper = styled.div`
  ${flex('row','center','center')}
  ${size('80%','auto')}
  ${sizeMax('30rem','3rem')}
  position: relative;
`

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: ${GeneralColors.darkGrey};
  font-size: 1.3rem;
  pointer-events: none;
`

export const Input = styled.input`
  width: 100%;
  color: ${GeneralColors.darkGrey};
  font-size: 1.5rem;
  padding-left: 1rem;
  border-radius: .5rem;
  border: 2px solid ${GeneralColors.grey};
  background-color: ${GeneralColors.white};
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${GeneralColors.blue};
    box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
  }

  &::placeholder {
    color: ${GeneralColors.black};
  }
`

export const ListPlacesSearch = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  border: 2px solid ${GeneralColors.black};
  border-radius: 8px;
  z-index: 10;
  background: ${GeneralColors.white};
`

export const ItemPlace = styled.div`
  ${flex('column','flex-start','center')}
  min-height: 3rem;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  border-bottom: 1px solid ${GeneralColors.black};
  color: ${GeneralColors.black};

  &:hover {
    background-color: ${GeneralColors.grey};
  }
`

export const LocationPlace = styled.div`
  width: 100%;
  font-size: .8rem;
  opacity: .7;
  color: ${GeneralColors.black};
`