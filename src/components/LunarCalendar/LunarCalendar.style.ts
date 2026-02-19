import styled from 'styled-components'
import { flex } from '../../mixins/setFlex'
import { GENERAL_COLORS } from '../../constants'

export const Calendar = styled.div`
    ${flex('row','center','center')}
    gap: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    overflow-x: auto;
    background-color: ${GENERAL_COLORS.grey};
`


export const Item = styled.div`
    margin: 1rem;
    ${flex('column','center','center')}
`

export const Image = styled.img`
    width: 3rem;
    border-radius: 50%;
`

export const Day= styled.div`
    font-size: .8rem;
`

export const Lightning = styled.div`
    font-size: .7rem;
    opacity: 0.8;
`