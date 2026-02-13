import styled from 'styled-components'
import { GeneralColors } from '../../constants'
import { flex, size } from '../../mixins'

export const Container = styled.div`
  ${flex('column','center','center')}
  height: 100%;
  max-height: 100%;
`

export const Title = styled.h3`
  width: 100%;
  padding-bottom: .5rem;
  text-align: center;
  font-size: 1.5rem;
  color: ${GeneralColors.white};
  border-bottom: 1px solid ${GeneralColors.white};
`

export const Pollutants = styled.div`
  ${flex('column','center','center')}
  ${size('100%','100%')}
  gap: .5rem;
  overflow-y: auto;
`