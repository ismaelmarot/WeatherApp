import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { ICONS, GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
  padding: .85rem;
  border-radius: 30px;
  border: 2px solid ${GENERAL_COLORS.white};
  color: ${GENERAL_COLORS.white};
`

export const Label = styled.div`
  font-size: 1.2rem;
`

export const Value = styled.div`
  ${flex('column','center','center')}
  margin-top: .5rem;
  font-size: 2rem;
  font-weight: 500;
`

export const ArrowContainer = styled.div`
  ${flex('column','center','center')}
  ${size('2.5rem','2.5rem')}
  border: 2px solid ${GENERAL_COLORS.white};
  border-radius: 50%;
`

export const WindArrowIcon = styled(ICONS.windArrow)<{ $rotation: number}>`
  transform: rotate(${props => props.$rotation}deg);
  transition: transform .3s ease;
  font-size: 1.5rem;
`