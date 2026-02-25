import styled from 'styled-components'
import { BREAKPOINTS, GENERAL_COLORS } from '../../constants'
import { flex, size } from '../../mixins'

export const Container = styled.div`
  ${flex('column','center','center')}
  height: 95%;
  max-height: 95%;
`

export const Title = styled.h3`
  width: 100%;
  padding-bottom: .5rem;
  text-align: center;
  font-size: 2rem;
  text-shadow: 0 0 20px rgb(40, 10, 10);
  color: ${GENERAL_COLORS.white};
`

export const Pollutants = styled.div`
  ${flex('column','center','center')}
  ${size('100%','100%')}
  gap: .5rem;
  overflow-y: auto;
  padding-top: 19rem;
  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding-top: 32rem;
  }
`