import styled from 'styled-components'
import { GeneralColors } from '../../constants/GeneralColors'

export const Item = styled.div`
  background-color: ${GeneralColors.grey};
  border-radius: .5rem;
  padding: .85rem;
`

export const ItemMoon = styled(Item)`
  background-color: ${GeneralColors.black};
`

export const Label = styled.div`
  font-size: 0.75rem;
  color: ${GeneralColors.black};
`
export const Image = styled.img`
  width: 8rem;
  margin: 1rem;
  border-radius: 50%;
  opacity: .9;
`;