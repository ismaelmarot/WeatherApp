import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.section`
    ${flex('column','center','center')}
    border-radius: 30px;
    opacity: 0.6;
    background: ${GENERAL_COLORS.black};
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
    padding: 0 1rem 0 0;
    margin: 0rem;
    font-size: .8rem;
`