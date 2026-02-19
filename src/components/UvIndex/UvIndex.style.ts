import styled from 'styled-components'
import { flex } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
    ${flex('row','center','space-between')}
    padding: .5rem 2rem;
    font-size: 2rem;
    color: ${GENERAL_COLORS.white};
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.6);
`