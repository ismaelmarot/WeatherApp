import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'

export const Item = styled.div`
  border-radius: .5rem;
  padding: .85rem;
  background-color: ${GENERAL_COLORS.grey}
`

export const ItemMoon = styled(Item)`
  background-color: ${GENERAL_COLORS.black};
`

export const Label = styled.div`
  font-size: 0.75rem;
  color: ${GENERAL_COLORS.black}
`
export const Image = styled.img`
  width: 8rem;
  margin: 1rem;
  border-radius: 50%;
  opacity: .9;
`