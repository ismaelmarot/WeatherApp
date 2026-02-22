import styled from 'styled-components'
import { flex } from '../../mixins/setFlex'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
    ${flex('column','center','flex-start')}
    height: 50%;
    border-radius: 30px;
    background-color: ${GENERAL_COLORS.BlackGlass};
`

export const Title = styled.h3`
    margin: 1rem;
    color: ${GENERAL_COLORS.white};
`

export const Calendar = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    overflow-x: auto;
    width: 95%;
`

export const Item = styled.div`
    ${flex('column','center','center')}
    margin: 0rem;
    width: 5rem;
    height: 12rem;;
    flex-shrink: 0;
    padding: 1rem;
    background-color: ${GENERAL_COLORS.black};
    border-radius: 12px;
    color: ${GENERAL_COLORS.white};
`

export const Image = styled.img`
    width: 4rem;
    padding-bottom: 1rem;
    border-radius: 50%;
`

export const Day= styled.div`
    font-size: .7rem;
    margin: 1rem 0;
`

export const Lightning = styled.div`
    font-size: 1rem;
    opacity: 0.5;
`