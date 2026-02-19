import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Block = styled.div`
    ${flex('column','center','center')}
    ${size('100%','6rem')}
    border-radius: 12px;
    font-weight: 600;
    font-size: 1.2rem;
    color: ${GENERAL_COLORS.black};
    background: ${GENERAL_COLORS.black}
`