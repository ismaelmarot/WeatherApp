import styled from 'styled-components'
import { GENERAL_COLORS, ICONS } from '../../../constants'

export const Container = styled.div`
    position: relative;
    height: 100%;
    text-shadow:
        0 1px 2px rgba(0, 0, 0, 0.6),
        0 4px 12px rgba(0, 0, 0, 0.25);
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