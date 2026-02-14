import styled from 'styled-components'
import { flex, size } from '../../../mixins'
import { GeneralColors, ICONS } from '../../../constants'

export const Container = styled.div`
    ${flex('column','center','flex-start')}
    ${size('100%','100%')}
`

export const InfoButton = styled.button`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: ${GeneralColors.white};
    cursor: pointer;
    z-index: 10;
`

export const InfoIcon = styled(ICONS.info)`
    font-size: 1.5rem;
`