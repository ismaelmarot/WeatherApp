import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'
import { flex, size } from '../../mixins'

export const Container = styled.div`
  ${flex('row','flex-end','space-between')}
  ${size('100%','auto')}
  padding: .5rem 1rem;
  border-radius: 30px;
  background-color: ${GENERAL_COLORS.BlackGlass};
`

export const Label = styled.div`
  font-size: 1.5rem;
  color: ${GENERAL_COLORS.white};
`

export const Value = styled.div`
  ${flex('row','flex-end','center')}
  font-size: 1.6rem;
  font-weight: 600;
  color: ${GENERAL_COLORS.white};
`


export const Strong = styled.strong`
  font-size: 1rem;
  margin: 3px;
  opacity: .5;
`