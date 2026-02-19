import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'
import { flex } from '../../mixins'

export const Item = styled.div`
  border-radius: 1rem;
  padding: .85rem;
  background-color: ${GENERAL_COLORS.grey}
`

export const ItemMoon = styled(Item)`
  ${flex('column','center','center')}
  padding: 0;
  background-color: ${GENERAL_COLORS.black};
`

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  opacity: .9;
`