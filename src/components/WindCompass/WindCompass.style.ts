import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { BREAKPOINTS, GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
  ${flex('column','center','flex-start')}
  border-radius: 50%;
  background-color: ${GENERAL_COLORS.BlackGlass};
  border: 2px solid ${GENERAL_COLORS.white};
  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin-top: 3rem;
  }
`

export const Svg = styled.svg`
  @media (min-width: ${BREAKPOINTS.tablet}) {
      ${size('20rem','20rem')}
      max-height: 20rem;
  }
`

export const CardinalDirections = styled.text`
  text-anchor: middle;
  font-size: 1rem;
  font-weight: 500;
  fill: ${GENERAL_COLORS.white};
`

export const Circle = styled.circle`
  fill: none;
  stroke-width: 2;
  stroke: ${GENERAL_COLORS.white};
`
