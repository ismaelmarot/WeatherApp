import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { BREAKPOINTS, GENERAL_COLORS, ICONS } from '../../constants'

export const Container = styled.div`
    ${flex('column','center','center')}
    ${size('100%','100%')}
    border-radius: 30px;
    overflow-y: auto;
    color: ${GENERAL_COLORS.white};
    background-color: ${GENERAL_COLORS.BlackGlass};
`

export const Header = styled.h3`
    flex: 0 0 auto;
    width: 90%;
    margin:  1rem;
`

export const List = styled.div`
    flex: 1 1 auto;
    width: 90%;
    min-height: 0;
    margin-bottom: 1rem;
    overflow-y: auto;
    border-top: 1px solid ${GENERAL_COLORS.black};
    border-bottom: 1px solid ${GENERAL_COLORS.black};
`

export const Item = styled.div`
    ${flex('row','center','space-between')} 
    padding: .5rem 0;
    font-size: 1rem;
     @media (min-width: ${BREAKPOINTS.tablet}) {
        font-size: 3rem;
        padding: 0;
    }
`

export const HourTemp = styled.div`
    ${flex('row','center','flex-start')}
    flex: 5;
    @media (min-width: ${BREAKPOINTS.tablet}) {
        flex: 5;
        justify-content: space-between;
    }
`

export const Hour = styled.span`
    margin-right: 2rem;
`

export const Span = styled.span`
    ${flex('row','center','flex-end')}
    flex: 5;
    @media (min-width: ${BREAKPOINTS.tablet}) {
        flex: 3;
    }
`

export const RainIcon = styled(ICONS.rain)`
    font-size: 1.5rem;
    margin-left: .5rem;
    @media (min-width: ${BREAKPOINTS.tablet}) {
        font-size: 3rem;
    }
`
