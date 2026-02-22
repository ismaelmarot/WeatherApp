import styled from 'styled-components'
import { size } from '../../mixins'

export const StatusDotStyled = styled.div<{ $color: string }>`
    ${size('12px','12px')}
    border-radius: 50%;
    background-color: ${props => props.$color};
`