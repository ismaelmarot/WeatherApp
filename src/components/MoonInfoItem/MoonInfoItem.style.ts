import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'
import { flex, size } from '../../mixins'

export const Container = styled.div`
  ${flex('column','center','center')}
  ${size('100%','20%')}
  margin-bottom: 1rem;
`

export const Label = styled.div`
  font-size: 1rem;
  opacity: .5;
  color: ${GENERAL_COLORS.white};
`

export const Value = styled.div`
  ${flex('column','center','center')}
  font-size: 1.5rem;
  font-weight: 600;
  color: ${GENERAL_COLORS.white};
`