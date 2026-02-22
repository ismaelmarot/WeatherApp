import styled from 'styled-components'
import { flex } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
    ${flex('column','center','flex-start')}
    height: 100%;
`

export const H3 = styled.h3`
    font-size: 4rem;
    font-weight: 600;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);
    color: ${GENERAL_COLORS.white};
`