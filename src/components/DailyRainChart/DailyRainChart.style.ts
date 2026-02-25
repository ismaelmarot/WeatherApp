import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.section`
  /* ${flex('column','center','center')}
    min-width: 0; */

display: flex;
  flex-direction: column;

  width: 100%;        /* 🔥 importante */
  min-width: 0;
  min-height: 0;


    min-height: 1;
    border-radius: 30px;
    background: ${GENERAL_COLORS.BlackGlass};
`

export const H3 = styled.h3`
  margin-top: .5rem;
  padding: .3rem;
  margin-right: 1rem;
  font-size: 1rem;
  color: ${GENERAL_COLORS.white};
`

export const Chart = styled.div`
  ${size('100%','16rem')}
  min-width: 0;
  min-height: 1px;
`

export const GradientStopStart = styled.stop`
  stop-color: ${GENERAL_COLORS.blue};
`

export const GradientStopEnd = styled.stop`
  stop-color: rgb(192, 229, 241);
`