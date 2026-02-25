import styled from 'styled-components'
import { BREAKPOINTS, GENERAL_COLORS } from '../../constants'
import { flex } from '../../mixins'

export const Item = styled.div`
  border-radius: 30px;
  padding: .85rem;
`

export const ItemMoon = styled(Item)`
  ${flex('column','center','center')}
  height: 80%;
  padding: 0;
  background-color: ${GENERAL_COLORS.black};
`

export const Image = styled.img`
  width: 80%;
  border-radius: 50%;
  opacity: .9;
  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 60%;
  }
`