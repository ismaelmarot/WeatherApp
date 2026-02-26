import styled from 'styled-components'
import { BREAKPOINTS, GENERAL_COLORS, ICONS } from '../../../constants'
import { flex, size } from '../../../mixins'

export const Container = styled.div`
    ${flex('column','center','space-between')}
    position: relative;
    height: 100%;
    min-width: 95%;
    text-shadow:
        0 1px 2px rgba(0, 0, 0, 0.6),
        0 4px 12px rgba(0, 0, 0, 0.25);
`

export const DataInfo = styled.div`
     ${flex('column', 'stretch', 'space-between')}
    ${size('100%','60%')}
    padding-bottom: 1rem;
    gap: 1rem;
    @media (min-width: ${BREAKPOINTS.tablet}) {
        padding-bottom: 0;
    }
`

export const InfoButton = styled.button`
    position: absolute;
    bottom: .1rem;
    right: .1rem;
    background: none;
    border: none;
    color: ${GENERAL_COLORS.white};
    cursor: pointer;
    z-index: 10;
`

export const InfoIcon = styled(ICONS.info)`
    font-size: 1.5rem;
`