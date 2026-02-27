import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { ICONS, GENERAL_COLORS, BREAKPOINTS } from '../../constants'

const GeneralLabel = styled.div`
  font-size: 1.5rem;
  @media (min-width: ${BREAKPOINTS.tablet}) {
      font-size: 2.5rem;
  }
`

const ContainerBase = styled.div`
  ${flex('row','flex-end','space-between')}
  padding: .5rem 2rem;
  font-size: 2rem;
  border-radius: 30px;
  color: ${GENERAL_COLORS.white};
  background-color: rgba(0, 0, 0, 0.6);
  @media (min-width: ${BREAKPOINTS.tablet}) {
    height: 10rem;
    ${flex('row','center','space-between')}
  }
`

export const Container = styled(ContainerBase)`
  ${flex('column','center','center')}
  width: 100%;
  margin-bottom: 3rem;
  @media (min-width: ${BREAKPOINTS.tablet}) {
    flex-direction: row;
  }
`

export const Label = styled(GeneralLabel)`
  width: 100%;
  margin-top: .5rem;
`

export const Value = styled.div`
  ${flex('column','center','center')}
  margin-top: .5rem;
  font-size: 2.5rem;
  font-weight: 600;
  @media (min-width: ${BREAKPOINTS.tablet}) {
    flex-direction: row-reverse;
    gap: 1rem;
  }
`

export const WindSpeed = styled.div`
  margin-top: .5rem;
`

export const ArrowContainer = styled.div`
  ${flex('column','center','center')}
  ${size('3.5rem','3.5rem')}
  border-radius: 50%;
  border: 2px solid ${GENERAL_COLORS.white};
`

export const WindArrowIcon = styled(ICONS.windArrow)<{ $rotation: number}>`
  transform: rotate(${props => props.$rotation}deg);
  transition: transform .3s ease;
  font-size: 2rem;
`