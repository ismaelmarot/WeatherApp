import styled from 'styled-components'
import { flex } from '../../mixins'
import { BREAKPOINTS, GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
    ${flex('row','flex-end','space-between')}
    padding: .5rem 1rem;
    font-size: 2rem;
    border-radius: 30px;
    color: ${GENERAL_COLORS.white};
    background-color: rgba(0, 0, 0, 0.6);
    @media (min-width: ${BREAKPOINTS.tablet}) {
        height: 10rem;
        ${flex('row','center','space-between')}
    }
`

export const Label = styled.div`
    font-size: 1.5rem;
    @media (min-width: ${BREAKPOINTS.tablet}) {
        font-size: 2.5rem;
    }
`

export const Value = styled.div`
    ${flex('row','flex-end','center')}
    font-size: 1.5rem;
    font-weight: 600;
     @media (min-width: ${BREAKPOINTS.tablet}) {
        font-size: 2.5rem;
     }
`

export const Strong = styled.strong`
    height: 100%;
    padding: .2rem .1rem;
    font-size: 1rem;
    font-weight: 300;
    opacity: .5;
    color: ${GENERAL_COLORS.white};
    @media (min-width: ${BREAKPOINTS.tablet}) {
        font-size: 1.5rem;
        padding-bottom: .4rem;
        margin-left: .2rem;
    }
`