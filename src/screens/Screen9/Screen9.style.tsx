import styled from 'styled-components'
import { flex, size } from '../../../mixins'
import { GENERAL_COLORS } from '../../../constants'

export const Container = styled.div`
    ${flex('column','center','center')}
    ${size('90%','100%')}
    padding-bottom: 1rem;
    border-radius: 30px;
    background-color: ${GENERAL_COLORS.black};
`

export const Strong = styled.div`
    margin: 0;
    font-size: 1rem;
    font-weight: 200;
    opacity: .5;
    color: ${GENERAL_COLORS.white};
`

export const MoonPhase = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${GENERAL_COLORS.white};
`