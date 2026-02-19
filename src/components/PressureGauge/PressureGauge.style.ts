import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'
import { flex } from '../../mixins'

export const Container = styled.div`
  ${flex('column','center','center')}
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 30px;
  border: 2px solid ${GENERAL_COLORS.white}
`

export const Title = styled.span`
  font-size: 2rem;
  color: ${GENERAL_COLORS.white}
`

export const Pressure = styled.text`
  letter-spacing: .1rem;
  font-size: 1rem;
  fill: ${GENERAL_COLORS.white}
`

export const HPA = styled.text`
  font-size: 1rem;
  fill: ${GENERAL_COLORS.white}
`