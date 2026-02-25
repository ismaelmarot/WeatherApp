import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { BREAKPOINTS, GENERAL_COLORS } from '../../constants'

export const Wrapper = styled.div`
  ${flex('row','center','center')}
  ${size('100%','auto')}
  border-radius: 34px;
  color: ${GENERAL_COLORS.white};
  background-color: ${GENERAL_COLORS.BlackGlass};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    ${flex('row-reverse','center','space-between')}
    padding: 1rem 2rem;
  }
`

export const Label = styled.div`
  font-size: 1rem;
  color: ${GENERAL_COLORS.white};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 2rem;
  }
`

export const Info = styled.div`
  ${flex('column','flex-start','center')}
  ${size('11rem','90%')}
  margin: .5rem 0 .5rem 1rem;
  font-weight: 700;
  text-shadow: 0 0 20px rgba(255,255,255,0.4);
  @media (min-width: ${BREAKPOINTS.tablet}) {
    ${flex('row','flex-start','space-between')}
    width: 70%;
  }
`

export const Description = styled.small`
  font-size: .8rem;
  font-weight: 400;
  color: ${GENERAL_COLORS.darkGrey};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.2rem;
  }
`

export const DataNumber = styled.p`
  margin: 0;
  font-size: .8rem;
  color: ${GENERAL_COLORS.white};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.2rem;
  }
`

export const Status = styled.span<{$color: string}>`
margin-top: 1rem;
  font-size: 1rem;
  color: ${({ $color }) => $color};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.5rem;
  }
`

export const Element = styled.div`
`