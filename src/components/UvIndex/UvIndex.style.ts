import styled from 'styled-components'
import { flex } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
    ${flex('row','flex-end','space-between')}
    padding: .5rem 1rem;
    font-size: 2rem;
    border-radius: 30px;
    color: ${GENERAL_COLORS.white};
    background-color: rgba(0, 0, 0, 0.6);
`

export const Label = styled.div`
    font-size: 1.2rem;
`

export const Value = styled.div`
    ${flex('column','center','center')}
    font-size: 1.5rem;
    font-weight: 600;
`