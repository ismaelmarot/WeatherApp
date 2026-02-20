import styled from 'styled-components'
import { flex } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.section`
  ${flex('column','center','center')}
  width: 100%;   /* ✅ solo width */
  border-radius: 30px;
  opacity: 0.6;
  background: ${GENERAL_COLORS.black};
`

export const H3 = styled.h3`
  margin-top: 1rem;
  font-size: 1rem;
  color: ${GENERAL_COLORS.white};
`

export const Chart = styled.div`
  width: 100%;
  padding: 0 1rem 0 .5rem;
  font-size: .8rem;
`

export const GradientStopStart = styled.stop`
  stop-color: ${GENERAL_COLORS.blue};
`

export const GradientStopEnd = styled.stop`
  stop-color: rgb(192, 229, 241);
`