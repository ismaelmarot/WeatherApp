import styled from 'styled-components'
import { flex } from '../../mixins'
import { BREAKPOINTS, GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
  ${flex('column','center','center')}
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 30px;
  background-color: ${GENERAL_COLORS.BlackGlass};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    ${flex('row','center','space-between')}
    padding: 1rem 2rem;
  }
`

export const Title = styled.span`
  font-size: 1.5rem;
  color: ${GENERAL_COLORS.white};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 2.5rem;
  }
`

export const Pressure = styled.text`
  letter-spacing: .1rem;
  font-size: 1rem;
  fill: ${GENERAL_COLORS.white}
`

export const HPA = styled.text`
  font-size: 1rem;
  opacity: .5;
  fill: ${GENERAL_COLORS.white}
`