import styled from 'styled-components'
import { GENERAL_COLORS, ICONS } from '../../../constants'

export const Container = styled.div`
    position: relative;
    height: 100%;
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