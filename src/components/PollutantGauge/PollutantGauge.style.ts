import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Wrapper = styled.div`
  ${flex('row','center','center')}
  ${size('100%','auto')}
  border-radius: .5rem;
  border: 2px solid ${GENERAL_COLORS.white};
  color: ${GENERAL_COLORS.white};
`

export const Label = styled.div`
  font-size: 1rem;
`
export const Info = styled.div`
  ${flex('column','flex-start','center')}
  ${size('10rem','100%')}
  margin-left: 1rem;
`

export const Description = styled.small`
  font-size: .8rem;
  color: ${GENERAL_COLORS.darkGrey}
`

export const Status = styled.small`
  font-size: 1rem;
  color: ${GENERAL_COLORS.blue}
`

export const DataNumber = styled.p`
  font-size: .8rem;
  color: ${GENERAL_COLORS.white}
`