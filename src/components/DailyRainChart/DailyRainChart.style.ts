import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.section`
  ${flex('column','center','center')}
  ${size('100%','100%')}
  border-radius: 12px;
  background: ${GENERAL_COLORS.grey};
`

export const H3 = styled.h3`
  font-size: 1rem;
  color: ${GENERAL_COLORS.black};
`

export const Chart = styled.div`
  ${size('100%', '90%')}
`

export const GradientStopStart = styled.stop`
  stop-color: ${GENERAL_COLORS.blue};
`

export const GradientStopEnd = styled.stop`
  stop-color: rgb(192, 229, 241);
`