import styled from 'styled-components'
import { flex } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
    ${flex('column','center','flex-start')}
    height: 100%;
    padding-top: 2rem;
    border-radius: .5rem;
    background-color: ${GENERAL_COLORS.grey};
`

export const H3 = styled.h3`
    font-size: 3rem;
    font-weight: 600;
    color: ${GENERAL_COLORS.white}

`