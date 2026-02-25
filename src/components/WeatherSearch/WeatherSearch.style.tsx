import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { BREAKPOINTS, GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
  ${flex('column','center','flex-start')}
  ${size('100%','100vh')}
`

export const SearchWrapper = styled.div`
  ${flex('row','center','center')}
  position: relative;
  align-self: center;
  width: 90%;
  max-width: 20rem;
  margin-top: 8rem;
  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 100%;
    min-width: 35rem;
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  pointer-events: none;
  color: ${GENERAL_COLORS.darkGrey};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 3rem;
    margin-right: 1rem;
    padding-right: .5rem;
  }
`

export const Input = styled.input`
  ${size('100%','4rem')}
  max-width: 400px;
  padding-left: 1rem;
  font-size: 2rem;
  outline: none;
  color: ${GENERAL_COLORS.white};
  border-radius: 999px;
  border: 2px solid ${GENERAL_COLORS.BlackGlass};
  background-color: ${GENERAL_COLORS.BlackGlass};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    height: 100%;
    min-width: 100%;
    margin: 1.5rem;
    font-size: 3rem;
    padding-left: 2.5rem;
  }

  -webkit-appearance: none;
  appearance: none;

  &:focus {
    border-color: ${GENERAL_COLORS.grey};
    box-shadow: 0 0 0 3px rgba(0, 128, 255, 0.15);
  }

  &::placeholder {
    color: ${GENERAL_COLORS.darkGrey};
  }
`

export const ListPlacesSearch = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;

  width: 100%;
  max-height: 25rem;

  box-sizing: border-box;

  z-index: 100;
  overflow-y: auto;
  
  border-radius: 2rem;
  border: 2px solid ${GENERAL_COLORS.BlackGlass};
  background: ${GENERAL_COLORS.BlackGlass};
`

export const ItemPlace = styled.div`
  ${flex('column', 'flex-start', 'center')}
  padding: 0.6rem 0.8rem;
  font-size: 1.4rem;
  cursor: pointer;
  color: white;
  border-bottom: 1px solid ${GENERAL_COLORS.grey};

  &:hover {
    background-color: ${GENERAL_COLORS.grey};
  }
`

export const LocationPlace = styled.div`
  font-size: 1rem;
  opacity: .5;
  color: white;
`