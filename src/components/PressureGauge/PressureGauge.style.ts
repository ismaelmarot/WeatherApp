import styled from 'styled-components'
import { GeneralColors } from '../../constants'
import { flex } from '../../mixins'

export const Container = styled.div`
  ${flex('column','center','center')}
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  border: 2px solid ${GeneralColors.white};
  border-radius: 1rem;
`

export const Title = styled.span`
  font-size: 2rem;
  color: ${GeneralColors.white};
`

export const Pressure = styled.text`
  letter-spacing: .1rem;
  font-size: 1rem;
  fill: ${GeneralColors.white};
`

export const HPA = styled.text`
  font-size: 1rem;
  fill: ${GeneralColors.white};
`