import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
    ${flex('column','center','space-between')}
    ${size('100%','95dvh')}
    padding: 1rem 0;
    text-shadow:
        0 1px 2px rgba(0, 0, 0, 0.6),
        0 4px 12px rgba(0, 0, 0, 0.25);
`

export const TempIconContainer = styled.div`
    ${flex('column','flex-start','flex-start')}
    width: 100%;
    padding: 1rem;
`

export const Temp = styled.div`
    font-size: 10rem;
    font-weight: 500;
    line-height: 1;
    color: ${GENERAL_COLORS.white};
`

export const Location = styled.div`
    ${flex('column','center','center')}
    font-size: 1.5rem;
    color: ${GENERAL_COLORS.white};
`

export const Condition = styled.div`
    font-size: 3rem;
    color: ${GENERAL_COLORS.white};
`