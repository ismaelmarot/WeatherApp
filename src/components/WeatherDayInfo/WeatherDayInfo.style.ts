import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'
import { flex } from '../../mixins'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    width: 100%;
`

export const Item = styled.div`
    ${flex('row','center','space-between')}
    padding: .9rem;
    border-radius: 30px;
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: ${GENERAL_COLORS.white};
`

export const Label = styled.div`
`

export const Value = styled.div`
    ${flex('row','flex-end','center')}
`

export const Degrees = styled.div`
    ${flex('row','flex-end','center')}
    padding-left: .1rem;
    opacity: .5;
    font-weight: 200;
`

export const Strong = styled.strong`
    padding: .2rem;
    opacity: .5;
    font-size: 1rem;
    font-weight: 200;
`