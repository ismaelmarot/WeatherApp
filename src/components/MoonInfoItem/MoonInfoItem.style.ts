import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'
import { flex, size } from '../../mixins'

export const Container = styled.div`
  ${flex('column','center','center')}
  ${size('100%','20%')}
  border-radius: 30px;
  padding: .85rem;
  background-color: ${GENERAL_COLORS.black};
`

export const Label = styled.div`
  font-size: 1rem;
  color: ${GENERAL_COLORS.grey};
`

export const Value = styled.div`
  ${flex('column','center','center')}
  margin-top: .25rem;
  font-size: 2rem;
  font-weight: 600;
  color: ${GENERAL_COLORS.grey};
`