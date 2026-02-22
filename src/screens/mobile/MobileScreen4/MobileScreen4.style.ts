import styled from 'styled-components'
import { flex, size } from '../../../mixins'
import { GENERAL_COLORS, ICONS } from '../../../constants'

export const Container = styled.div`
    ${flex('column','center','space-between')}
    position: relative;
    height: 100%;
    min-width: 95%;
    text-shadow:
        0 1px 2px rgba(0, 0, 0, 0.6),
        0 4px 12px rgba(0, 0, 0, 0.25);
`

export const InfoButton = styled.button`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10;
    color: ${GENERAL_COLORS.white};
`

export const InfoIcon = styled(ICONS.info)`
    font-size: 1.5rem;
`