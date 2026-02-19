import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'
import { flex } from '../../mixins'

export const Item = styled.div`
  border-radius: .5rem;
  padding: .85rem;
  background-color: ${GENERAL_COLORS.grey}
`

export const Label = styled.div`
  font-size: 0.75rem;
  color: ${GENERAL_COLORS.black}
`

export const Value = styled.div`
  ${flex('column','center','center')}
  gap: .5rem;
  margin-top: .25rem;
  font-size: 1rem;
  font-weight: 500;
`