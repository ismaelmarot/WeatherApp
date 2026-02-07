import styled from 'styled-components'
import { GeneralColors } from '../../constants/GeneralColors'
import { flex } from '../../mixins/setFlex'

export const Item = styled.div`
  background-color: ${GeneralColors.grey};
  border-radius: .5rem;
  padding: .85rem;
`

export const Label = styled.div`
  font-size: 0.75rem;
  color: ${GeneralColors.black};
`

export const Value = styled.div`
  ${flex('column','center','center')}
  gap: .5rem;
  margin-top: .25rem;
  font-size: 1rem;
  font-weight: 500;
`