import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors } from '../../constants'

export const Wrapper = styled.div`
  ${flex('row','center','center')}
  ${size('100%','8rem')}
  border-radius: .5rem;
  padding: 1rem;
  border: 2px solid ${GeneralColors.black};
`

export const Label = styled.div`
  font-size: 0.75rem;
  color: #000000;
`
export const Info = styled.div`
  ${flex('column','flex-start','center')}
  ${size('10rem','100%')}
  margin-left: 1rem;
`

export const Description = styled.small`
  color: ${GeneralColors.darkGrey};
  font-size: .7rem;
  height: 2rem;
`

export const Status = styled.small`
  font-size: 1rem;
  color: ${GeneralColors.blue};
`
